var _lastEventId = 0;
Nu4DataService = {
    /** version information: major
    * @type {number}
    * @private
    */
    "MAJOR": 3,
    /** version information: minor
    * @type {number}
    * @private
    */
    "MINOR": 5,
    /** version information: revision
    * @type {number}
    * @private
    */
    "REVISION": 0,
    /** the url of data manager in NuCleus
    * @type {string}
    * @private
    */
    DATAURL: "/nu/index.php?r=dataManager/",
    APIURL: "/nu/index.php?r=api/",
    AUTHURL: "/nu/index.php?r=auth/",
	Initialize: function(domain, port){
		domain = domain || "localhost";
		port = port || "80";
		this.DATAURL = "http://"+domain + ":"+port+"/nu/index.php?r=dataManager/";
		this.APIURL = "http://"+domain + ":"+port+"/nu/index.php?r=api/";
		this.AUTHURL = "http://"+domain + ":"+port+"/nu/index.php?r=auth/";
	},
    _urlEncode: function (str) {
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

        if (!str) return "";

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
            return "%" + m2.toUpperCase();
        });

        return ret;
    },
    _post: function (_urlName, _dataString, _dataType, _successFunction, options) {
        options = options || {};
        $["ajax"]({
            "url": _urlName,
            "global": options["global"] || false,
            "async": options["async"] || false,
            "cache": options["cache"] || false,
            "type": "POST",
            "contentType": "application/x-www-form-urlencoded; charset=UTF-8",
            "dataType": _dataType,
            "data": _dataString,
            "success": _successFunction
        });
    },
    "Post": function (_urlName, _dataString, _successFunction) {
        this._post(_urlName, _dataString, "text", _successFunction);
    },
    /** check if the user is guest. Callback with boolean
    * @param {function} callback
    */
    "IsGuest": function (callback) {
        var url = this.AUTHURL + "getUserType";
        var param = "";
        this._post(url, param, "text", function (str) {
            var result = $["parseJSON"](str);
            callback(result["type"] == "guest");
        });
    },
    /** get current user id, name and type
    * @param {function} callback
    */
    "GetCurrentUser": function (callback) {
        var url = this.DATAURL + "getCurrentUser";
        this._post(url, "", "text", function (str) {
            var data = JSON.parse(str);
            if (data["success"]) {
                var user = data["user"];
                callback(user["user_id"], user["user_name"], user["user_type"]);
            }
            else {
                callback(-1, "", "Guest");
            }
        });
    },
    /** login
    * @param {string} userid
    * @param {string} password
    * @param {function} callback
    */
    "Login": function (userid, password, callback) {
        var url = this.AUTHURL + "login";
        var param = "txtName=" + userid + "&txtPassword=" + password + "&CLIENT_IP=127.0.0.1";
        this._post(url, param, "text", function (str) {
            var result = $["parseJSON"](str);
            if (result["success"]) callback(result["success"]);
            else callback(false);
        });
    },
    /** logout
    * @param {function} callback
    */
    "Logout": function (callback) {
        var url = this.AUTHURL + "logout";
        var param = "";
        this._post(url, param, "text", function (str) {
            callback(true);
        });
    },
    /** get all users. Callback will contain an array for users. If raw is true, each element contains:
    * id: the id of the site
    * name: the name of the site
    * description: the description of the site
    * @param {function} callback
    */
    "GetAllUsers": function (callback, raw) {
        raw = raw || false;
        var url = this.DATAURL + "listAllUsers";
        var param = "";
        this._post(url, param, "text", function (str) {
            var users = [];
            try {
                //the replace is because the wrong json string from NUCLEUS
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        if (raw) users.push(row);
                        else {
                            users.push({
                                "id": parseInt(row["user_id"]),
                                "name": row["user_name"],
                                "type": row["user_type"]
                            });
                        }
                    }
                }
            }
            catch (ex) {
                users.length = 0;
            }
            callback(users);
        });
    },
    /** get all the sites. By default, each element of the returned array has the following attributes:
    * id: the id of the site
    * name: the name of the site
    * description: the description of the site
    * time_created: the creation time of the site
    * time_modified: the latest modification time of the site
    * @param {function} callback 
    * @param {boolean} raw set to true if raw data is wanted. By default it is false
    * @return {Array<object>}
    */
    "GetAllSites": function (callback, raw) {
        raw = raw || false;
        var url = this.DATAURL + "listAllSites";
        var param = "";
        this._post(url, param, "text", function (str) {
            var sites = [];
            try {
                //the replace is because the wrong json string from NUCLEUS
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        if (raw) sites.push(row);
                        else {
                            sites.push({
                                "id": parseInt(row["site_id"]),
                                "name": row["site_name"],
                                "description": row["site_description"],
                                "time_created": row["time_created"],
                                "time_modified": row["time_modified"]
                            });
                        }
                    }
                }
            }
            catch (ex) {
                sites.length = 0;
            }
            callback(sites);
        });
    },
    /* get all the devices of a site. By default, each element of the returned array has the following attributes:
    * id: the id of the device
    * name: the name of the device
    * description: the description of the device
    * type: the device type of the device
    * site: the id of the site containing the device
    * x: the x coordinate of the device's position
    * y: the y coordinate of the device's position
    * z: the z coordinate of the device's position
    * dim: the dimension of the icon representing the device (2 or 3)
    * hasVolume: if the device has volume or not
    * hasLine: if the device has line or not
    * time_created: the creation time of the site
    * time_modified: the latest modification time of the site
    * @param {number} site id 
    * @param {function} callback 
    * @param {boolean} raw set to true if raw data is wanted. By default it is false
    * @return {Array<object>}
    */
    "GetAllDevicesOfSite": function (siteId, callback, raw) {
        raw = raw || false;
        var url = this.DATAURL + "listDevicesBySite";
        var param = "site_id=" + siteId;
        this._post(url, param, "text", function (str) {
            var devices = [];
            try {
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        if (raw) devices.push(row);
                        else {
                            devices.push({
                                "id": parseInt(row["device_id"]),
                                "name": row["device_name"],
                                "description": row["device_description"],
                                "type": row["device_type"],
                                "site": parseInt(row["site_id"]),
                                "x": parseFloat(row["mark_posx"]),
                                "y": parseFloat(row["mark_posy"]),
                                "z": parseFloat(row["mark_posz"]),
                                "hasVolume": row["mark_volume"] ? true : false,
                                "hasLine": row["mark_line"] ? true : false,
                                "dim": row["mark_type"] == "2DIcon" ? 2 : 3,
                                "time_created": row["time_created"],
                                "time_modified": row["time_modified"]
                            });
                        }
                    }
                }
            }
            catch (ex) {
                devices.length = 0;
            }
            callback(devices);
        });
    },
    /** get the raw data of a device by its siteId and deviceid
    * @param {number} site id
    * @param {number} device id
    * @param {function} callback
    */
    "GetRawDeviceById": function (siteId, deviceId, callback) {
        this["GetAllDevicesOfSite"](siteId, function (devices) {
            var low = 0;
            var high = devices.length;
            var mid = parseInt((low + high) / 2);
            var device = null;
            while (low <= high) {
                var id = parseInt(devices[mid]["device_id"]);
                if (id > deviceId) high = mid - 1;
                else if (id < deviceId) low = mid + 1;
                else { device = devices[mid]; break; }
                mid = parseInt((low + high) / 2);
            }
            callback(device);
        }, true);
    },
    /* get volume of a device. The callback will be called with a object containing the following attributes
    * vertices: an array, each element is an object containing "x" and "z" attributes
    * y: the common y value of all vertices
    * height: the height of the volume
    * color: the 8-char string for "rrggbbaa"
    * @param {number} device id 
    * @param {function} callback 
    * @return {object}
    */
    "GetVolumeOfDevice": function (deviceId, callback) {
        var url = this.APIURL + "getDeviceVolume";
        var param = "device_id=" + deviceId;
        this._post(url, param, "text", function (str) {
            var volume = null;
            try {
                var result = $["parseJSON"](str);
                if (result["vertices"].length > 0) {
                    var vertices = result["vertices"];
                    var y = vertices[0]["y"];
                    for (var i = 0; i < vertices.length; i++) {
                        delete vertices[i]["y"];
                    }
                    volume = {
                        "vertices": vertices,
                        "y": y,
                        "height": result["height"],
                        "color": result["colorstr"]
                    };
                }
            }
            catch (ex) {
            }
            callback(volume);
        });
    },
    /** save volume of a device.
    * @param {number} device id 
    * @param {Array<object>} vertices
    * @param {number} height
    * @param {number} y
    * @param {string} color
    * @param {function} callback 
    */
    "SetVolumeOfDevice": function (deviceId, vertices, height, y, color, callback) {
        if (vertices.length == 0) {
            callback(false);
            return;
        }
        for (var i = 0; i < vertices.length; i++) {
            vertices[i]["y"] = y;
        }
        var volume = {
            "vertices": vertices,
            "height": height,
            "colorstr": color
        }
        var url = this.DATAURL + "editDevice";
        var param = "device_id=" + deviceId + "&mark_volume=" + JSON.stringify(volume);
        this._post(url, param, "text", function (str) {
            callback(str);
        });
    },
    /** delete volume of a device.
    * @param {number} device id 
    * @param {function} callback 
    */
    "DeleteVolumeOfDevice": function (deviceId, callback) {
        var url = this.DATAURL + "editDevice";
        var param = "device_id=" + deviceId + "&mark_volume=";
        this._post(url, param, "text", function () {
            callback();
        });
    },
    /* get all the objects of a site. By default, each element of the returned array has the following attributes:
    * id: the id of the object
    * name: the name of the object
    * description: the description of the object
    * group: the group of the object
    * site: the id of the site containing the device
    * x: the x coordinate of the device's position
    * y: the y coordinate of the device's position
    * z: the z coordinate of the device's position
    * dim: the dimension of the icon representing the device (2 or 3)
    * time_created: the creation time of the site
    * time_modified: the latest modification time of the site
    * @param {number} site id 
    * @param {function} callback 
    * @param {boolean} raw set to true if raw data is wanted. By default it is false
    * @return {Array<object>} from callback
    */
    "GetAllObjectsOfSite": function (siteId, callback, raw) {
        raw = raw || false;
        var url = this.DATAURL + "listObjectBySite";
        var param = "site_id=" + siteId;
        this._post(url, param, "text", function (str) {
            var objects = [];
            try {
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        if (raw) objects.push(row);
                        else {
                            objects.push({
                                "id": parseInt(row["object_id"]),
                                "name": row["object_name"],
                                "description": row["object_description"],
                                "group": row["object_group"],
                                "site": parseInt(row["site_id"]),
                                "x": parseFloat(row["mark_posx"]),
                                "y": parseFloat(row["mark_posy"]),
                                "z": parseFloat(row["mark_posz"]),
                                "dim": row["mark_type"] == "2DIcon" ? 2 : 3,
                                "time_created": row["time_created"],
                                "time_modified": row["time_modified"]
                            });
                        }
                    }
                }
            }
            catch (ex) {
                objects.length = 0;
            }
            callback(objects);
        });
    },
    /* get line of a device. The callback will be called with a object containing the following attributes
    * vertices: an array, each element is an object containing "x", "y", "z" attributes
    * color: the 8-char string for "rrggbbaa"
    * @param {number} site id 
    * @param {number} device id 
    * @param {function} callback 
    * @return {object}
    */
    "GetLineOfDevice": function (siteId, deviceId, callback) {
        this["GetRawDeviceById"](siteId, deviceId, function (rawDevice) {
            if (rawDevice) {
                var line = null;
                try {
                    var rawLine = $["parseJSON"](rawDevice["mark_line"]);
                    if (rawLine["vertices"].length > 0) {
                        var vertices = rawLine["vertices"];
                        line = {
                            "vertices": vertices,
                            "color": rawLine["colorstr"]
                        };
                    }
                }
                catch (ex) {
                }
                callback(line);
            }
            else callback(null);
        });
    },
    /** save line of a device.
    * @param {number} device id 
    * @param {Array<object>} vertices
    * @param {string} color
    * @param {function} callback 
    */
    "SetLineOfDevice": function (deviceId, vertices, color, callback) {
        if (vertices.length == 0) {
            callback(false);
            return;
        }
        var line = {
            "vertices": vertices,
            "colorstr": color
        }
        var url = this.DATAURL + "editDevice";
        var param = "device_id=" + deviceId + "&mark_line=" + JSON.stringify(line);
        this._post(url, param, "text", function (str) {
            callback(str);
        });
    },
    /** delete line of a device.
    * @param {number} device id 
    * @param {function} callback 
    */
    "DeleteLineOfDevice": function (deviceId, callback) {
        var url = this.DATAURL + "editDevice";
        var param = "device_id=" + deviceId + "&mark_line=";
        this._post(url, param, "text", function () {
            callback();
        });
    },
    /** get all the profiles of a site.
    * @param {number} site id
    * @param {function) call back
    */
    "GetAllProfilesOfSite": function (siteId, callback, raw) {
        raw = raw || false;
        var url = this.DATAURL + "listProfilesBySite";
        var param = "site_id=" + siteId;
        this._post(url, param, "text", function (str) {
            var profiles = [];
            try {
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        if (raw) profiles.push(row);
                        else {
                            profiles.push({
                                "id": parseInt(row["profile_id"]),
                                "name": row["profile_name"],
                                "description": row["profile_description"],
                                "time_created": row["time_created"],
                                "time_modified": row["time_modified"]
                            });
                        }
                    }
                }
            }
            catch (ex) {
                profiles.length = 0;
            }
            callback(profiles);
        });
    },
    /** get all device ids that maps to a profile
    * @param {number} site id
    * @param {function) call back
    */
    "GetDeviceIdsOfProfile": function (profileId, callback) {
        var url = this.DATAURL + "listVirtualDevicesByProfile";
        var param = "profile_id=" + profileId;
        this._post(url, param, "text", function (str) {
            var deviceIds = [];
            try {
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        deviceIds.push(parseInt(row["device_id"]));
                    }
                }
            }
            catch (ex) {
                deviceIds.length = 0;
            }
            callback(deviceIds);
        });
    },
    /** set devices that maps to a profile
    * @param {number} profile id
    * @param {Array<number>| string} array of device ids
    * @param {function} callback
    */
    "SetDeviceIdsOfProfile": function (profileId, deviceIds, callback) {
        if (typeof deviceIds != "string") deviceIds = JSON.stringify(deviceIds);
        var url = this.DATAURL + "updateVirtualDevicesByProfile";
        var param = "profile_id=" + profileId + "&devices=" + deviceIds;

        this._post(url, param, "text", function (str) {
            var data = JSON.parse(str);
            if (data["success"]) {
                callback(true);
            }
            else {
                callback(false);
            }
        });
    },
    /** delete profile by id
    * @param {number} profile id
    * @param {function} callback
    */
    "DeleteProfileById": function (profileId, callback) {
        var url = this.DATAURL + "deleteProfile";
        var param = "profile_id=" + profileId;

        this._post(url, param, "text", function (str) {
            var data = JSON.parse(str);
            if (data["success"]) {
                callback(true);
            }
            else {
                callback(false);
            }
        });
    },
    /** delete all profiles of a site
    * @param {number} site id
    * @param {function} callback
    */
    "ClearProfilesOfSite": function (siteId, callback) {
        this["GetAllProfilesOfSite"](siteId, function (profiles) {
            var pLength = profiles.length;
            var pCount = 0;
            var success = true;
            for (var i = 0; i < pLength; i++) {
                var profile = profiles[i];
                this["DeleteProfileById"](profile["profile_id"], function (res) {
                    success = success && res;
                    pCount++;
                    if (pCount == pLength) callback(success);
                });
            }
        } .bind(this), true);
    },
    /** get personal view data 
    * @param {number} profile id
    * @param {function} callback
    */
    "GetPersonalViewOfProfile": function (profileId, callback) {
        var url = this.DATAURL + "listAccessesByProfile";
        var param = "profile_id=" + profileId;
        this["GetCurrentUser"](function (userId) {
            if (userId == -1) callback(null);
            else {
                this._post(url, param, "text", function (str) {
                    str = str.replace('counts', '"counts"');
                    str = str.replace('rows', '"rows"');
                    var result = $["parseJSON"](str);
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        if (row["user_id"] == userId) {
                            var data = JSON.parse(row["access_data"]);
                            if (!data) callback(null);
                            else if (!data["personalViews"]) callback(null);
                            else callback(data["personalViews"]);
                            return;
                        }
                    }
                    callback(null);
                });
            }
        } .bind(this));
    },
    /** set persoanl view data
    * @param {number} profile id
    * @param {object|string} personal view data
    * @param {function} callback with access id
    */
    "SetPersonalViewOfProfile": function (profileId, personalViews, callback) {
        if (typeof personalViews != "string") personalViews = JSON.stringify(personalViews);

        var url = this.DATAURL + "listAccessesByProfile";
        var param = "profile_id=" + profileId;
        this["GetCurrentUser"](function (userId) {
            if (userId == -1) callback(-1);
            else {
                this._post(url, param, "text", function (str) {
                    str = str.replace('counts', '"counts"');
                    str = str.replace('rows', '"rows"');
                    var result = $["parseJSON"](str);
                    var accessId = -1;
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        if (row["user_id"] == userId) {
                            accessId = row["access_id"];
                            break;
                        }
                    }
                    if (accessId == -1) callback(-1);
                    else {
                        var url = this.DATAURL + "storeAllPersonalViews";
                        var param = "access_id=" + accessId + "&personalViews=" + personalViews;
                        this._post(url, param, "text", function (str) {
                            var result = JSON.parse(str);
                            callback(result["success"] ? accessId : -1);
                        });
                    }
                } .bind(this));
            }
        } .bind(this));
    },
    /** get all the device types of several profiles
    *@param {number} profile id
    * @param {function} callback
    */
    "GetDeviceTypes": function (typeNames, callback) {
        var url = this.DATAURL + "listDeviceTypes";
        var deviceTypes = [];

        //find deviceTypes by profile
        this._post(url, "", "text", function (str) {
            try {
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var rowt = result["rows"][i];
                        if ((!typeNames) || typeNames.indexOf(rowt["device_type"]) >= 0) {
                            deviceTypes.push(rowt);
                        }
                    }
                }
            }
            catch (ex) {
                deviceTypes = [];
            }
            callback(deviceTypes);
        } .bind(this));
    },
    /** get device type by name
    *@param {string} name of device type
    */
    "GetDeviceTypeByName": function (typeName, callback) {
        var url = this.DATAURL + "getDeviceType";
        var param = "device_type=" + typeName;
        var deviceType = null;

        //find deviceTypes by profile
        this._post(url, param, "text", function (str) {
            try {
                var data = JSON.parse(str);
                if (data["device_type"] != "null") deviceType = JSON.parse(data["device_type"]);

            }
            catch (ex) {
            }
            callback(deviceType);
        } .bind(this));
    },
    /** update device type. Create if params.id exists, or edit otherwise
    * @param {object} parameters
    * @param {function} callback
    */
    "UpdateDeviceType": function (params, callback) {
        var url = "", param = "";
        if (typeof params["device_type_config"] != "string") params["device_type_config"] = JSON.stringify(params["device_type_config"]);

        if ("device_type_id" in params) {
            url = this.DATAURL + "editDeviceType";
            //don't set placemark
            param = "device_type_id=" + params["device_type_id"] + "&device_type=" + params["device_type"] +
                "&device_type_config=" + params["device_type_config"];
        }
        else {
            url = this.DATAURL + "createDeviceType";
            //set the default, as no other more staff to use
            params["pm_source"] = "149.png";
            params["pm_pic"] = "149.png?datenum=" + new Date().getTime();
            param = "device_type=" + params["device_type"] + "&device_type_config=" + params["device_type_config"] +
                "&pm_pic=" + params["pm_pic"] + "&pm_type=" + params["pm_type"] +
                "&pm_source=" + params["pm_source"];
        }
        this._post(url, param, "text", function (str) {
            var data = JSON.parse(str);
            if (data["success"]) {
                callback(data["id"]);
            }
            else {
                callback(null);
            }
        });
    },
    /** get all attributes
    * @param {function} callback
    */
    "GetAllAttributes": function (callback) {
        var url = this.DATAURL + "listAttributes";
        var param = "";
        this._post(url, param, "text", function (str) {
            var attributes = [];
            try {
                //the replace is because the wrong json string from NUCLEUS
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        attributes.push(row);
                    }
                }
            }
            catch (ex) {
                attributes.length = 0;
            }
            callback(attributes);
        });
    },
    /** update attribute. Create if params.id exists, or edit otherwise
    * @param {object} parameters
    * @param {function} callback
    */
    "UpdateAttribute": function (params, callback) {
        var url = "", param = "";
        params["attribute_config"] = encodeURIComponent(params["attribute_config"]);
        if ("attribute_id" in params) {
            url = this.DATAURL + "editAttribute";
            param = "attribute_id=" + params["attribute_id"] + "&attribute_name=" + params["attribute_name"] + "&attribute_config=" + params["attribute_config"];
        }
        else {
            url = this.DATAURL + "createAttribute";
            param = "attribute_name=" + params["attribute_name"] + "&attribute_config=" + params["attribute_config"];
        }
        this._post(url, param, "text", function (str) {
            var data = JSON.parse(str);
            if (data["success"]) {
                callback(data["id"]);
            }
            else {
                callback(null);
            }
        });
    },
    /** get all 2D placemarks 
    * @param {function} callback
    */
    "GetAll2DPlacemarks": function (callback) {
        var url = this.DATAURL + "listPlacemarkByType";
        var param = "pm_type=2DIcon";
        this._post(url, param, "text", function (str) {
            var placemarks = [];
            try {
                //the replace is because the wrong json string from NUCLEUS
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        placemarks.push(row);
                    }
                }
            }
            catch (ex) {
                placemarks.length = 0;
            }
            callback(placemarks);
        });
    },
    /** get all 3D placemarks 
    * @param {function} callback
    */
    "GetAll3DPlacemarks": function (callback) {
        var url = this.DATAURL + "listPlacemarkByType";
        var param = "pm_type=3DObject";
        this._post(url, param, "text", function (str) {
            var placemarks = [];
            try {
                //the replace is because the wrong json string from NUCLEUS
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    for (var i = 0; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        placemarks.push(row);
                    }
                }
            }
            catch (ex) {
                placemarks.length = 0;
            }
            callback(placemarks);
        });
    },
    /** get current events of devices.
    * Current events are (1) events created after the first query
    * or (2) events created after previous query 
    * this is the first time call, which will 
    * @param {number[]} ids an array of device ids
    * @param {function} callback
    */
    "GetCurrentEventsByDeviceIds": function (ids, callback) {
        var url = this.DATAURL + "listCurrentEventsByDevices";
        var param = "activeDevices=" + JSON.stringify(ids);
        if (_lastEventId)
            param += "&signalType=eventid" + "&timeLastUpdate=" + _lastEventId;
        else
            param += "&signalType=timestamp" + "&timeLastUpdate=" + parseInt((new Date().getTime()) / 1000);
        this._post(url, param, "text", function (str) {
            var events = [];
            try {
                //the replace is because the wrong json string from NUCLEUS
                str = str.replace('counts', '"counts"');
                str = str.replace('rows', '"rows"');
                var result = $["parseJSON"](str);
                if (result["counts"]) {
                    _lastEventId = parseInt(result["rows"][0]["event_id"]);
                    for (var i = 1; i < result["counts"]; i++) {
                        var row = result["rows"][i];
                        events.push(row);
                    }
                }
            }
            catch (ex) {
                events.length = 0;
            }
            callback(events);
        }, {"async":true});
    },
    /** get newest events of devices.
    * newest events must be current events, but one device 
    * can have up to one newest events.
    * @param {number[]} ids an array of device ids
    * @param {function} callback
    */
    "GetNewestEventsByDeviceIds": function (ids, callback) {
        this["GetCurrentEventsByDeviceIds"](ids, function (events) {
            var uniqueEvents = [];
            var checkedIds = [];
            for (var i = events.length - 1; i >= 0; i--) {
                var event = events[i];
                var deviceid = event["device_id"];
                if (checkedIds.indexOf(deviceid) < 0) {
                    checkedIds.push(deviceid);
                    uniqueEvents.push(event);
                }
            }
            callback(uniqueEvents);
        });
    },
    /** create a site
    * @param {object} parameters
    * @return {number} site id as a parameter of callback
    */
    "CreateSite": function (params, callback) {
        //0. initialization
        var name = params['name'];
        var description = params['description'];
        var ext = params['ext'];
        var modelFile = params['modelFile'];
        var bgmFile = params['bgmFile'];
        var zipFile = params['zipFile'];
        var picFile = params['picFile'];
        if (!ext || !modelFile) {
            callback(-1);
            return;
        }
        var url = this.DATAURL + "createSite";
        var modelType = "";
        switch (ext) {
            case "xlcl": modelType = "XLCL"; break;
            case "xsn": modelType = "XSN"; break;
            case "kml": modelType = "KML"; break;
            default: break;
        }
        if (modelType == "") {
            callback(-1);
            return;
        }

        var data = new FormData();
        data.append('site_name', name);
        data.append('site_description', description);
        data.append('model_type', modelType);
        if (ext == "kml") data.append('site_model_kml', modelFile, modelFile.name);
        else {
            data.append('site_model_xlcl', modelFile, modelFile.name);
            data.append('site_model_bgm', bgmFile, bgmFile.name);
        }
        if (zipFile) data.append('site_model_map', zipFile, zipFile.name);
        else data.append('site_model_map', new Blob(), "");
        if (picFile) data.append('site_pic', picFile, picFile.name);
        else data.append('site_pic', new Blob(), "");
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 0) {
                if (xhr.responseText) {
                    var resData = JSON.parse(xhr.responseText);
                    if (resData && resData["success"] == true) {
                        callback(resData["id"]);
                    }
                    else if (resData && resData["success"] == false) {
                        callback(-1, resData["reason"]);
                    }
                }
            }
            else if (xhr.status == 500) {
                callback(-1, "internel server error");
            }
            else callback(-1, "unknown error");
        };
        xhr.send(data);
    },
    /** create a profile
    * @param {object} parameters
    */
    "CreateProfile": function (params, callback) {
        var url = this.DATAURL + "createProfile";

        var param = "site_id=" + params["site_id"];
        var attributes = ["profile_name", "profile_description", "profile_data"];
        for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            if (attribute in params && params[attribute] != null)
                param += "&" + attribute + "=" + params[attribute];
        }
        var count = 0;
        var length = 0;

        this._post(url, param, "text", function (str) {
            var data = JSON.parse(str);
            var config = JSON.parse(params["profile_data"]);
            if (data["success"]) {
                var profileId = data["id"];
                if (config && config["options"]) length++;
                if (config && config["initialView"]) length++;
                if (config && config["bookmarkTour"]) length++;
                if (length == 0) callback(profileId);
                if (config && config["options"]) {
                    url = this.DATAURL + "editProfileConfig";
                    param = "profile_id=" + profileId + "&options=" + JSON.stringify(config["options"]);
                    this._post(url, param, "text", function (str) { count++; if (count == length) callback(profileId); });
                }
                if (config && config["initialView"]) {
                    url = this.DATAURL + "storeInitialView";
                    param = "profile_id=" + profileId + "&config=" + JSON.stringify(config["initialView"]);
                    this._post(url, param, "text", function (str) { count++; if (count == length) callback(profileId); });
                }
                if (config && config["bookmarkTour"]) {
                    url = this.DATAURL + "storeBookmarkTour";
                    param = "profile_id=" + profileId + "&bookmark_tour=" + JSON.stringify(config["bookmarkTour"]);
                    this._post(url, param, "text", function (str) { count++; if (count == length) callback(profileId); });
                }
            }
            else {
                callback(null);
            }
        } .bind(this));
    },
    /** create a device
    * @param {object} parameters
    * @return {number} device id as a parameter of callback
    */
    "CreateDevice": function (params, callback) {
        var url = this.DATAURL + "createDevice";
        var param = "site_id=" + params["site_id"] + "&device_type=" + params["device_type"];
        var attributes = ["device_name", "device_tag", "device_description", "device_data",
            "device_maker", "device_model", "mark_type", "mark_source", "mark_word",
            "mark_volume", "mark_line", "mark_posx", "mark_posy", "mark_posz",
            "mark_orix", "mark_oriy", "mark_oriz", "mark_scalex", "mark_scaley", "mark_scalez",
            "mark_distance", "mark_globalview", "mark_personalview", "mark_data"
        /*"v1","v2","v3","v4","s1","s2","s3","r1_type","r1_data","comment"*/
            ];
        for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            if (attribute in params && params[attribute] != null)
                param += "&" + attribute + "=" + params[attribute];
        }
        this._post(url, param, "text", function (str) {
            var data = JSON.parse(str);
            if (data["success"]) {
                callback(data["id"]);
            }
            else {
                callback(null);
            }
        });
    },
    /** create an object
    * @param {object} parameters
    * @return {number} device id as a parameter of callback
    */
    "CreateObject": function (params, callback) {
        var url = this.DATAURL + "createObject";
        var param = "site_id=" + params["site_id"];
        var attributes = ["object_group", "object_name", "object_description", "object_data",
            "mark_type", "mark_source", "mark_word", "mark_volume", "mark_posx", "mark_posy", "mark_posz",
            "mark_orix", "mark_oriy", "mark_oriz", "mark_scalex", "mark_scaley", "mark_scalez",
            "mark_distance", "mark_globalview", "mark_personalview"
        /*"v1","v2","v3","v4","s1","s2","s3","r1_type","r1_data","comment"*/
            ];
        for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            if (attribute in params && params[attribute] != null)
                param += "&" + attribute + "=" + params[attribute];
        }
        this._post(url, param, "text", function (str) {
            var data = JSON.parse(str);
            if (data["success"]) {
                callback(data["id"]);
            }
            else {
                callback(null);
            }
        });
    },
    /** export a zip file that contains all necessary info. Note this only works for SiteIO
    * @param {number} site id
    * @param {string} site name
    * @param {string} site description
    * @param {string} site model
    * @param {string} site pic
    * @param {Array<number>} ids of exported site
    * @param {Array<number>} ids of exported device
    * @param {Array<number>} ids of exported object
    * @param {function} callback with a download link
    */
    "ExportSite": function (siteId, siteName, siteDescription, siteModel, sitePic,
        profilesIds, deviceIds, objectIds, callback) {
        if (siteId < 0) { callback(false, { "reason": "site id is invalid" }); return; }
        //1. get all devices
        this["GetAllDevicesOfSite"](siteId, function (devices) {
            var newDevices = [];
            var newDeviceTypes = [];
            for (var i = 0; i < devices.length; i++) {
                var curId = parseInt(devices[i]["device_id"]);
                if (!deviceIds || deviceIds.indexOf(curId) >= 0) {
                    newDevices.push(devices[i]);
                    if (newDeviceTypes.indexOf(devices[i]["device_type"]) < 0) {
                        newDeviceTypes.push(devices[i]["device_type"]);
                    }
                }
            }
            //2. get device types
            this["GetDeviceTypes"](newDeviceTypes, function (deviceTypes) {
                newDeviceTypes = deviceTypes;
                //3. get all objects
                this["GetAllObjectsOfSite"](siteId, function (objects) {
                    var newObjects = [];
                    for (var j = 0; j < objects.length; j++) {
                        var curId = parseInt(objects[j]["object_id"]);
                        if (!objectIds || objectIds.indexOf(curId) >= 0) newObjects.push(objects[j]);
                    }
                    //4. get all profiles
                    this["GetAllProfilesOfSite"](siteId, function (profiles) {
                        var newProfiles = [];
                        for (var k = 0; k < profiles.length; k++) {
                            var curId = parseInt(profiles[k]["profile_id"]);
                            if (!profilesIds || profilesIds.indexOf(curId) >= 0) newProfiles.push(profiles[k]);
                        }
                        var pLength = newProfiles.length;
                        var pCount = 0;
                        if (pLength == 0) { callback(false, { "reason": "no profile is selected" }); return; }
                        //5. get virtual devices
                        for (var p = 0; p < pLength; p++) {
                            var profile = newProfiles[p];
                            profile["vd"] = [];
                            profile["pv"] = [];
                            this["GetDeviceIdsOfProfile"](profile["profile_id"], function (vdIds) {
                                for (var v = 0; v < vdIds.length; v++)
                                    if (!deviceIds || deviceIds.indexOf(vdIds[v]) >= 0)
                                        profile["vd"].push(vdIds[v]);
                                //6. get personal views
                                this["GetPersonalViewOfProfile"](profile["profile_id"], function (pv) {
                                    if (pv != null) profile["pv"] = pv;
                                    pCount++;
                                    if (pCount == pLength) {
                                        //form data and call pack.php
                                        var data = {
                                            "id": siteId,
                                            "name": siteName,
                                            "description": siteDescription,
                                            "model": siteModel,
                                            "pic": sitePic,
                                            "devices": newDevices,
                                            "objects": newObjects,
                                            "profiles": newProfiles,
                                            "types": newDeviceTypes
                                        };
                                        var str = "action=export&data=" + encodeURIComponent(JSON.stringify(data));
                                        this._post("pack/pack.php", str, function (result) {
                                            result = JSON.parse(result);
                                            if (result["success"]) {
                                                callback(true, { "link": result["link"] });
                                            }
                                            else {
                                                callback(false, { "reason": result["reason"] });
                                            }
                                        }); // end of Post
                                    }
                                } .bind(this)); //end of GetPersonalViewOfProfile                                
                            } .bind(this)); //end of GetDeviceIdsOfProfile
                        }
                    } .bind(this), true); //end of GetAllProfilesOfSite
                } .bind(this), true); //end of GetAllObjectsOfSite
            } .bind(this)); //end of GetDeviceTypes
        } .bind(this), true); //end of GetAllDevicesOfSite
    },
    /** import a site. Note this only works for SiteIO
    * @param {File} zip file
    * @param {function} callback with maps of device ids
    */
    "ImportSite": function (file, onDone, onProcess) {
        if (!JSZip) {
            onDone(false, { "reason": "no JSZIP library" });
            return;
        }
        if (file["name"].split('.').pop() != "zip") {
            onDone(false, { "reason": "file should be a zip file" });
            return;
        }
        var modelFile = null, bgmFile = null, zipFile = null, picFile = null, iconFile = null, data = null;
        var ext = "", siteStr = "";
        var reader = new FileReader();
        onProcess(0.0, "Loading zip file...");
        reader["onload"] = function (e) {
            try {
                //-1. read the content of the file with JSZip, and upload icons
                onProcess(0.1, "Extracting files...");
                var zip = new JSZip(e["target"]["result"]);
                $["each"](zip["files"], function (index, zipEntry) {
                    if (endWith(zipEntry["name"], ".xlcl")) {
                        modelFile = new Blob([zipEntry["asArrayBuffer"]()]);
                        modelFile["name"] = zipEntry["name"];
                        ext = "xlcl";
                    }
                    else if (endWith(zipEntry["name"], ".xsn")) {
                        modelFile = new Blob([zipEntry["asArrayBuffer"]()]);
                        modelFile["name"] = zipEntry["name"];
                        ext = "xsn";
                    }
                    else if (endWith(zipEntry.name, ".kml")) {
                        modelFile = new Blob([zipEntry["asArrayBuffer"]()]);
                        modelFile["name"] = zipEntry["name"];
                        ext = "kml";
                    }
                    else if (endWith(zipEntry.name, ".bgm.bz2")) {
                        bgmFile = new Blob([zipEntry["asArrayBuffer"]()]);
                        bgmFile["name"] = zipEntry["name"];
                    }
                    else if (endWith(zipEntry["name"], "jpg") ||
                                endWith(zipEntry["name"], "jpeg") ||
                                endWith(zipEntry["name"], "gif") ||
                                endWith(zipEntry["name"], "png")) {
                        picFile = new Blob([zipEntry["asArrayBuffer"]()]);
                        picFile["name"] = zipEntry["name"];
                    }
                    else if (zipEntry["name"] == "data.site") {
                        siteStr = zipEntry["asText"]();
                    }
                    else if (endWith(zipEntry.name, ".zip")) {
                        if (zipEntry["name"].indexOf("map") == 0) {
                            zipFile = new Blob([zipEntry["asArrayBuffer"]()]);
                            zipFile["name"] = zipEntry["name"];
                        }
                        if (zipEntry["name"].indexOf("icon") == 0) {
                            iconFile = new Blob([zipEntry["asArrayBuffer"]()]);
                            iconFile["name"] = zipEntry["name"];
                        }
                    }
                });
                //form data and call pack.php
                if (iconFile != null) {
                    var data = new FormData();
                    data.append('icon_zip', iconFile, iconFile.name);
                    data.append('action', "uploadIcon");
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', "pack/pack.php", true);
                    xhr.onload = function () {
                        if (xhr.status === 200 || xhr.status === 0) {
                        }
                        else {
                        }
                    };
                    xhr.send(data);
                }

                onProcess(0.2, "Parsing site metadata...");
                data = JSON.parse(siteStr);
                //0. create site
                var sParams = {
                    "name": data['name'],
                    "description": data['description'],
                    "ext": ext,
                    "modelFile": modelFile,
                    "bgmFile": bgmFile,
                    "zipFile": zipFile,
                    "picFile": picFile
                };
                onProcess(0.3, "Creating site...");
                this["CreateSite"](sParams, function (siteId, reason) {
                    if (siteId < 0) {
                        onDone(false, { "reason": "cannot create site because " + reason });
                        return;
                    }
                    //1. get all orignial attributes and new attributes
                    this["GetAllAttributes"](function (originalAttributes) {
                        var originalAttributesName = {}; //name->id
                        var newAttributesName = {}; //name->type index
                        var newAttributes = [];
                        for (var i = 0; i < originalAttributes.length; i++) {
                            originalAttributesName[originalAttributes[i]["attribute_name"]] = originalAttributes[i]["attribute_id"];
                        }
                        var deviceTypes = data["types"];
                        for (var i = 0; i < deviceTypes.length; i++) {
                            var deviceType = deviceTypes[i];
                            var attributes = JSON.parse(deviceType["device_type_config"]);
                            for (var j = 0; j < attributes.length; j++) {
                                var attribute = attributes[j];
                                if (!(attribute["attribute_name"] in newAttributesName)) {
                                    newAttributesName[attribute["attribute_name"]] = [];
                                    newAttributes.push(attribute);
                                }
                                if (newAttributesName[attribute["attribute_name"]].indexOf(i) < 0)
                                    newAttributesName[attribute["attribute_name"]].push(i);
                            }
                            deviceType["device_type_config"] = [];
                        }
                        //2. get all original deviceTypes
                        this["GetDeviceTypes"](null, function (originalDeviceTypes) {
                            var originalDeviceTypesName = {}; //name->id
                            for (var i = 0; i < originalDeviceTypes.length; i++) {
                                originalDeviceTypesName[originalDeviceTypes[i]["device_type"]] = originalDeviceTypes[i]["device_type_id"];
                            }
                            //3. update all attributes
                            var aLength = newAttributes.length;
                            var aCount = 0;
                            onProcess(0.4, "Creating device attributes...");
                            for (var i = 0; i < aLength; i++) {
                                var attribute = newAttributes[i];
                                if (attribute["attribute_name"] in originalAttributesName)
                                    attribute["attribute_id"] = originalAttributesName[attribute["attribute_name"]];
                                else delete attribute["attribute_id"];
                                this["UpdateAttribute"](attribute, function (id) {
                                    if (id != null) {
                                        var indices = newAttributesName[attribute["attribute_name"]];
                                        for (var j = 0; j < indices.length; j++) {
                                            deviceTypes[indices[j]]["device_type_config"].push(id + "");
                                        }
                                    }
                                    aCount++;
                                } .bind(this)); //end of UpdateAttribute
                            }
                            //4. update all deviceTypes, when all attributes are updated
                            var fun1 = setInterval(function () {
                                if (aCount == aLength) {
                                    clearInterval(fun1);
                                    onProcess(0.5, "Creating device types...");
                                    var dtLength = deviceTypes.length;
                                    var dtCount = 0;
                                    for (var j = 0; j < dtLength; j++) {
                                        var deviceType = deviceTypes[j];
                                        if (deviceType["device_type"] in originalDeviceTypesName)
                                            deviceType["device_type_id"] = originalDeviceTypesName[deviceType["device_type"]];
                                        else delete deviceType["device_type_id"];
                                        this["UpdateDeviceType"](deviceType, function (deviceTypeId) {
                                            dtCount++;
                                        } .bind(this)); //end of UpdateDeviceType
                                    }
                                    //5. retrieve all deviceTypes again and build map, when all deviceTypes are updated 
                                    var fun2 = setInterval(function () {
                                        if (dtCount == dtLength) {
                                            clearInterval(fun2);
                                            onProcess(0.6, "Mapping device types and attributes...");
                                            this["GetDeviceTypes"](null, function (originalDeviceTypes) {
                                                var originalDeviceTypesName = {}; //name->pm_pic
                                                for (var i = 0; i < originalDeviceTypes.length; i++) {
                                                    originalDeviceTypesName[originalDeviceTypes[i]["device_type"]] = originalDeviceTypes[i]["pm_pic"];
                                                }
                                                //6. create devices and objects
                                                var devices = data["devices"];
                                                var objects = data["objects"];
                                                var deviceMap = {};
                                                var dLength = devices.length;
                                                var oLength = objects.length;
                                                var doLength = dLength + oLength;
                                                var doCount = 0;
                                                for (var k = 0; k < doLength; k++) {
                                                    var devobj = null, func = null;
                                                    if (k < dLength) {
                                                        if (k == 0) onProcess(0.7, "Creating devices...");
                                                        devobj = devices[k];
                                                        func = this["CreateDevice"].bind(this);
                                                    }
                                                    else {
                                                        if (k == dLength) onProcess(0.8, "Creating objects...");
                                                        devobj = objects[k - dLength];
                                                        func = this["CreateObject"].bind(this);
                                                    }
                                                    devobj["site_id"] = siteId;
                                                    func(devobj, function (devobjId) {
                                                        if (k < dLength) {
                                                            deviceMap[devobj["device_id"]] = devobjId;
                                                        }
                                                        doCount++;
                                                    } .bind(this)); //end of CreateDevice/CreateObject
                                                }
                                                //7. clear default profiles and add news
                                                var func3 = setInterval(function () {
                                                    if (doCount == doLength) {
                                                        clearInterval(func3);
                                                        onProcess(0.9, "Creating profiles...");
                                                        this["ClearProfilesOfSite"](siteId, function (res) {
                                                            var profiles = data["profiles"];
                                                            var pLength = profiles.length;
                                                            var pCount = 0;
                                                            for (var l = 0; l < pLength; l++) {
                                                                var profile = profiles[l];
                                                                profile["site_id"] = siteId;
                                                                this["CreateProfile"](profile, function (profileId) {
                                                                    //8. create virtual device
                                                                    for (var m = 0; m < profile["vd"].length; m++) {
                                                                        profile["vd"][m] = deviceMap[profile["vd"][m]];
                                                                    }
                                                                    this["SetDeviceIdsOfProfile"](profileId, profile["vd"], function (res) {
                                                                        //9. create personal views
                                                                        this["SetPersonalViewOfProfile"](profileId, profile["pv"], function (accessId) {
                                                                            pCount++;
                                                                            if (pCount == pLength) {
                                                                                onProcess(1.0, "Done!");
                                                                                onDone(true, { "id": siteId, "map": deviceMap });
                                                                            }
                                                                        } .bind(this)); //end of SetPersonalViewOfProfile
                                                                    } .bind(this)); //end of SetDeviceIdsOfProfiel
                                                                } .bind(this)); //end of CreateProfile 
                                                            }
                                                        } .bind(this)); //end of ClearProfilesOfSite
                                                    }
                                                } .bind(this), 100);
                                            } .bind(this)); //end of GetDeviceTypes
                                        }
                                    } .bind(this), 100);
                                }
                            } .bind(this), 100);
                        } .bind(this)); //end of GetDeviceTypes
                    } .bind(this)); //end of GetAllAttributes    
                } .bind(this)); //end of CreateSite
            } catch (e) {
                onDone(false, { "reason": e });
            }
        } .bind(this);
        reader["readAsArrayBuffer"](file);
    }
};