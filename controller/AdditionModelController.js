/*!
 * FireSafe/controller/AdditionModelController
 * Storing the global public variable.
 * AdditionModelController
 */
AdditionModelController = {
	AdditionModelNumber : 0,//当前加载的附加功能模块数目
	addModelArr:[],
	currentModel:null,
	nodes:[],
    Initialize: function(){
    	console.log('80%:......正在初始化附加功能模块')
		//$('#consoleInfo').html('加载中..80%<br>');
    	////点击四大板块的哪一块
    	this.addModelArr['nav0']=new Array();
    	this.addModelArr['nav1']=new Array();
    	this.addModelArr['nav2']=new Array();
    	this.addModelArr['nav3']=new Array();
    	this.addModelArr['nav4']=new Array();
		this.nodes.push(AdditionModelController.GetNodeByName('烟雾模拟'));
		this.nodes.push(AdditionModelController.GetNodeByName('火焰模拟'));
		//this.nodes.push(AdditionModelController.GetNodeByName('第13层模拟'));


    	////===============创建防火分区模块===============////
    	//OpacityAndPolygon, OpacityAndDae，ImgAndPlacemark, SomkeAndFire
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '14层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '14层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '14层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '13层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '13层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '13层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		/*conf = {
			//以下为公共属性
			Type: 'OpacityAndDae',
			Name: '13层防火分区-防火分区A-设施(防火墙)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));*/
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '12层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '12层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '12层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '11层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '11层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '11层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '10层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '10层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '10层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '9层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '9层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '9层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '8层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '8层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '8层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '7层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '7层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '7层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '6层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '6层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '6层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '5层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '5层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '5层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '4层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '4层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '4层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '3层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '3层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '3层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '2层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '2层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '2层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '1层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '1层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '1层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'OpacityAndPolygon',
			Name: '-1层防火分区-防火分区A',
			Model:'',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
    	this.addModelArr['nav1'].push(new AdditionModel(conf));
    	conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '-1层防火分区-防火分区A-设备',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));
		conf = {
			//以下为公共属性
			Type: 'ImgAndPlacemark',
			Name: '-1层防火分区-防火分区A-设施(标签)',
			View: {
			        pos : [58.67107516215319,77.61657936434455,59.85818003156379],
			        tar : [58.67421896856875,26.672031017347937,58.96858945890301]
			    }
		};
		this.addModelArr['nav1'].push(new AdditionModel(conf));

		////===============创建火模块===============////
		var fire = new NewScene.Grid3Animator(PlatformController.newscene, '13层火焰模拟');
		var dimensions =  [27.23, 89.23, 19.41+4, 34.09+4, 40.33, 69.33]
		var box =  [0, 248, 0, 58, 0, 116]
		var grid = "../../data/grid3/sjz3f0_02_fire.grid3";
		fire.Load(grid, box ,dimensions);
		fire.AddEventListener(NewScene.Animator.Event.ONLOADSUCCESS, function(){
			conf = {
				//以下为公共属性
				Type: 'SomkeAndFire',
				Name: '13层火焰模拟',
				View: {
				        pos : [57.565898564410716,57.94525326966037,122.94528726614563],
				        tar : [57.928834907111,22.04005432349544,67.95871192749024]
				    },
				name:"demo2",
				thickness:3,
				sootColor:[46, 45, 46],
				Fire:''
			};
			fire.SetReality(false);
			fire.SetThickness(conf.thickness);
			fire.SetOpacity(0.8)
			fire.SetColor(conf.sootColor[0], conf.sootColor[1], conf.sootColor[2]);
			conf.Fire=fire;
			AdditionModelController.addModelArr['nav1'].push(new AdditionModel(conf));
		});
		////===============创建烟模块===============////
		var smoke = new NewScene.Grid3Animator(PlatformController.newscene, '13层烟雾模拟');
		var dimensions =  [27.23, 89.23, 19.41+4, 34.09+4, 40.33, 69.33]
		var box =  [0, 248, 0, 58, 0, 116]
		var grid = "../../data/grid3/sjz3f0_02_smoke.grid3"
		smoke.Load(grid, box ,dimensions);
		smoke.AddEventListener(NewScene.Animator.Event.ONLOADING, function(res){
	          var percentage = res.percentage, message = res.message;
	          percentage *= 100;
        	  $('#consoleInfo2').html("烟火文件下载进度<br><span style='font-size:150%;'>" + percentage.toFixed(0) + "%</span>");
	          //console.log(percentage + "%: " + message);
        });
		smoke.AddEventListener(NewScene.Animator.Event.ONLOADSUCCESS, function(){
			$('#consoleInfo2 span').append(" √");
	        $('#lodingDiv').fadeOut(2000);	
	        conf = {
				//以下为公共属性
				Type: 'SomkeAndFire',
				Name: '13层烟雾模拟',
				View: {
				        pos : [57.565898564410716,57.94525326966037,122.94528726614563],
				        tar : [57.928834907111,22.04005432349544,67.95871192749024]
				    },
				name:"demo",
				thickness:3,
				sootColor:[46, 45, 46],
				Smoke:''
			};
			smoke.SetReality(false);
			smoke.SetThickness(conf.thickness);
			smoke.SetOpacity(0.7)
			smoke.SetColor(conf.sootColor[0], conf.sootColor[1], conf.sootColor[2]);
	        conf.Smoke=smoke;
			AdditionModelController.addModelArr['nav1'].push(new AdditionModel(conf));

			////13层烟雾&火焰模拟
			conf = {
				//以下为公共属性
				Type: 'SomkeAndFire',
				Name: '13层烟雾&火焰模拟',
				View: {
				        pos : [57.565898564410716,57.94525326966037,122.94528726614563],
				        tar : [57.928834907111,22.04005432349544,67.95871192749024]
				    },
				name:"demo3",
				thickness:3,
				sootColor:[46, 45, 46],
				Smoke:'',
				Fire:''
			};
			conf.Smoke=smoke;
			conf.Fire=fire;
			AdditionModelController.addModelArr['nav1'].push(new AdditionModel(conf));
			AdditionModelController.RegisterAddModel();
        });

		console.log('100%:......平台加载成功！')
		//$('#lodingDiv').fadeOut(2000);	
	},
	RegisterAddModel:function(){
		///“楼层分区”板块
		var liArr = $('#mynav_ul li[class="nav_level "]');
		var item_li ="";
		for(var i=0;i<liArr.length;i++){
			if(liArr[i].innerText) item_li = liArr[i].innerText;
			switch(item_li){
				case "负一层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '-1层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '-1层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,16) == '-1层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第一层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '1层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '1层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '1层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第二层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '2层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '2层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '2层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第三层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '3层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '3层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '3层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第四层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '4层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '4层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '4层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第五层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '5层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '5层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '5层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第六层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '6层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '6层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '6层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第七层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '7层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '7层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '7层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第八层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '8层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '8层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '8层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第九层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '9层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '9层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,15) == '9层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第十层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '10层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '10层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,16) == '10层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第十一层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '11层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '11层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,16) == '11层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第十二层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '12层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '12层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,16) == '12层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第十三层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '13层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '13层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,16) == '13层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
				case "第十四层":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '14层防火分区-防火分区A')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+0+')'));
					if(this.addModelArr['nav1'][j].Name == '14层防火分区-防火分区A-设备')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+1+')'));
					if(this.addModelArr['nav1'][j].Name.substring(0,16) == '14层防火分区-防火分区A-设施')
						this.addModelArr['nav1'][j].OnClickAddModel($('#mynav_ul li[class="nav_level "]:eq('+i+')').next("ul").find('li:eq('+2+')'));
				}
				break;
			}
		}
		///“消防系统”板块
		var liArr = $('#mynav_system li[class="nav_level "]');
		var item_li ="";
		for(var i=0;i<liArr.length;i++){
			if(liArr[i].innerText) item_li = liArr[i].innerText;
			switch(item_li){
				case "烟雾&火灾模拟":
				for(var j in this.addModelArr['nav1']){
					if(this.addModelArr['nav1'][j].Name == '13层烟雾模拟'){
						this.addModelArr['nav1'][j].OnClickAddModel(this.GetNodeByName('烟雾模拟'));
					}
					if(this.addModelArr['nav1'][j].Name == '13层火焰模拟'){
						this.addModelArr['nav1'][j].OnClickAddModel(this.GetNodeByName('火焰模拟'));
					}
					if(this.addModelArr['nav1'][j].Name == '13层烟雾&火焰模拟'){
						this.addModelArr['nav1'][j].OnClickAddModel(this.GetNodeByName('第13层模拟'));
					}
				}
				break;
			}
		}
		
	},
	AddModelProcess:function(AdditionModel){
		///如果当前系统已展示着其他model，那么清除掉其效果（polygon，placemark，callout等等）。
		if(this.currentModel) //remove previous one
			AdditionModelController.CleanLastModel(this.currentModel);
		if(AdditionModel) //active this new one
			AdditionModelController.ActivateMode(AdditionModel);
	},
	ActivateMode: function(AdditionModel){
		switch(AdditionModel.Type){
			case 'OpacityAndPolygon':
				AdditionModelController.OpacityAndPolygonProcess(AdditionModel);
				break;
			case 'OpacityAndDae':
				AdditionModelController.OpacityAndDaeProcess(AdditionModel);
				break;
			case 'ImgAndPlacemark':
				AdditionModelController.ImgAndPlacemarkProcess(AdditionModel);
				break;	
			case 'SomkeAndFire':
				AdditionModelController.SomkeAndFireProcess(AdditionModel);
				break;	
		}
	},
	CleanLastModel:function(AdditionModel){
		////透明度恢复
		var land = PlatformController.newscene.GetLand();
		for(var i = 0; i < land.GetNumberOfBuildings(); i ++)
	    {
	        var building = land.GetBuildingByIndex(i);
	        for(var j = 0; j < building.GetNumberOfBlocks(); j ++)
	        {
	            var block = building.GetBlockByIndex(j);
	            block.SetOpacity(1);
	        }
	    }
	    ////BBL恢复
	    PlatformController.hideAndShowLevel([]);
	    ////一定要放在这。
		if(!AdditionModel) return;
	    ////pm&callout隐藏
	    if(AdditionModel.Contents['Placemark']){
	    	var placemarks = AdditionModel.Contents['Placemark'];
		    for(var item in placemarks){
				if(placemarks[item].GetCallout()){
					placemarks[item].GetCallout().Hide();//直接Remove不会隐藏callout
				}
				placemarks[item].Hide();
		    }
	    }
	    ////polygon隐藏
	    if(AdditionModel.Contents['Polygon']){
	    	var polygons = AdditionModel.Contents['Polygon'];
		    for(var item in polygons)
				polygons[item].Remove();
	    }
	    ////model隐藏
	    if(AdditionModel.Contents['Models']){
	    	var models = AdditionModel.Contents['Models'];
		    for(var i in models){
				models[i].Hide();
		    }
	    }
	    ////smoke&fire remove
	    if(AdditionModel.Contents['SmokeFire']){
	    	var SmokeFire = AdditionModel.Contents['SmokeFire'];
		    for(var i in SmokeFire){
				SmokeFire[i].Stop();
				SmokeFire[i].Hide();
		    }
	    }
	    ////建筑透明度恢复
		var land = PlatformController.newscene.GetLand();
		for(var i = 0; i < land.GetNumberOfBuildings(); i ++){
	        var building = land.GetBuildingByIndex(i);
	        for(var j = 0; j < building.GetNumberOfBlocks(); j ++){
	            var block = building.GetBlockByIndex(j);
	            block.SetOpacity(1);
	        }
	    }
		AdditionModelController.currentModel=null;
	},
	OpacityAndPolygonProcess:function(AdditionModel){
		var newscene = PlatformController.newscene;
		var polygonArr=[];
		////统一行为
		this.currentModel = AdditionModel;
		///设定滑动速度
        newscene.GetEye().SetGlideSpeed(NewScene.Eye.GlideSpeed["FAST"]);
		///跳转视角
		newscene.GetEye().GlideTo(AdditionModel.View['pos'],AdditionModel.View['tar']);
		if(AdditionModel.Name == "-1层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3','2','dx','tree','1']);
			PlatformController.SmartSubtitles('-1层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = -31.478909580470095;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:-27.047433741283243,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,-27.047433741283243,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:-27.047433741283243,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,-27.047433741283243,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "1层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3','2']);
			PlatformController.SmartSubtitles('1层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = -25.840620394688955;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:-21.566916301604593,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,-21.566916301604593,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:-21.566916301604593,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,-21.566916301604593,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "2层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3']);
			PlatformController.SmartSubtitles('2层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = -21.125707269144414;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:-17.446102745401753,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,-17.446102745401753,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:-17.446102745401753,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,-17.446102745401753,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "3层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4']);
			PlatformController.SmartSubtitles('3层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = -17.043868431484206;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:-13.366552468396378,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,-13.366552468396378,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:-13.366552468396378,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,-13.366552468396378,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "4层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5']);
			PlatformController.SmartSubtitles('4层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = -12.932066608264428;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:-9.33274208220918,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,-9.33274208220918,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:-9.33274208220918,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,-9.33274208220918,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "5层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6']);
			PlatformController.SmartSubtitles('5层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = -8.786612492451951;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:-5.06153933917318,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,-5.06153933917318,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:-5.06153933917318,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,-5.06153933917318,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "6层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7']);
			PlatformController.SmartSubtitles('6层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = -4.667501257028825;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:-1.040733301222133,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,-1.040733301222133,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:-1.040733301222133,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,-1.040733301222133,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "7层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8']);
			PlatformController.SmartSubtitles('7层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = -0.548832459033008;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:3.1160197981957367,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,3.1160197981957367,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:3.1160197981957367,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,3.1160197981957367,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "8层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9']);
			PlatformController.SmartSubtitles('8层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = 3.4551481915617046;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:7.24535378895802,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,7.24535378895802,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:7.24535378895802,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,7.24535378895802,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "9层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10']);
			PlatformController.SmartSubtitles('9层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = 7.521587799414277;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:11.322631340219488,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,11.322631340219488,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:11.322631340219488,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,11.322631340219488,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "10层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12','11']);
			PlatformController.SmartSubtitles('10层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = 11.748469493695794;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:15.42433837605541,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,15.42433837605541,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:15.42433837605541,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,15.42433837605541,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "11层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13','12']);
			PlatformController.SmartSubtitles('11层防火分区-防火分区A',6000);
			////定义体积数据
			var yValue = 15.730127584226565;
			polygonArr=[
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:yValue,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:19.46549514162207,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,19.46549514162207,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:19.46549514162207,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,19.46549514162207,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "12层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14','13']);
			PlatformController.SmartSubtitles('12层防火分区-防火分区A',6000);
			////定义体积数据
			polygonArr=[
				{
					height:4,
					yValue:23.87033462524414-4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:23.87033462524414-4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:23.87033462524414-4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:23.87033462524414-4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:23.87033462524414-4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:23.87033462524414-4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:27.269805252571066-4,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,27.776827300415036-4,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:27.269805252571066-4,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,27.776827300415036-4,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "13层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15','14']);
			PlatformController.SmartSubtitles('13层防火分区-防火分区A',6000);
			////定义体积数据
			polygonArr=[
				{
					height:4,
					yValue:23.87033462524414,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',//根据type来判断这一段体积是根据端点自动生成，还是提供了完整的坐标点。
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:23.87033462524414,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:23.87033462524414,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:23.87033462524414,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:23.87033462524414,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:23.87033462524414,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:27.269805252571066,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,27.776827300415036,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:27.269805252571066,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,27.776827300415036,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}
		if(AdditionModel.Name == "14层防火分区-防火分区A"){
			PlatformController.hideAndShowLevel(['15']);
			PlatformController.SmartSubtitles('14层防火分区-防火分区A',6000);
			////定义体积数据
			polygonArr=[
				{
					height:4,
					yValue:23.87033462524414+4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,41.43570490210321],
							[80.5169769762444,41.43570490210321]
						]
				},
				{
					height:4,
					yValue:23.87033462524414+4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[80.44044062764921,42.06406589109285],
							[81.91996070269359,42.06406589109285]
						]
				},
				{
					height:4,
					yValue:23.87033462524414+4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[81.9420488606864,42.060300908066694],
							[87.41085427398426,47.43025319499018]
						]
				},
				{
					height:4,
					yValue:23.87033462524414+4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,47.74129759317448],
							[87.34646490410647,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:23.87033462524414+4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[87.34646490410647,67.3924746201051],
							[28.882132340083245,67.3924746201051]
						]
				},
				{
					height:4,
					yValue:23.87033462524414+4,
					color:[34,139,34],
					opacity:0.3,
					type:'auto',
					pos:[
							[28.882132340083245,67.3924746201051],
							[28.882132340083245,41.43570490210321]
						]
				},
				////下面两个是楼梯间
				{
					height:0.4,
					yValue:27.269805252571066+4,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[52.83352769799753,27.776827300415036+4,49.99127050263296],
						labelText:"防烟楼梯间A01"
					},
					pos:[
							[51.5264338997213,50.06009814826612],
							[54.11100949849487,50.06009814826612],
							[54.11100949849487,55.810883700132314],
							[51.5264338997213,55.810883700132314]
						]
				},
				{
					height:0.4,
					yValue:27.269805252571066+4,
					color:[130,57,53],
					opacity:0.4,
					label:{
						labelPos:[64.63061070116446,27.776827300415036+4,53.04149206140448],
						labelText:"防烟楼梯间A02"
					},
					pos:[
							[63.12319440790067,53.05843798335103],
							[65.71108159091222,53.05843798335103],
							[65.71108159091222,58.91868815911288],
							[63.12319440790067,58.91868815911288]
						]
				}
			]
		}

		var contents=[];//待清除内容数组
		contents['Polygon']=[];//待清除-体积数组
		contents['Placemark']=[];//待清除-标签数组
		////统一生成体积
		for(var i in polygonArr){
			var polygon = new NewScene.Polygon(newscene, "this polygon");
			contents['Polygon'].push(polygon);
			polygon.SetLineStyle(NewScene.Complex.LineStyle.SOLID);
			if(polygonArr[i]['opacity'])
            	polygon.SetOpacity(polygonArr[i]['opacity'],true);
			else
            	polygon.SetOpacity(0.8,true);

			var height = polygonArr[i]['height'];
			var yValue = polygonArr[i]['yValue'];
			var color  = polygonArr[i]['color'];
			polygon.SetExtrusionLength(height);
			polygon.SetExtrusionDirection([0,1,0]);//设定体积height的方向
            polygon.SetColor(color[0],color[1],color[2]);

            ////如果存在label属性，则添加placemark
            if(polygonArr[i]['label']){
            	var labelPos = polygonArr[i]['label']['labelPos'];
				var labelText = polygonArr[i]['label']['labelText'];
            	var pm = new NewScene.Placemark(newscene, "text", labelPos, NewScene.Placemark.Type.TEXT, labelText);
				//pm.SetCallout("防区A01", "some information....");
				contents['Placemark'].push(pm);
            }
            ////如果是自动创建体积，则根据坐标生成目标体积（宽度固定，为0.3）
            if(polygonArr[i]['type'] == 'auto'){
            	var item_polygonVertex = null;
            	var pre_width = 0.3;
        		///如果他们的z相等，则表示需要创建的是横向
        		if(polygonArr[i]['pos'][0][1] == polygonArr[i]['pos'][1][1]){
        			for(var j=0;j<4;j++){
	        			///第三次循环
	        			if(j==2){
	        				item_polygonVertex = [polygonArr[i]['pos'][1][0],yValue,polygonArr[i]['pos'][1][1]+pre_width];
	        			}
	        			///第四次循环
	        			else if(j==3){
	        				item_polygonVertex = [polygonArr[i]['pos'][0][0],yValue,polygonArr[i]['pos'][0][1]+pre_width];
	        			///前两次循环
	        			}else{
	        				item_polygonVertex = [polygonArr[i]['pos'][j][0],yValue,polygonArr[i]['pos'][j][1]];
	        			}
						polygon.AppendVertex(item_polygonVertex);
	        		}
        		}
        		else{
        			for(var j=0;j<4;j++){
	        			///第三次循环
	        			if(j==2){
	        				item_polygonVertex = [polygonArr[i]['pos'][1][0]+pre_width,yValue,polygonArr[i]['pos'][1][1]];
	        			}
	        			///第四次循环
	        			else if(j==3){
	        				item_polygonVertex = [polygonArr[i]['pos'][0][0]+pre_width,yValue,polygonArr[i]['pos'][0][1]];
	        			///前两次循环
	        			}else{
	        				item_polygonVertex = [polygonArr[i]['pos'][j][0],yValue,polygonArr[i]['pos'][j][1]];
	        			}
						polygon.AppendVertex(item_polygonVertex);
	        		}
        		}
            }else{
            	for(var j in polygonArr[i]['pos']){
					polygonArr[i]['pos'][j] = [polygonArr[i]['pos'][j][0],yValue,polygonArr[i]['pos'][j][1]];
					polygon.AppendVertex(polygonArr[i]['pos'][j]); 
				}
            }
		}
		PlatformController.newscene.SetPlacemarkRealistic(false);
		////添加至polygons数组，为清除做准备
		AdditionModel.AddToContents(contents);
	},
	OpacityAndDaeProcess:function(AdditionModel){
		var newscene = PlatformController['newscene'];
		////统一行为
		this.currentModel = AdditionModel;
		//设定滑动速度
        newscene.GetEye().SetGlideSpeed(NewScene.Eye.GlideSpeed["FAST"]);
        ///跳转视角
		newscene.GetEye().GlideTo(AdditionModel.View['pos'],AdditionModel.View['tar']);
		var models = AdditionModel.Models;
		var contents=[];
		contents['Placemark']=[];
		contents['Models']=[];

		if(AdditionModel.Name == "13层防火分区-防火分区A-设施(防火墙)"){
			PlatformController.hideAndShowLevel(['15','14']);
			PlatformController.SetLevelOpacity(['13'],0.9);
			////定义每一个model的配置数据
			var modelArr=[
					{
						pos:[33.001218841070184,23.870323846745478,60.42526681675163],
						rotate:[0, -1.5707963267948974, 0],
						label:{
							labelText:"消火栓A01"
						},
						calloutPos:{
							left:'531.849px',
							top:'92.9954px'
						}
					},
					{
						pos:[32.99099827636685,23.870323846745478,65.84928628150823],
						rotate:[0, -1.5707963267948974, 0],
						label:{
							labelText:"消火栓A02"
						},
						calloutPos:{
							left:'531.849px',
							top:'92.9954px'
						}
					}
				]
		}
		newscene.GetEye().GlideTo(AdditionModel.View['pos'],AdditionModel.View['tar']);
		/*for(var k in models){
			////从modelArr读取当前model对应的配置数据
			var item_modelConf = modelArr[k];
			var labelText = item_modelConf['label']['labelText'];
			var pm =null;
			
			//如果有pos
			if(item_modelConf['pos']){
				models[k][0].SetPosition(item_modelConf['pos']);
				var pos = models[k][0].GetPosition(item_modelConf['pos']);
			}
			//如果有rotate
			if(item_modelConf['rotate'])
				models[k][0].SetRotation(item_modelConf['rotate'])
			//如果有color
			if(item_modelConf['color'])
				models[k][0].BlendColor(item_modelConf['color'][0],item_modelConf['color'][1],item_modelConf['color'][2]);
			
			////对该model生成匹配的pm
			if(!item_modelConf['label']['labelPos']){
				var labelPos = item_modelConf['pos'];
				pm = new NewScene.Placemark(newscene, labelText, [labelPos[0],labelPos[1]+1,labelPos[2]], NewScene.Placemark.Type.TEXT, labelText);
			}
			else{
				var labelPos = item_modelConf['label']['labelPos'];
				pm = new NewScene.Placemark(newscene, labelText, labelPos, NewScene.Placemark.Type.TEXT, labelText);
			}
			

			contents['Placemark'].push(pm);
			models[k][0].Show();
		}
		contents['Models']=models;*/

		////添加至contents数组，为清除做准备
		AdditionModel.AddToContents(contents);
		PlatformController.newscene.SetPlacemarkRealistic(false);
	},
	ImgAndPlacemarkProcess:function(AdditionModel){
		var newscene = PlatformController['newscene'];
		////统一行为
		this.currentModel = AdditionModel;
		//设定滑动速度
        newscene.GetEye().SetGlideSpeed(NewScene.Eye.GlideSpeed["NORMAL"]);
		newscene.GetEye().GlideTo(AdditionModel.View['pos'],AdditionModel.View['tar']);

		var contents=[];
		contents['Placemark']=[];
		if(AdditionModel.Name == "-1层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3','2','dx','tree','1']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-30.2364893939761,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "-1层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3','2','dx','tree','1']);
			PlatformController.SetLevelOpacity(['-1'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-30.2364893939761,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "1层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3','2']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-24.78370062800063,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "1层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3','2']);
			PlatformController.SetLevelOpacity(['1'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-24.78370062800063,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "2层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-20.138975732142356,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "2层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4','3']);
			PlatformController.SetLevelOpacity(['2'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-20.138975732142356,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "3层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-16.065814648953122,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "3层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5','4']);
			PlatformController.SetLevelOpacity(['3'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-16.065814648953122,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "4层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-12.015062885017066,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "4层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6','5']);
			PlatformController.SetLevelOpacity(['4'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-12.015062885017066,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "5层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-7.79869313268744,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "5层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7','6']);
			PlatformController.SetLevelOpacity(['5'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-7.79869313268744,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "6层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-3.683871270141651,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "6层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8','7']);
			PlatformController.SetLevelOpacity(['6'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],-3.683871270141651,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "7层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],0.3784494387798034,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "7层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9','8']);
			PlatformController.SetLevelOpacity(['7'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],0.3784494387798034,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "8层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],4.394824504832684,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "8层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10','9']);
			PlatformController.SetLevelOpacity(['8'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],4.394824504832684,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "9层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],8.642130858823379,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "9层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11','10']);
			PlatformController.SetLevelOpacity(['9'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],8.642130858823379,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "10层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],12.78028857660614,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "10层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12','11']);
			PlatformController.SetLevelOpacity(['10'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],12.78028857660614,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "11层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],16.832212899833223,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "11层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13','12']);
			PlatformController.SetLevelOpacity(['11'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],16.832212899833223,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "12层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],20.772527219710227,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "12层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14','13']);
			PlatformController.SetLevelOpacity(['12'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],20.772527219710227,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "13层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15','14']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "13层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15','14']);
			PlatformController.SetLevelOpacity(['13'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "14层防火分区-防火分区A-设备"){
			////定义
			PlatformController.hideAndShowLevel(['15']);
			for(var i in PlatformController.devicesArr['13层设备']){
				var item_device = PlatformController.devicesArr['13层设备'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],29.179464352702595,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		if(AdditionModel.Name == "14层防火分区-防火分区A-设施(标签)"){
			////定义
			PlatformController.hideAndShowLevel(['15']);
			PlatformController.SetLevelOpacity(['14'],0.8);
			for(var i in PlatformController.devicesArr['13层设施']){
				var item_device = PlatformController.devicesArr['13层设施'][i];
				var labelPos = item_device.GetPosition();
                item_device.SetPosition([labelPos[0],29.179464352702595,labelPos[2]])
				item_device.Show();
				contents['Placemark'].push(item_device);
			}
		}
		////添加至contents数组，为清除做准备
		AdditionModel.AddToContents(contents);
		PlatformController.newscene.SetPlacemarkRealistic(false);
	},
	SomkeAndFireProcess:function(AdditionModel){
		var newscene = PlatformController['newscene'];
		////统一行为
		this.currentModel = AdditionModel;
		var contents=[];//待清除内容数组
		contents['SmokeFire']=[];//待清除-体积数组
		newscene.GetEye().GlideTo(AdditionModel.View['pos'],AdditionModel.View['tar']);
		//设定滑动速度
        newscene.GetEye().SetGlideSpeed(NewScene.Eye.GlideSpeed["NORMAL"]);
		if(AdditionModel.Name == "13层烟雾模拟"){
			var smoke = AdditionModel.Smoke;
			//newscene.GetLand().SetOpacity(0.1, true); //所有建筑整体透明度调整
			smoke.Show();
			smoke.Run();
			PlatformController.SmartSubtitles('13层烟雾模拟',20000);
			PlatformController.SetLevelOpacity(['15','14'],0.1);
			contents['SmokeFire'].push(smoke);
			var node = AdditionModelController.nodes[0];
			var handle = setInterval(function(){
				var time=+contents['SmokeFire'][0].GetTime();
				var percentage = (time / 204.02 * 100).toFixed(0);
				node.html("烟雾模拟<b>"+ percentage +"%</b>");
				if(time>204)
					clearInterval(handle);
			},500);
		}
		if(AdditionModel.Name == "13层火焰模拟"){
			var fire = AdditionModel.Fire;
			fire.Show();
			fire.Run();
			PlatformController.SmartSubtitles('13层火焰模拟',20000);
			PlatformController.SetLevelOpacity(['15','14'],0.1);
			contents['SmokeFire'].push(fire);
			var node = AdditionModelController.nodes[1];
			var handle = setInterval(function(){
				var time=+contents['SmokeFire'][0].GetTime();
				var percentage = (time / 204.02 * 100).toFixed(0);
				node.html("火焰模拟<b>"+ percentage +"%</b>");
				if(time>204)
					clearInterval(handle);
			},500);
		}
		if(AdditionModel.Name == "13层烟雾&火焰模拟"){
			var fire = AdditionModel.Fire;
			var smoke = AdditionModel.Smoke;
			fire.Show();
			fire.Run();
			smoke.Show();
			smoke.Run();
			PlatformController.SmartSubtitles('13层烟雾&火焰模拟',20000);
			PlatformController.SetLevelOpacity(['15','14'],0.1);
			contents['SmokeFire'].push(smoke);
			contents['SmokeFire'].push(fire);
			/*var node = AdditionModelController.nodes[2];
			var handle = setInterval(function(){
				var time=+contents['SmokeFire'][0].GetTime();
				var percentage = (time / 204.02 * 100).toFixed(0);
				node.html("第13层模拟<b>"+ percentage +"%</b>");
				if(time>204)
					clearInterval(handle);
			},500);*/
		}
		
		////添加至contents数组，为清除做准备
		AdditionModel.AddToContents(contents);
	},
	CalloutTemplate:function(type,params){
		var htmlForCallout="";
		if(type == '室内消火栓'){
			htmlForCallout +='<div id="Callout_Div"><div id="tab_nav" ><span id="tab1" >室内消防栓详细信息</span></div><div id="tab_1"><table cellspacing="0" border="1">'+
			'<tbody><tr><td width="50%">设备编号:</td>'+
				'<td>'+ params['deviceId'] +'</td>'+
			'</tr><tr><td>水压值:</td>'+
                '<td style="background-color:#3da859;color:#fff;font-weight:bold;">23%(正常)</td></tr><tr>'+
                '<td>设备位置:</td>'+
                '<td>'+ params['position'] +'</td></tr><tr>'+
                '<td>其他参数:</td>'+
                '<td>待添加</td></tr>'+
			'</tbody></table></div></div>';
		}
		return htmlForCallout;
	},
	GetNodeByName:function(innerText){
		var liArr = $('li');
		var item_li ="";
		for(var i=0;i<liArr.length;i++){
			if(liArr[i].innerText) item_li = liArr[i].innerText;
			if(item_li == innerText)
				return $('li:eq('+i+')');
		}
	}
}