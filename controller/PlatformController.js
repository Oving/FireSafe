/*!
 * FireSafe/controller/PlatformController
 * PlatformController
 * 用于控制消防平台的主要逻辑流程、UI界面处理。
 */
PlatformController = {
	/////////////////全局公共数据/////////////////
    newscene : null, //Newscene Handle
	pla_config : null, //app界面配置json文件
	das_config : null, //数据源信息配置json文件
	devicesArr : [], //当前设备Model数组
	modelsArr : [], //当前设备Model数组
	/////////////////已经存在于app.html的标签ID/////////////////
	domIds : {
		///for bbl
	    divForBBL: "tab_bbl",
	    divBBL: "div_bbl",
	    cbBBL: "cb_bbl",
	    spanBBL: "span_bbl",
		///for others
	    divForWebGL: "canvas"
	},
	///NewScene初始化设置配置文件
	NewSceneConfing : {
	    GlideSpeed: 'NORMAL',//视角滑动速度
	    initViewPos: { //初始视角坐标
	        pos : [-64.17067336670084,6.002191776137717,-57.400092246751456],
	        tar : [28.359104130926198,0.03340577832835834,40.80752210648468]
    },
    ShowStatistics: true, //显示fps
    SetBackgroundColor: 'rgb(211, 211, 211)', //设置背景
    ShowGrid: false, //显示网格
    ShowLandPanel: true //显示LandPanel
	},
    Initialize: function(){
        console.log('0%:......正在读取配置文件')
        //$('#consoleInfo').html('加载中..0%<br>');
    	
	    $.getJSON("../../config/platform.json", "json", function (data) {
	    	///从platform.json获得pla_config对象
	        PlatformController.pla_config = data;
	        ///引用配置文件中的newscene库文件
	        include_js(PlatformController.pla_config['ns_lib'], function(){
					///从dataSource.json获得das_config对象
					$.getJSON("../../config/dataSource.json", "json", function (data) {
						PlatformController.das_config = data;
						//初始化dataSource
						//DataSourceController.Initialize(PlatformController.das_config,PlatformController.pla_config['site_id'],login_success);
						/**如已登录则执行该函数**/
						login_success();
						function login_success()
						{
					        console.log('20%:......数据库连接完成，正在初始化各模块')
					        //$('#consoleInfo').html('加载中..20%<br>');
							///初始化Newscene引擎
							PlatformController.InitNewscene();
							///初始化平台界面
							PlatformController.InitPlatform();
						};
					});
				
			});
	    });
	},
	InitNewscene:function(){
		//NewScene引擎加载
	    this.newscene =  new NewScene(document.getElementById(this.domIds.divForWebGL));
	    if (this.newscene.IsInitialized()){
	        	console.log('40%:......正在加载Newscene引擎')
		        //$('#consoleInfo').html('加载中..40%<br>');
	            this.newscene.AddModel(this.pla_config['model_src'], function (newscene, elements) {
			            //======basical setting======//
			            ///设定初始视角
			            var pos = PlatformController.NewSceneConfing.initViewPos.pos;
			            var tar = PlatformController.NewSceneConfing.initViewPos.tar;
			            newscene.GetEye().ViewTo(pos,tar);
			           	///设定滑动速度
			           	newscene.GetEye().SetGlideSpeed(NewScene.Eye.GlideSpeed[PlatformController.NewSceneConfing.GlideSpeed]);
						///是否显示LandPanel
						if(!PlatformController.NewSceneConfing.ShowLandPanel) 
			            	newscene.HideLandPanel();
						///是否显示详细信息（fps）
			            if(PlatformController.NewSceneConfing.ShowStatistics)
			                newscene.ShowStatistics();
						///是否显示网格
			            if(PlatformController.NewSceneConfing.ShowGrid)
			                newscene.ShowGrid();
						///newscene场景背景色
			            newscene.SetBackgroundColor(211, 211, 211);
			            ///ambience
			            var ambience = newscene.GetAmbience();            
			            ambience.SetSky(NewScene.Ambience.SkyType.SUNSKY);
			            newscene.ShowShadow();
			            ///map
			            /*var map;
			            var map = newscene.GetMap();
			            if(!map) {
			              newscene.Mask("Map is not supported in this NewScene edition.");
			              return;
			            }
			            map.SetOrigin(116.49496793746948,39.98150202730775);

			            //116.39713, 39.91578 for osm
			            //116.403171, 39.917241 for google and tencent
			            map.SetEngine(NewScene.Map.Engine.OSM_STANDARD);
			            map.SetVisibility(true);

			            $("#engine").change(function () {
			                var type = $(this).val();
			                map.SetEngine(NewScene.Map.Engine[type]);
			            });*/
			            ///新特性：小于参数内元素大小的elements将被隐藏
			            newscene.SetInvisibleMeshThreashold(20)

			            //var ren = new RENClient('http://192.168.1.107:1802', 'admin', 'renbase');

			            ///点击取点:点击场景输出当前坐标（for developing）
			           	document.getElementById("canvas").addEventListener("click", function(event){
							 var pos = newscene.GetEye().PickPoint(event.clientX, event.clientY);
							 console.log('Pick Point： '+pos);
						});
						$('#consoleInfo span').append(" √");
	        	},function(target){
		        console.log('fail')
				//$('#consoleInfo').html('失败：模型载入发生错误。<br>');
		        }, function(target, percentage){
		        //console.log(" ===模型加载进度: " + (percentage.toFixed(2) * 100).toString() + "%") //注释掉这一行，节省时间
        		$('#consoleInfo').html('模型文件下载进度<br><span style="font-size:150%;">' + (percentage.toFixed(0) * 100).toString() + '%</span>');
		        });
	    }
	},
	InitPlatform:function(){

		///更新界面时钟
	    setInterval(this.UI_Clock,1000);
	    ///在右上角显示用户名
	    $('#user_name').html(this.das_config['username']);
	    ///生成侧边栏主导航
	    PlatformController.showNav();
	    ///注册BBL选项卡点击事件
	    $('#fireSystem').click(function(event) {
	        if($(this).css('background-color')=='rgb(209, 209, 211)')//unactivated
	        {
	            $(this).css('background-color','#fff');//activated
	            $('#DevicesList').css('background-color','#d1d1d3');
	            $('#tab_system').show();
	            $('#tab_content').hide();
	        }
	        ///隐藏功能：点击“消防系统”tab时，console当前视角坐标
            var position = PlatformController.newscene.GetEye().GetPosition();
            var target = PlatformController.newscene.GetEye().GetTarget();
            var EyeCoordinate=[];
            EyeCoordinate["position"] = position;
            EyeCoordinate["target"] = target;
            console.log(EyeCoordinate);
	    });
	    ////注册DeviceNav选项卡点击事件
	    $('#DevicesList').click(function(event) {
	        if($(this).css('background-color')=='rgb(209, 209, 211)')//unactivated
	        {
	            $(this).css('background-color','#fff');//activated
	            $('#fireSystem').css('background-color','#d1d1d3');
	            $('#tab_content').show();
	            $('#tab_system').hide();
	        }
	    });
	    ///创建BBL
	    //createBBLDivs(newscene);
	    ///设备标签模块
		DeviceModelController.Initialize();
		///事件处理模块
		//EventModelController.Initialize();
		///附加功能模块
		AdditionModelController.Initialize();
	},
	showNav:function(){
	    var first_level = this.pla_config['level_module'];
	    var htmlstr="";
		for(var i in first_level){
			var second_level = first_level[i]['module'];
			var isGrey = "";
            if(!first_level[i]['module']){
                isGrey = 'isGrey';
            }
	        htmlstr += '<li class="nav_level '+isGrey+'">'+first_level[i]['name']+'</li><ul>';
	        for(var j in second_level){
	        	if(second_level[j]['visibility']=='false')
	                continue;
	            var isGrey = "";
	            if(!second_level[j]['module']){
	                isGrey = 'isGrey';
	            }
	            var third_level = second_level[j]['module'];
	            htmlstr += '<li name="second_level" class="'+isGrey+'">'+second_level[j]['name']+'</li><ul>';
	            for(var k in third_level){
	                if(third_level[k]['visibility']=='false')
	                    continue;
	                var isGrey = "";
	                if(!third_level[k]['module']){
	                    isGrey = 'isGrey';
	                }
	                htmlstr += '<li class="'+isGrey+'">'+third_level[k]['name']+'</li><ul>';
	                var device_level = third_level[k]['module'];
	                for(var kk in device_level)
	                {
	                	//如果该设备在配置文件中定义为不可见，则跳过
	                    if(device_level[kk]['visibility']=='false')
	                        continue;
	                    var deviceId = device_level[kk]['device_id'];
	                    htmlstr += '<li class="listStyle"><span>· </span>'+device_level[kk]['name']+'</li>';
	                }
	                htmlstr += '</ul>';
	            }
	            htmlstr += "</ul>";
	        }
	        htmlstr += "</ul>";
	    }
	    $('#mynav_ul').html(htmlstr);
	    $('#mynav_ul>li').next('ul').toggle();
	    ////生成非主导航dom结构时
        $('#mynav_ul>li').click(function (){
            $(this).next('ul').toggle(300);
            /////提示小三角可展开标志
            if(!$(this).children('span[class]')[0]){
                if($(this).next('ul').length>0 && $(this).next('ul').html() !="")
                    $(this).append('<span class="glyphicon glyphicon-triangle-bottom"></span>')
                //PlatformController.DevicesVisibility($(this),false);
            }
            else{
                $(this).children('span[class]')[0].remove();
                //PlatformController.DevicesVisibility($(this),true);
            }
        });



        ///systemNav
        var first_level = this.pla_config['system_module'];
	    var htmlstr="";
		for(var i in first_level){
			var second_level = first_level[i]['module'];
			var isGrey = "";
            if(!first_level[i]['module']){
                isGrey = 'isGrey';
            }
	        htmlstr += '<li class="nav_level '+isGrey+'">'+first_level[i]['name']+'</li><ul>';
	        for(var j in second_level){
	        	if(second_level[j]['visibility']=='false')
	                continue;
	            var isGrey = "";
	            if(!second_level[j]['module']){
	                isGrey = 'isGrey';
	            }
	            var third_level = second_level[j]['module'];
	            htmlstr += '<li name="second_level" class="'+isGrey+'">'+second_level[j]['name']+'</li><ul>';
	            for(var k in third_level){
	                if(third_level[k]['visibility']=='false')
	                    continue;
	                var isGrey = "";
	                if(!third_level[k]['module']){
	                    isGrey = 'isGrey';
	                }
	                htmlstr += '<li class="'+isGrey+'">'+third_level[k]['name']+'</li><ul>';
	                var device_level = third_level[k]['module'];
	                for(var kk in device_level)
	                {
	                	//如果该设备在配置文件中定义为不可见，则跳过
	                    if(device_level[kk]['visibility']=='false')
	                        continue;
	                    var deviceId = device_level[kk]['device_id'];
	                    htmlstr += '<li class="listStyle"><span>· </span>'+device_level[kk]['name']+'</li>';
	                }
	                htmlstr += '</ul>';
	            }
	            htmlstr += "</ul>";
	        }
	        htmlstr += "</ul>";
	    }
	    $('#mynav_system').html(htmlstr);
	    $('#mynav_system>li').next('ul').toggle();
	    ////生成非主导航dom结构时
        $('#mynav_system>li').click(function (){
            $(this).next('ul').toggle(300);
            /////提示小三角可展开标志
            if(!$(this).children('span[class]')[0]){
                if($(this).next('ul').length>0 && $(this).next('ul').html() !="")
                    $(this).append('<span class="glyphicon glyphicon-triangle-bottom"></span>')
                //PlatformController.DevicesVisibility($(this),false);
            }
            else{
                $(this).children('span[class]')[0].remove();
                //PlatformController.DevicesVisibility($(this),true);
            }
        });
        var liArr = $('#mynav_system>li');
        for(var i=0;i<liArr.length;i++){
        	switch($('#mynav_system>li:eq('+i+')').text()){
        		case '水喷淋系统':
        			$('#mynav_system>li:eq('+i+')').click(function(){
        				showGreyBackground('水喷淋系统');
        			});
        			break;
        		case '消火栓系统':
        			$('#mynav_system>li:eq('+i+')').click(function(){
        				showGreyBackground('消火栓系统');
        			});
        			break;
        	}
        }
        function showGreyBackground(str){
        	var imgsrc,title;
        	if(str == '水喷淋系统') {imgsrc = '../img/喷淋CAD图.jpg'; title="水喷淋系统CAD图"}
        	if(str == '消火栓系统') {imgsrc = '../img/消防栓全楼CAD图.jpg'; title="消火栓系统CAD图"}
        	$('body').after("<div class='greyback' hidden>"+title+"<img hidden style='width:50%' src='"+imgsrc+"'/></div>");
        	$(".greyback").css({
        		"color":"white",
				"background-color":"rgba(0,0,0,0.45)",
				"font-family":"Arial",
				"font-size":"50px",
				"padding":"5px",
				"position":"absolute",
				"top":"0",
				"width":"calc(100% - 10px)",
				"height":"calc(100% - 10% - 10px)",
				"z-index":"99999",
				"text-align":"center",
				"padding-top":"5%",
				"color":"#fff",
				"font-family":"微软雅黑"
        	});
        	$(".greyback img").css({
				"display":"block",
				"padding-left":"25%",
				"padding-top":"20px"
        	});
        	$(".greyback").click(function(){
        		$(".greyback img").fadeOut(200,function(){$(this).remove();});
        		$(".greyback").fadeOut(200,function(){$(this).remove();});
        	})
        	$(".greyback img").fadeIn(200);
    		$(".greyback").fadeIn(200);
        }
	},
	DevicesVisibility:function(this_li,visibility){
		////如果是设备列表点击
	    if(this_li[0]['className']=='listStyle')
	        return;
	    var ids = this_li.data('returnIds');
	    var str;
	    ////如果是第一级五大板块点击时
	    if(ids)
	        str = ids;
	    ////如果是二三级正常点击时
	    else{
	        str = this_li.next('ul')[0]['innerText'];
	        str = str.split(/\(ID:/);
	        str.shift();
	        for(var i=0;i < str.length;i++)
	        {
	            str[i] = str[i].split(/\)/)[0];
	        }
	    }
	    ////如果是返回五大板块时
	    if(this_li.selector && visibility==false){
	        ids = [];
	        for(var i in this.devicesArr)
	            ids.push(i);
	        str = ids;
	    }
	    ////隐藏菜单的同时对标签隐藏
	    for(var key in str)
	    {
	        device = this.devicesArr[str[key]];
	        if(visibility != true)
	        {
	            device.Placemark.Hide();
	            /////对体积和线的隐藏
	            if(device.Volume)
	                device.Volume.Hide();
	            if(device.Line)
	                device.Line.Hide();
	            if(device.Model)
	                device.Model.Hide();
	        }
	        else
	        {
	            device.Placemark.Show();
	            /////对体积和线的显示
	            if(device.Volume)
	                device.Volume.Show();
	            if(device.Line)
	                device.Line.Show();
	            if(device.Model)
	                device.Model.Show();
	        }
	    }
	},
	hideAndShowLevel:function (needHideLevel)
	{
	    var land = this.newscene.GetLand();
	    for(var i = 0; i < land.GetNumberOfBuildings(); i ++)
	    {
	        var building = land.GetBuildingByIndex(i);
	        for(var j = 0; j < building.GetNumberOfBlocks(); j ++)
	        {
	            var block = building.GetBlockByIndex(j);
	            for(var k = 0; k < block.GetNumberOfLevels(); k ++)
	            {
	                var level = block.GetLevelByIndex(k);
	                var c = 0;
	                ////如果needHideLevel数组为空，则显示所有层
	                if(needHideLevel.length==0){
	                	level.SetVisibility(true,false);
	                	var levelCheckbox = $("#" + PlatformController.domIds.cbBBL + level.GetHandle());
	                    levelCheckbox.attr("checked", true);
						levelCheckbox.prop("checked", true);
	                    continue;
	                }
	                for(; c<needHideLevel.length;c++)
	                {
	                    if(level["name"]==needHideLevel[c])
	                       break;
	                }
	                var levelCheckbox = $("#" + PlatformController.domIds.cbBBL + level.GetHandle());
	                if(c==needHideLevel.length)
	                {
	                    level.SetVisibility(true,false);
	                    levelCheckbox.attr("checked", true);
	                }
	                else
	                {
	                    level.SetVisibility(false,false); 
	                    levelCheckbox.attr("checked", false);   
	                }
	            }
	        }
	    }
	},
	SetLevelOpacity:function (needOpacityLevel,alpha)
	{
	    var land = this.newscene.GetLand();
	    for(var i = 0; i < land.GetNumberOfBuildings(); i ++)
	    {
	        var building = land.GetBuildingByIndex(i);
	        for(var j = 0; j < building.GetNumberOfBlocks(); j ++)
	        {
	            var block = building.GetBlockByIndex(j);
	            for(var k = 0; k < block.GetNumberOfLevels(); k ++)
	            {
	                var level = block.GetLevelByIndex(k);
	                ////如果needOpacityLevel数组为空，则显示所有层
	                if(needOpacityLevel.length==0){
	                	level.SetOpacity(1, false);
	                    continue;
	                }else{
	                	for(var c=0; c<needOpacityLevel.length;c++)
		                {
		                    if(level["name"]==needOpacityLevel[c])
		                       level.SetOpacity(alpha, false);
		                }
	                }
	                
	            }
	        }
	    }
	},
	SmartSubtitles:function(subText,keepTime){
		$('#smartInfoDiv').fadeIn(1000);
        $('#infoText').text(subText);
        setTimeout(function(){
            $('#smartInfoDiv').fadeOut(1000)
        },keepTime);
	},
	UI_Clock:function(){
		var now = new Date();
	    var year = now.getFullYear();
	    var month = now.getMonth();
	    var date = now.getDate();
	    var day = now.getDay();
	    var hour = now.getHours();
	    var minu = now.getMinutes();
	    var sec = now.getSeconds();
	    var week;
	    month = month+1;
	    if(month<10)month="0"+month;
	    if(date<10)date="0"+date;
	    if(hour<10)hour="0"+hour;
	    if(minu<10)minu="0"+minu;
	    if(sec<10)sec="0"+sec;
	    var arr_week = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
	    week = arr_week[day];
	    var time = "";
	    time = hour+":"+minu;
	    var weekdate = "";
	    weekdate = week+"  "+year+"/"+month+"/"+date;
	    parent.$('#div_clock #timer').html(time);
	    parent.$('#div_clock #weekdate').html(weekdate);
	},
	createBBLDivs:function(){
		function createBBLElementString(id, name, type) {
		    var spanClass = "text_bbl";
		    if (type == "level") spanClass = "";
		    var str = "<div id='" + PlatformController.domIds.divBBL + id + "' class='cls_bbl'>" +
		    "<input type='checkbox' id='" + PlatformController.domIds.cbBBL + id + "' checked='checked' />" +
		    "&nbsp;<span id='" + PlatformController.domIds.spanBBL + id + "' class='" + spanClass + "'>" + name + "</span>" +
		    "</div>";
		    return str;
		};
	}
}