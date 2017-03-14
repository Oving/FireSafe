/** RENClient is a javascript client tool set for connecting RENBase and other related operations
* @param {?string} [host] RENBase host url. If not set, use the url of current page
* @param {?string} user user for Login. If not set, RENClient will not login and some of its functions may not work,
* @param {?string} password password for Login. If not set, RENClient will not login and some of its functions may not work,
* @example var ren = new RENClient('http://176.123.5.125:1802', 'admin', 'password');
* @class
* @export
*/
var RENClient = function(url, user, password){
  /** url of RENBase
  * @type {string}
  * @ignore
  */
  this.url = url || window.location.host;
  this.url = this.url.replace('https://', 'http://');
  if(this.url.indexOf('http://')!=0) this.url = 'http://' + this.url;
  /** ws of RENBase
  * @type {string}
  * @ignore
  */
  this.ws = this.url.replace('http://','ws://');
  /** user for login
  * @type {string}
  * @private
  * @ignore
  */
  this.user = user;
  /** password for login
  * @type {string}
  * @ignore
  */
  this.password = password;
  /** globe size (length of equator)
  * @type {number}
  * @ignore
  */
  this.globeSize = 40075016.6856;
  //login if user and password
  if(this.user != undefined && this.password != undefined){
    this.Login(this.user, this.password);
    setInterval(function(){
      this.Login(this.user, this.password);
    }.bind(this), 60*60*1000);
  }
}
RENClient.Version = '1.0.0';
RENClient.prototype = {
  /** Encode a string to a valid url
  * @param {string} str string of a url
  * @example ren.EncodeURL('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t');
  */
  EncodeURL: function (str) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: AJ
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // %          note: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
    // *     example 1: urlencode('Kevin van Zonneveld!');
    // *     returns 1: 'Kevin+van+Zonneveld%21'
    // *     example 2: urlencode('http://kevin.vanzonneveld.net/');
    // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
    // *     example 3: urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
    // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'

    if (!str) return '';

    var histogram = {}, histogram_r = {}, code = 0, tmp_arr = [];
    var ret = str.toString();

    // The histogram is identical to the one in urldecode.
    histogram['!'] = '%21';
    histogram['%20'] = '+';

    // Begin with encodeURIComponent, which most resembles PHP's encoding functions
    ret = encodeURIComponent(ret);

    for (search in histogram) {
      replace = histogram[search];
      tmp_arr = ret.split(search); // Custom replace
      ret = tmp_arr.join(replace);
    }

    // Uppercase for full PHP compatibility
    return ret.replace(/(\%([a-z0-9]{2}))/g, function (full, m1, m2) {
      return '%' + m2.toUpperCase();
    });

    return ret;
  },
  /** Get parameter by name from url
  * @param {string} name
  * @param {?string} [url] if not set, use the url of current page
  * @example ren.GetParameterByName('a', 'http://www.zhiyuansu.com?a=renbase'); //return 'renbase'
  */
  GetParameterByName: function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  /** Get file extension
  * @param {string} name file name or path
  * @return {string}
  * @example ren.GetExtension('renbase.test.js'); //return 'js'
  */
  GetExtension: function(name){
    if(!name) return null;
    var arr =  name.split('.');
    return arr[arr.length - 1].toLowerCase();
  },
  /** A shortcut of ajax post
  * @param {string} url
  * @param {?object} data data form
  * @param {function} onsuccess callback when success
  * @param {?function} onfail callback when fail
  * @example ren.Post('http://localhost:1802/login', {user:'admin',password:'abc'}, function(){});
  */
  Post: function (url, data, onSuccess, onFail) {
    //check if optional parameters are skipped
    if(typeof data == 'function') {
      onFail = onSuccess;
      onSuccess = data;
      data = null;
    }

    //prepare data string
    var dataStr = '';
    for(var key in data){
      dataStr += key+ '=' + this.EncodeURL(data[key]) + '&';
    }
    if(dataStr.length > 0) dataStr = dataStr.substr(0, dataStr.length-1); //remove & at the end

    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('accept', 'application/json, text/plain, */*');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE ) {
       if(request.status == 200){
         if(onSuccess) onSuccess(JSON.parse(request.responseText));
       }
       else {
         if(onFail) onFail(JSON.parse(request.responseText));
       }
      }
    }
    if(data) data = JSON.stringify(data);
    request.send(data);
  },
  /** Post to RENBase whose url is set by constructor
  * @param{string} relativeUrl
  * @param {?object} data data form
  * @param {function} onsuccess callback when success
  * @param {?function} onfail callback when fail
  * @example ren.PostREN('/login', {user:'admin',password:'abc'}, function(){});
  */
  PostREN: function (relativeUrl, data, onSuccess, onFail) {
    this.Post(this.url + relativeUrl, data, onSuccess, onFail);
  },
  /** Login
  * @param{string} user user name
  * @param {string} password
  * @param {function} onsuccess callback when success
  * @param {function} onfail callback when fail
  * @example ren.Login('admin','abc', function(){});
  */
  Login: function (user, password, onSuccess, onFail){
    this.PostREN('/login', {user: user, password: password}, function(res){ //onSuccess
      if(res.success){
        if(onSuccess) onSuccess(res);
      }
      else {
        if(onFail) onFail(res);
      }
    }, function(res){ //onFail
      if(onFail) onFail(res);
    });
  },
  /** Logout
  * @param {function} callback when success
  * @param {function} callback when fail
  */
  Logout: function (onSuccess, onFail){
    this.PostREN('/logout', onSuccess, onFail);
  },
  /** Get current user
  * @param {function} callback when success
  * @param {function} callback when fail
  * @example ren.GetCurrentUser(function(user){console.log(user);});
  */
  GetCurrentUser: function (onSuccess, onFail){
    this.PostREN('/me', onSuccess, onFail);
  },
  /** Convert geo location (longtitude, latitude, altitude) to local coordinates in a region
  * @param {number[]} geo an array of [longtitude, latitude] or [longtitude, latitude, altitude]
  * @param {Region} region The region object for local coordinate system
  * @return {number[]} an array of [x,y,z] (y is up)
  */
  ConvertGeoToLocal: function(geo, region){
    var pos = null;
    if(!region || !region.location || region.location.length <2 || geo.length < 2) return pos;

    var longitude = geo[0];
    var latitude = geo[1];
    if(latitude < -85 || latitude > 85){
      console.log('latitude is out of range');
      return pos;
    }
    while(longitude <= -180) longitude += 360;

    var originX =  (region.location[0] + 180) / 360;
    var n = region.location[1] * Math.PI / 180;
    var m = Math.log(Math.tan(n) + 1 / Math.cos(n));
    var originY = (1 - m / Math.PI)/2;

    var x =  (longitude + 180) / 360;
    n = latitude * Math.PI / 180;
    m = Math.log(Math.tan(n) + 1 / Math.cos(n));
    var y = (1 - m / Math.PI)/2;
    if(x < 0 || x > 1 || y < 0 || y > 1) return pos;

    x = (x - originX) * this.globeSize;
    y = (y - originY) * this.globeSize;
    return [x, geo[2] || 0, y];
  },
  /** Convert local coordinate in a region to geo location (longtitude, latitude)
  * @param {number[]} pos an array of [x,y,z] (y is up)
  * @param {region} region The region object for local coordinate system
  * @return {number[]} an array of [longtitude, latitude, altitude]
  */
  ConvertLocalToGeo: function(pos, region){
    var geo = null;
    if(!region || !region.location || region.location.length <2 || pos.length < 3) return geo;

    var originX =  (region.location[0] + 180) / 360;
    var n = region.location[1] * Math.PI / 180;
    var m = Math.log(Math.tan(n) + 1 / Math.cos(n));
    var originY = (1 - m / Math.PI)/2;

    var x = originX + pos[0] / this.globeSize % 1;
    var y = originY + pos[2] / this.globeSize % 1;
    if(x < 0 || x > 1 || y < 0 || y > 1) return geo;

    var longitude = x * 360 - 180;
    n = Math.PI - 2 * Math.PI * y;
    var latitude = 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
    var altitude = pos[1] || 0;
    return [longitude, latitude, altitude];
  },
  /** Test if the string is a valid ID of RENBase object
  * @param {string} str
  * @return {boolean}
  * @example ren.IsValidId('5736920bf07e11102003522d'); // return true;
  */
  IsValidId: function(str){
    var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
    return checkForHexRegExp.test(str);
  },
  /** Get url of region model
  * @param {region | string} region Region object or url of the model
  * @return {string}
  */
  GetRegionModelURL: function(region){
    var partialStr = region.url || region;
    return this.url + '/warehouse/region/'+ partialStr;
  },
  /** Get url of gallery model
  * @param {gallery | string} gallery Gallery object or url of the model
  * @return {string}
  */
  GetGalleryModelURL: function(gallery){
    var partialStr = gallery.url || gallery;
    return this.url + '/warehouse/gallery/'+ partialStr;
  },
  /** Get url of entity appearance. Note that this function is asynchronized,
  * and needs call PostREN. Thus url of RENClient must be set correctly in construction function.
  * @param {entity | string} entity Entity object or appearance url of the model
  * @param {function} callback function(url)
  */
  GetEntityApprURL: function(entity, callback){
    var str = entity.appearance? entity.appearance.source: entity;
    if(!str) {
      callback(null);
      return;
    }
    else{
      if(this.IsValidId(str)){
        this.PostREN('/gallery/getGallery', {_id: str}, function(res){//onSuccess
          if(res.success){
            var gallery = res.data;
            callback(this.GetGalleryModelURL(gallery));
          }
          else callback(null);
        }.bind(this), function(){//onFail
          callback(null);
        });
      }
      else{
        callback(str);
      }
    }
  },
  /** Check the permission of user regarding to region: null, 'view, 'edit'.
  * Note that if full is set to be true, the function can also return 'view-full' and 'edit-full'
  * @param {UserModel} user
  * @param {RegionModel} region
  * @param {?bool} [full=false] if to check view-full and edit-full intentionally
  * @return {?string}
  */
  GetRegionPermission: function (user, region, full){
    if(!user) return null;
    var permission = null;
    //round 1: check global edit and edit-full
    if(user.name == 'admin') permission = 'edit-full';
    else if(user.allRegions=='edit') {
      if(user.allEntities=='edit') permission = 'edit-full';
      else permission = 'edit';
    }
    if(permission && !full) return 'edit'; //if not full, 'edit' is enough
    if(permission == 'edit-full' && full) return 'edit-full'; //if full, 'edit-full' is the highest
    //round 2: check global view and view-full
    if(user.allRegions=='view') {
      if(user.allEntities=='view') permission = 'view-full';
      else permission = 'view';
    }
    //round : check every regions
    if(region){
      var id = region._id;
      var iPermission = null;
      var regions = user.regions;
      for(var i = 0; i < regions.length; i ++){
        if(regions[i].id == id){
          iPermission = regions[i].action.toLowerCase();
          break;
        }
      }
      //merge iPermission and permission
      if(iPermission == 'edit' || iPermission == 'edit-full') permission = iPermission;
      else if(permission == 'view-full' || permission == 'edit') permission = permission;
      else if(iPermission == 'view' || iPermission == 'view-full') permission = iPermission;
    }
    if(!full){
      if(permission == 'edit-full') permission = 'edit';
      else if(permission == 'view-full') permission = 'view';
    }
    return permission;
  },
  /** Check the permission of user regarding to entity: 'edit', 'view' or false
  * @param {UserModel} user
  * @param {EntityModel} entity
  * @return {?string}
  */
  GetEntityPermission: function (user, entity){
    if(!user) return null;
    var permission = null;
    //round 1: get globally edit
    if(user.name == 'admin' || user.allEntities =='edit') permission = 'edit';
    if(permission) return permission;
    //round 2: get globally view
    if(user.allEntities =='view') permission = 'view';
    //round 3: check region edit-full/view-full
    if(entity.region){
      var iPermission = this.GetRegionPermission(user, {'_id': entity.region}, true);
      if(iPermission == 'edit-full') permission = 'edit';
      else if(iPermission == 'view-full') permission = 'view';
    }
    if(permission == 'edit') return permission;
    //round 4: check the entity directly
    if(entity){
      var id = entity._id;
      var entities = user.entities;
      for(var i = 0; i < entities.length; i ++){
        if(entities[i].id == id){
          permission = entities[i].action.toLowerCase();
          break;
        }
      }
    }
    return permission;
  },
  /** Listen to entities, i.e. build a websocket to get notices when a listened entity has new notice.
  * Note that one client can maintain one communication using this function. A new call will replace the old one.
  * @param {string[] |object[] | object} ids an array of entities ids, or an array of entity, or an object of {id->updatetime}. The later method allows users to specify period of update.
  * @param {function} onMessage callback when there is new message; callback(array[notices])
  * @param {function} onFail callback when fail
  * @return {object} websocket
  */
  ListenNotices: function(ids, onMessage, onFail){
    if(typeof ids == 'string') ids = [ids];
    if(ids instanceof Array){
      var newIds = {};
      for(var i = 0; i < ids.length; i++){
        newIds[ids[i]._id || ids[i]] = 1000;
      }
      ids = newIds;
    }
    var queryStr = '';
    for(var key in ids){
      var time = parseFloat(ids[key]);
      if(isNaN(time)) time = 1000;
      queryStr += key+'='+time+ '&';
    }
    if(queryStr.length > 0) queryStr = queryStr.substr(0, queryStr.length-1);
    if(!onMessage) return;
    var ws = new WebSocket(this.ws + '/notice/listenNotices?'+queryStr);
    ws.onmessage = function(event) {
      var data = event.data;
      data = JSON.parse(data);
      onMessage(data);
    };
    ws.onclose = function(event){
      if(onFail) onFail();
    };
    return ws;
  },
  /** Listen to total number of notices
  * Note that one client can maintain one communication using this function. A new call will replace the old one.
  * @param {function} callback when there is new message; callback(total)
  * @param {function} callback when fail. This may happen immediately the function is called, or later
  * @return {object} websocket
  */
  ListenTotalNotice: function(onMessage, onFail){
    if(!onMessage) return;
    var ws = new WebSocket(this.ws + '/notice/listenTotalNotice');
    ws.onmessage = function(event) {
      var data = event.data;
      data = parseInt(data);
      onMessage(data);
    };
    ws.onclose = function(event){
      if(onFail) onFail();
    };
    return ws;
  },
  /** Stop listening
  * @param {object} websocket the websocket object created by listen function
  */
  StopListen: function(websocket){
    ws.close();
  }
}
