/*!
 * FireSafe/controller/EventModelController
 * Storing the global public variable.
 * EventModelController
 */
EventModelController = {
	lastTimeSec : 0,//上一次事件调用发生时的时刻
    Initialize: function(){
    	if(this.TYPE == "nu4")
    	{
    	
    	}
    	else if(this.TYPE == "renbase")
    	{console.log("renbase")}
    	else if(this.TYPE == "ctg_customized")
    	{console.log("ctg_customized")}
	},
	EventsProcess:function(eventModel){
		var item_device = PlatformController.devicesArr[eventModel['device_id']];
    	if(!item_device){
    		console.log("错误提示：请检查ListenDevices监听是否为正确的设备ID。");
    		return;
    	}
    	var eventsdate = eventModel.event_data;//当前事件数据
    	var htmlForCallout ="";
    	var device_type_config = DeviceModelController.device_type_config[item_device['device_type']];

    	if(!device_type_config){
    		htmlForCallout = SpecialThreeTypes(item_device['device_type']);
    	}
    	else{
    		////遍历所有属性
	        for(var i=0;i<device_type_config.length;i++){
	        	////以下特定的三种属性不会包含attribute_config
	        	var attrName = device_type_config[i]['attribute_name'];
	        	if(attrName=='PointLocationAttribute'||attrName=='LiveVideoAttribute'||attrName=='AccessControlAttribute'){
	        		htmlForCallout = SpecialThreeTypes(item_device['device_type']);
	        		continue;
	        	}
	        	////更新当前属性的callout和CDT中的自定义行为（部分）
	        	var arr=$.parseJSON(device_type_config[i]['attribute_config']);
	        	//当前属性CDT中预定义的参数数组
	        	var paramsArray=arr['attrParams'];
	        	//当前属性CDT中预定义的条件及内容（内容为该条件下CDT中所有可定义内容）
	        	var conditonArry = arr['attrConditionalBehaviors'];
	        	//当前属性CDT默认callout的html代码
	        	var DefaultHtmlstr= unescape(arr['attrDefaultCalloutHtml']);
	        	//替换默认html代码的参数为event获得的变量
                for(var j=0;j<paramsArray.length;j++){
                    var patt = new RegExp("%"+paramsArray[j]+"%",'g');
                    DefaultHtmlstr = DefaultHtmlstr.replace(patt,eventsdate[paramsArray[j]]);
                }
                //解析条件数组，依次获得其callout、条件、行为
                for(var k=0;k<conditonArry.length;k++){
                    var condition = unescape(conditonArry[k]['condition']);
                    //防止满足多个条件的面板html重复叠加
                    var condition_Htmlstr = unescape(conditonArry[k]['behavior']['calloutHtml']);
                    for(var n=0;n<paramsArray.length;n++){
                    	//当前属性CDT中预定义的参数
                        var patt = new RegExp("%"+paramsArray[n]+"%",'g');
                        var eventParam = eventsdate[paramsArray[n]];
                        //DefaultHtmlstr = DefaultHtmlstr.replace(patt,eventsdate[paramsArray[n]]);
                        condition_Htmlstr = condition_Htmlstr.replace(patt,eventParam);
                        condition = condition.replace(patt,eventParam);
                    }
                    //console.log(conditonArry[k])
                    //console.log(unescape(conditonArry[k]['behavior']['calloutHtml']))
                    if(condition){
                    	DefaultHtmlstr = condition_Htmlstr+'<br/>';
                    	//如果体积颜色改变
                    	if(conditonArry[k]['behavior']['volumeColor']!='%25not_set%25'){
                    		modifyVolumeColor(item_device,conditonArry[k]['behavior']['volumeColor']);
                    	}
                    	//如果标签文字改变
                    	if(conditonArry[k]['behavior']['placemarkLabel']){

                    	};
                    }
                }
                if(DefaultHtmlstr=='%not_set%<br/>' || DefaultHtmlstr=='%not_set%')
                    DefaultHtmlstr = '';
                htmlForCallout += DefaultHtmlstr;
	        }
    	}
    	item_device.Placemark.SetCallout(item_device.Placemark.GetName(),htmlForCallout);
    	BehaviorHandling(eventModel);
    	
    	////事件处理时的附属函数
    	function SpecialThreeTypes(Threetype)
    	{
    		var htmlForCallout = "";
    		switch(Threetype){
        		case 'PointLocationType':
        			var coordinate = parseFloat(eventsdate['loc_x']).toFixed(2)+","+parseFloat(eventsdate['loc_y']).toFixed(2)+","+parseFloat(eventsdate['loc_z']).toFixed(2);
		            var pos = [eventsdate['loc_x'],eventsdate['loc_y'],eventsdate['loc_z']];
	            	//如果是二维标签
	            	item_device.Placemark.SetPosition(pos);//不会实时变化
	            	//如果是三维标签
	            	var model = item_device.Model;
		            if(model){
		                var rotate = [0,+item_device['rotate'][1] * Math.PI / 180.0,0];
		                model.SetPosition(pos);//会实时变化
		                model.SetRotation(rotate);
		            }
		            item_device['device_position'] = pos;
	            	PlatformController.newscene.Render();//不执行
	            	htmlForCallout += '<div width:100%;text-align:left; ">位置：<span class="paramText">('+coordinate+')</span><br/>容差：<span class="paramText">'+eventsdate['loc_error']+'</span></div>';
        			break;
    			case 'LiveVideoType':
    				var cctvUrl = $.parseJSON(item_device['device_data'])['Stream URL'];
                	htmlForCallout += "<img class='cctv_iframe' src='/"+cctvUrl+"'/><br/>";
    				break;
    			case 'AccessControlType':
    				if(eventsdate['access_code']=='401')
	                    htmlForCallout += '<div style="background-color:#e6efc2; color:red; width:100%;border:1px solid #ff9c33; text-align:center; ">验证失败</div>';
	                else if(eventsdate['access_code']=='601')
	                {
	                    var mydate = new Date();
	                    var nowtime = mydate.toLocaleTimeString()+" "+mydate.toLocaleDateString();
	                    htmlForCallout += '<div style="width:100%;text-align:left; "><table><tr><td rowspan="5" width="40%"><img src="'+eventsdate['access_user_picture']+'"/></td><td>--最后进入的人--</td></tr><tr><td style="font-weight:thicker;font-size:150%;">'+eventsdate['access_user_name']+'</td></tr><tr><td>ID:'+eventsdate['access_user_id']+'</td></tr><tr><td>时间：'+nowtime+'</td></tr><tr><td>验证方式：'+eventsdate['access_sensor_type']+'</td></tr></table></div>';
	                }
    				break;
        	}
    		return htmlForCallout;
    	}
    	//修改体积颜色 函数
    	function modifyVolumeColor(item_device,color)
		{
		    var polygon = item_device.Volume;
		    /***将颜色转换为rgb格式***/
		    color = color.slice(3);//剔除无关字符
		    var colors = [];
		    colors[0]=parseInt("0x"+color.slice(0,2));//R
		    colors[1]=parseInt("0x"+color.slice(2,4));//G
		    colors[2]=parseInt("0x"+color.slice(4,6));//B
		    polygon.SetColor(colors[0], colors[1], colors[2]);
		}
		/**
		*统一为所有设备执行“行为”参数。
		*@param {object} eventModel
		*@预定义的参数:
		* behavior_callout 弹窗 value：{boolean} true or false
		* behavior_jump_and_callout 弹窗并跳转 value：{boolean} true or false
		* behavior_level_outstanding 突出本层 value：{string} level_name
		* behavior_info_text 字幕提示 value：{string} text
		*/
		function BehaviorHandling(eventModel)
		{
	    	var item_device = PlatformController.devicesArr[eventModel['device_id']];
	    	var eventsParams = eventModel.event_data;//当前事件数据
	    	var pm = item_device.Placemark;

	    	//遍历事件提交的参数数组
		    for(var param in eventsParams)
		    {
		    	//当为“行为参数”时
		        if(param.substring(0,9)=='behavior_')
		        {
		        	//弹窗参数
		            if(param=='behavior_callout' && eventsParams[param]=="true"){
		                pm.GetCallout().SetVisibility(true);
		            //弹窗&跳转参数
		            }else if(param=='behavior_jump_and_callout' && eventsParams[param]=="true"){
		                pm.GetCallout().SetVisibility(true);
		                DeviceModelController.viewToDevices(eventModel['device_id']);
		            //加强本层参数    
		            }else if(param=='behavior_level_outstanding'){
		                var land = PlatformController.newscene.GetLand();
		                for(var i = 0; i < land.GetNumberOfBuildings(); i ++)
		                {
		                    var building = land.GetBuildingByIndex(i);
		                    for(var j = 0; j < building.GetNumberOfBlocks(); j ++)
		                    {
		                        var block = building.GetBlockByIndex(j);
		                        for(var k = 0; k < block.GetNumberOfLevels(); k ++)
		                        {
		                            var level = block.GetLevelByIndex(k);
		                            if(!(eventsParams[param]=="false"))//如果为true
		                            {
		                               if(level["name"]!=eventsParams[param])
		                                    level.SetOpacity(0.1);
		                            }
		                            else
		                                level.SetOpacity(1);
		                        }
		                    }
		                }
		            //behavior_go_to_view
		            }else if(param=='behavior_go_to_view'){
		                var pos = [88.9888148639529,109.17449266999309,93.72296599576194];
		                var target = [64.45766380677908,23.870323846745464,62.83374616112505];
		                PlatformController.newscene.GetEye().GlideTo(pos,target);
		                var needHideLevel = [15,14];
		                PlatformController.hideAndShowLevel(needHideLevel)
		            //behavior_show_escaperoutes
		            }else if(param=='behavior_show_escaperoutes'){
		                PlatformController.newscene.AddModel("/nu/images/placemarks/187/187.dae", function (newscene, elements) {
		                    //var rotate = [];
		                    //var scale = +device['mark_scalex'];
		                    var pos = [35.14106,23.90754,45.10198];
		                    //elements[0].Attach(light);
		                    elements[0].SetPosition(pos);
		                    //elements[0].SetRotation(rotate);
		                    //elements[0].SetScale(scale);
		                });    
		            }
		            //behavior_info_text
		            else if(param=='behavior_info_text'){//智能字幕提示
		            	//设置最小时间间隔，该事件必须大于6秒以上才更新。
		            	var nowTime = eventModel['time_modified'];
		            	nowTime = nowTime.split(" ")[1];
		            	nowTime = nowTime.split(":");
		            	var nowSec = +nowTime[0]*3600+nowTime[1]*60+nowTime[2];

		            	if((nowSec - EventModelController.lastTimeSec)>6){
			                PlatformController.SmartSubtitles(eventsParams[param],5000)
			                EventModelController.lastTimeSec = nowSec;
		            	}
		            }
		        }
		    }
		};
	}
}