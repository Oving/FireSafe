/*!
 * FireSafe/controller/dateSource_controller
 * Storing the global public variable.
 * dateSource controller
 */
DataSourceController = {
	TYPE: "",
	DOMAIN: "localhost",
    PORT: "80",
    USERNAME: "admin",
    PASSWORD: "administrator",
    SITE_ID: "",
    callbackMaps: {},
    deviceIds: [],
    StartMainLoopInterval:null,
    Initialize: function(das_config,site_id,callback){
    	this.TYPE = das_config['type'];
    	this.SITE_ID = site_id;
    	this.DOMAIN = das_config['domain'];
    	this.PORT = das_config['port'];
    	this.USERNAME = das_config['username'];
    	this.PASSWORD = das_config['password'];
    	this.profileId = "";
    	if(this.TYPE == "nu4")
    	{
    		Nu4DataService.Initialize(this.DOMAIN,this.PORT);
			//判断是否有权限，从默认配置里读取用户名和密码进行数据连接。
			Nu4DataService.IsGuest(function (isGuest) {
			    if (isGuest) {
			        Nu4DataService.Login(DataSourceController.USERNAME,DataSourceController.PASSWORD,function(success){
			            if(success)
			                callback();
			            else
			                console.log(success)
			        });
			    }
			    else
			        callback();
			});
			
    	}
    	else if(this.TYPE == "renbase")
    	{console.log("renbase")}
    	else if(this.TYPE == "ctg_customized")
    	{console.log("ctg_customized")}

	},
	GetDevice:function(deviceId){
		var conf;
		////根据不同类型生成不同的conf
		if(this.TYPE == "nu4")
		{
			try{
				////根据ID从NU4获得该设备的详细信息
				Nu4DataService.GetRawDeviceById(this.SITE_ID,deviceId,function (device){
					conf = {
						//以下为公共属性
						device_name: device['device_name'],
						device_id: device['device_id'],
						device_type:device['device_type'],
						device_position: [+device['mark_posx'],+device['mark_posy'],+device['mark_posz']],
						mark_source: device['mark_source'],
						mark_type:device['mark_type'],
						rotate:[+device['mark_orix'],+device['mark_oriy'],+device['mark_oriz']],
						mark_scalex:device['mark_scalex'],
						mark_volume:device['mark_volume'],
						mark_line:device['mark_line'],
						mark_globalview:device['mark_globalview'],
						//以下为特有属性
						device_data:device['device_data']
					};
				});
			}catch(err){
				console.log("错误提示：请检查配置文件中的站点ID和设备ID是否匹配。")
			}
		}
		else if(this.TYPE == "renbase")
    	{console.log("renbase")}
    	else if(this.TYPE == "ctg_customized")
    	{console.log("ctg_customized")}
    	//用conf初始化deviceModel
		var deviceModel = new DeviceModel(conf);
		//返回deviceModel
		return deviceModel;
	},
	GetAllDevices:function(){
		var conf;
		var devicesArray =[];
		//根据不同类型生成不同的conf
		if(this.TYPE == "nu4")
		{
			Nu4DataService.GetAllDevicesOfSite(this.SITE_ID, function (devices) {
				for (var i = 0; i < devices.length; i++) {
		            var device = devices[i];
		            conf = {
						name: device['device_name'],
						id: device['device_id'],
						position: [parseInt(device['mark_posx']),parseInt(device['mark_posy']),parseInt(device['mark_posz'])],
						model: device['mark_source']
					}
		            devicesArray[device['device_id']]=new DeviceModel(conf);
		        }
		    },true);
		}
		else if(this.TYPE == "renbase")
    	{console.log("renbase")}
    	else if(this.TYPE == "ctg_customized")
    	{console.log("ctg_customized")}
		//返回devicesArray
		return devicesArray;
	},
	/**
	* The control allows external parties to register callback when events of a device are obtained.
	* This function register a callback for a device 
	* @param {number} id a device id
	* @param {function} callback
	*/
	ListenDevices:function(ids,callback){
		if(!callback) return;
		//暂时不要事件监听功能，有问题。会影响gif出现
		/*if(!this.StartMainLoopInterval){
			this.StartMainLoopInterval = this.StartMainLoop();
		}*/
		var contains = function(bb,obj) {
		    var i = bb.length;
		    while (i--) {
		        if (bb[i] === obj) {
		            return true;
		        }
		    }
		    return false;
		};
		//obtain the array of callbacks corresponding to this id from callbackMaps. If not exsiting, create a new one
		for(var i=0; i<ids.length;i++)
		{
			var id = ids[i];
			id = id+ "";
			var callbackArr = null;
			if(id in this.callbackMaps){
				callbackArr = this.callbackMaps[id];
			}
			else{
				callbackArr = [];
				this.callbackMaps[id] = callbackArr;
			}

			if(contains(callbackArr,callback)) return;
			else {
				callbackArr.push(callback);
			}
			if(!contains(this.deviceIds,parseInt(id)))
				this.deviceIds.push(parseInt(id));
		}
	},
	RemoveListenDevices:function(ids){

	},
	StartMainLoop:function(){
		////主循环，遍历事件数组
		var eventsInterval = setInterval(function(){
			if(DataSourceController.deviceIds && DataSourceController.deviceIds.length>0){
				Nu4DataService.GetNewestEventsByDeviceIds(DataSourceController.deviceIds, function(events){
					if(events){
						//console.log(events);
						for(var i = 0; i < events.length; i ++){
							var event = events[i];
							//fill event model
							conf = {
								//以下为公共属性
								event_name: event['event_name'],
								device_id: event['device_id'],
								event_data:$.parseJSON(event['event_data']),
								event_priority: event['event_priority'],
								time_modified: event['time_modified']
								//以下为特有属性
							};
							var eventModel = new EventModel(conf);
							var id = event['device_id'];
							var callbackArr = DataSourceController.callbackMaps[id];
							for( callback in callbackArr){
								callbackArr[callback](eventModel);
							}
						}
					}
				});
			}
		},2000);
		return true;
	}
}