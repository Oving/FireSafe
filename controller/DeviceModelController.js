/*!
 * FireSafe/controller/DeviceModelController
 * Storing the global public variable.
 * DeviceModelController
 */

/*********************************************************************** 
* Title       : 创建标签
* Description : 为设备创建标签/为标签绑定callout
************************************************************************/ 
DeviceModelController = {
    device_type_config: [],
    Initialize: function(){
    	console.log('70%:......正在初始化设备')
		//$('#consoleInfo').html('加载中..70%<br>');
		///开始创建虚拟设备
		var device_confings=[
    		{
				ImgSrc:'../img/cctv 24x24.png',
                type:'视频显示设备',
                deviceArr:[
                    {
                        htmlForCallout:"<div id='Callout_Div'> <img class='cctv_iframe' src='../img/lobby_cctv.gif'/><br/></div>",
                        label:{
                            labelPos:[56.781109673952216,26.67202938286965,59.05452354464588],
                            labelText:"监控A01"
                        }
                    },
                    {
                        htmlForCallout:"<div id='Callout_Div'> <img class='cctv_iframe' src='../img/lobby_cctv.gif'/><br/></div>",
                        label:{
                            labelPos:[60.30974262403881,26.67203158529736,49.85542693660036],
                            labelText:"监控A02"
                        }
                    }
                ]
				
			},
			{
				ImgSrc:'../img/烟感24x24.png',
                type:'感烟探测器',
                deviceArr:[
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[30.601749802359997,23.870323846745464,44.62971098229618],
                            labelText:"烟感B01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[30.521691934037705,23.870323846745478,48.841291355480965],
                            labelText:"烟感B01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[35.36253624633775,23.870323846745478,43.44848060386066],
                            labelText:"烟感B01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[36.12122100103983,24.634255833276537,48.522752788818966],
                            labelText:"烟感B01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[39.10162623188131,23.870323846745478,46.32506671738173],
                            labelText:"烟感B01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[44.07518735785981,23.870323846745464,48.900723105692215],
                            labelText:"烟感A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[47.69014672541284,24.59281271451682,46.766938839403906],
                            labelText:"烟感A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[48.201104123778286,24.59281271451682,43.48221549066594],
                            labelText:"烟感A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[52.033263391985955,24.597487360783806,45.449343181270365],
                            labelText:"烟感A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[55.83063664100037,23.870323846745478,43.533440225868716],
                            labelText:"烟感A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[60.67436941010331,24.59281271451682,43.680512064674275],
                            labelText:"烟感A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[52.78059291294215,23.870323846745478,49.695240906442194],
                            labelText:"烟感A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[58.6700066957203,24.616041183471683,47.393199636919775],
                            labelText:"烟感A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[62.01991740326168,23.870323846745464,48.7426993974066],
                            labelText:"烟感C01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[65.2565123396952,24.597487360783806,45.8815455421676],
                            labelText:"烟感C01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[69.49467550803287,24.597487360783806,45.89652317647461],
                            labelText:"烟感C01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[73.73672296426754,23.870323846745478,45.19947917253603],
                            labelText:"烟感C01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[80.19722717033306,23.870323846745478,46.26218890594129],
                            labelText:"烟感C01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[73.84653848857486,23.870323846745492,56.703450086869765],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[84.0075364227215,23.870323846745492,61.12125979019699],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[84.1909319775615,23.870323846745478,54.31171067460706],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[84.05897165480094,23.870323846745478,65.49089639820309],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[70.4608839968256,23.870323846745464,61.17633949348209],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[69.46307297516894,24.29809615895368,66.15885849350462],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[65.10219535551188,23.870323846745478,61.569146924346306],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[58.71632024033367,24.634255883276367,61.42112021498579],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[51.68301364743201,24.808836011401368,61.28997970120647],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[47.28504923153151,23.870323846745478,65.77154152738827],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[41.10585947053119,23.870323846745478,61.9988703449391],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[32.6351261300293,23.923557712394903,61.76116701157559],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[39.74806017575517,23.870323846745464,54.67162920984661],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[32.521288907316546,23.870323846745464,54.38762186825343],
                            labelText:"烟感C02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[47.23226825806558,23.870323846745464,57.79632043827412],
                            labelText:"烟感A02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[51.82142889285642,23.870323846745478,57.554593087065584],
                            labelText:"烟感A02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[58.430235968769686,23.870323846745478,55.047762526040636],
                            labelText:"烟感A02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[64.41984734722699,27.133029638861366,53.02902189716035],
                            labelText:"烟感A02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[69.5619554572569,27.776827300415036,53.80638286321318],
                            labelText:"烟感A02"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​烟雾探测器：正常</font></div>',
                        label:{
                            labelPos:[70.27988973049926,23.870323846745478,57.774599577720174],
                            labelText:"烟感A02"
                        }
                    }
                ]
			},
            {
                ImgSrc:'../img/手动报警设备24x24.png',
                type:'手动报警设备',
                deviceArr:[
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​手动报警设备：正常</font></div>',
                        label:{
                            labelPos:[46.79582065781597,23.870323846745478,58.873221453164824],
                            labelText:"手报A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​手动报警设备：正常</font></div>',
                        label:{
                            labelPos:[56.760236118160876,23.870323846745478,52.66010017445445],
                            labelText:"手报A01"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​手动报警设备：正常</font></div>',
                        label:{
                            labelPos:[65.34280822947565,27.769095691300777,49.929016473876956],
                            labelText:"手报A01"
                        }
                    }
                ]
            },
            {
                ImgSrc:'../img/消火栓24x24.png',
                type:'消火栓',
                deviceArr:[
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​手动报警设备：正常</font></div>',
                        label:{
                            labelPos:[46.79582065781597,23.870323846745478,58.873221453164824],
                            labelText:"消火栓"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​消火栓设备：正常</font></div>',
                        label:{
                            labelPos:[50.98229811631523,23.870323846745492,58.50574518258243],
                            labelText:"消火栓"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​消火栓设备：正常</font></div>',
                        label:{
                            labelPos:[45.790834879430705,23.870323846745492,50.89484787364452],
                            labelText:"消火栓"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​消火栓设备：正常</font></div>',
                        label:{
                            labelPos:[66.1991652217123,23.870323846745478,58.81653884314972],
                            labelText:"消火栓"
                        }
                    },
                    {
                        htmlForCallout:'<div id="Callout_Div"><font color="#ffffff">​消火栓设备：正常</font></div>',
                        label:{
                            labelPos:[67.87105401269972,23.870323846745464,50.2504197145856],
                            labelText:"消火栓"
                        }
                    }
                ]
            }
    	]

        PlatformController.devicesArr['13层设施']=[];
        PlatformController.devicesArr['13层设备']=[];
        PlatformController.devicesArr['14层设施']=[];
        PlatformController.devicesArr['14层设备']=[];
        PlatformController.devicesArr['12层设施']=[];
        PlatformController.devicesArr['12层设备']=[];
    	for(var i=0;i<device_confings.length;i++)
	    {
            var ImgSrc = device_confings[i]['ImgSrc'];//图标路径
            var DeviceType = device_confings[i]['type'];//设备类型
            for(var j in device_confings[i]['deviceArr']){
                var item_device = device_confings[i]['deviceArr'][j];
                var htmlForCallout = item_device['htmlForCallout'];//默认callout
                var labelPos = item_device['label']['labelPos'];//position
                var labelText = item_device['label']['labelText'];//label

                var Placemark_label = "<div><img class='placemark_img' style='vertical-align:middle; padding-right:5px' onload='DeviceModelController.updateImg(this)' src='"+ ImgSrc +"'/><span class='placemark_text'>"+ labelText +"</span></div>";
                if(DeviceType == '视频显示设备')
                    var pm = new NewScene.Placemark(PlatformController.newscene, labelText, labelPos, NewScene.Placemark.Type.HTML, Placemark_label);
                else
                    var pm = new NewScene.Placemark(PlatformController.newscene, 'img', labelPos, NewScene.Placemark.Type.IMAGE, ImgSrc);
                pm.SetCallout(labelText,'<div class="CalloutStyle">'+htmlForCallout+'</div>');

                pm.GetCallout().SetTheme(NewScene.Callout.Theme.MODERN);
                pm.GetCallout().SetBackgroundColor(0,0,0);
                pm.GetCallout().SetFontColor(255,255,255);    

                pm.Hide();
                if(DeviceType == '消火栓'){
                    PlatformController.devicesArr['13层设施'].push(pm);
                }
                else{
                    PlatformController.devicesArr['13层设备'].push(pm);
                }
            }
	    }
        ///开始初始化模型
        /*PlatformController.newscene.AddModel('../../data/DAE/单层防火墙/单层防火墙.dae', function (newscene, elements) {
            elements[0].Hide();
            PlatformController.modelsArr.push(elements[0]);
        });*/
         /*PlatformController.newscene.AddModel('../../data/DAE/单层防火门/单层防火门.dae', function (newscene, elements) {
            elements[0].Hide();
            PlatformController.modelsArr.push(elements[0]);
        });*/
       
	},
	setHtmlForCallout:function(item_device)
	{
	    ////默认初始化面板
        var DeviceType = item_device['device_type'];
        var htmlForCallout = "";
        switch(DeviceType)
        {
            case "PointLocationType"://该设备类型无法通过Nu4获取到数据（在NUCLEUS“设备类型”页面也无法找到）
                htmlForCallout += "this is PointLocationType<br/>";
                break;
            case "LiveVideoType"://该设备类型无法通过Nu4获取到数据（在NUCLEUS“设备类型”页面也无法找到）
                var cctvUrl = $.parseJSON(item_device['device_data'])['Stream URL'];
                htmlForCallout += "<img class='cctv_iframe' src='/"+cctvUrl+"'/><br/>";
                break;
            case "AccessControlType"://该设备类型无法通过Nu4获取到数据（在NUCLEUS“设备类型”页面也无法找到）
                htmlForCallout += "this is AccessControlType<br/>";
                break;
            default://其他设备类型均可以直接获得callout的默认html
                var device_type_config = this.device_type_config[DeviceType];
                for(var i in device_type_config)//遍历该设备类型所有的属性
                {
                    var attribute_config = $.parseJSON(device_type_config[i]['attribute_config']);
                    attrCalloutHtml = unescape(attribute_config['attrDefaultCalloutHtml']);

                    if(attrCalloutHtml && attrCalloutHtml!='%not_set%<br/>' && attrCalloutHtml!='%not_set%')
                        htmlForCallout += attrCalloutHtml;
                    //遗留逻辑问题
                    /*if(attrCalloutHtml && (attrCalloutHtml!='%not_set%<br/>' || attrCalloutHtml!='%not_set%'))
                        htmlForCallout += attrCalloutHtml;
                    if((attrCalloutHtml=='%not_set%<br/>' || attrCalloutHtml=='%not_set%') && device_type_config.length==1)
                        htmlForCallout += attrCalloutHtml;*/
                }
        }
        item_device.Placemark.SetCallout(item_device.Placemark.GetName(),'<div class="CalloutStyle">'+htmlForCallout+'</div>');
	    
	},
	updateImg: function(img){
	    img.style.paddingLeft = (img.parentElement.clientWidth - img.clientWidth)/2 +"px";
	    //img.style.opacity = 0.5;
	},
	viewToDevices:function(deviceId)
	{
	    var target = PlatformController.devicesArr[deviceId]['device_position'];
	    var position = [PlatformController.devicesArr[deviceId]['device_position'][0]+35,PlatformController.devicesArr[deviceId]['device_position'][1]+35,PlatformController.devicesArr[deviceId]['device_position'][2]];
	    PlatformController.newscene.GetEye().GlideTo(position,target);

	    if(PlatformController.devicesArr[deviceId]['mark_globalview'])//如果已存在view
        {
            var globalviewArray = $.parseJSON(PlatformController.devicesArr[deviceId]['mark_globalview']);
            var needHideLevel = [];
            if(globalviewArray['levels'])
            {
                for(var i in globalviewArray['levels'])
                {
                    if(globalviewArray['levels'][i].search("::G")!=-1){//如果在NU中Level是地面
                        needHideLevel.push('dx');needHideLevel.push('tree');
                    }
                    else
                        needHideLevel.push(globalviewArray['levels'][i].split('::L')[1].substring(0,2).trim());
                } 
                PlatformController.hideAndShowLevel(needHideLevel);
            }
        }

        //callout自动弹出
        //先隐藏其他的
        for(var i in PlatformController.devicesArr){
        	var pm =  PlatformController.devicesArr[i].Placemark;
        	pm.GetCallout().Hide();
        }
        PlatformController.devicesArr[deviceId].Placemark.GetCallout().Show();
	}

}