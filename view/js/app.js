/*!
 * FireSafe v3.0.0
 * Copyright 2016-2029 ZhiYuanSu.
 * Licensed under the NewScene license.
 * app.js主要作用是动态引用其他js文件、执行一些UI相关的工作，其他的平台主流程都交给PlatformController.js去执行。
 */

//Lib
include_js('../js/jquery-1.11.2.min.js');
include_js('../js/jquery.mCustomScrollbar.concat.min.js');//滚动条js
//include_js('../../lib/nu4.ds.js');//Nucleus4.2数据库
include_js('../../lib/RENClient.js');//renbase

//Model
include_js('../../model/DeviceModel.js');//虚拟设备模块
include_js('../../model/EventModel.js');//设备事件模块
include_js('../../model/AdditionModel.js');//消防功能模块
//Controller
include_js('../../controller/DataSourceController.js');//连接数据库，暂时没有
include_js('../../controller/DeviceModelController.js');//虚拟设备创建
include_js('../../controller/EventModelController.js');//设备事件控制
include_js('../../controller/PlatformController.js');//平台主流程控制
include_js('../../controller/AdditionModelController.js');//消防功能内容

/*********************************************************************** 
* Title       : Main函数
* Description : 程序入口
************************************************************************/  
function Main()
{
    PlatformController.Initialize();
    ////滚动条样式
    $(".tab_main").mCustomScrollbar({
         theme:"minimal-dark"
    });
    $('#sidebar').hover(function() {
            $('#sidebar').animate({left:'0px'},'slow',function(){});    
        }, 
    function(){
        setTimeout(function(){
            $('#sidebar').animate({left:'-240px'},'slow',function(){
                });
        },100);
    });
};
/*********************************************************************** 
* Title       : 包含其它 js 文件。 
* Description : 将其它 Js 文件引入本文件中，方便管理、维护。 
************************************************************************/  
function include_js(path, callback)   
{       
      var sobj = document.createElement('script'); 
      sobj.async = false;   
      sobj.src = path;  
      sobj.setAttribute("lib","newscene");
	  if(callback){	  
		  sobj.addEventListener('load', function(){
			 callback();
		  });
	  }
      var headobj = document.getElementsByTagName('head')[0];   
      headobj.appendChild(sobj);   
}  
/*********************************************************************** 
* Title       : 包含其它 css 文件。 
* Description : 将其它 css 文件引入本文件中，方便管理、维护。 
************************************************************************/  
function include_css(path)   
{       
    var fileref=document.createElement("link")   
    fileref.rel = "stylesheet";  
    fileref.type = "text/css";  
    fileref.href = path;   
}

