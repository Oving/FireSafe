var DeviceModel = function (conf)
{
	this.device_name = conf['device_name'];
	this.device_id = conf['device_id'];
	this.device_type = conf['device_type'];
	this.device_position = conf['device_position'];
	this.mark_source = conf['mark_source'];
	this.mark_type = conf['mark_type'];
	this.rotate = conf['rotate'];
	this.mark_scalex = conf['mark_scalex'];
	this.mark_volume=conf['mark_volume'];
	this.mark_line=conf['mark_line'];
	this.mark_globalview=conf['mark_globalview'];
	this.Placemark="";
	this.Volume="";
	this.Line="";
	this.Model="";
	//以下为特有属性
	this.device_data=conf['device_data'];
};

DeviceModel.prototype = {
	addPlacemark:function(pm){
		this.Placemark = pm;
	},
	addVolume:function(volume){
		this.Volume = volume;
	},
	addLine:function(line){
		this.Line = line;
	},
	addModel:function(model){
		this.Model = model;
	}
}