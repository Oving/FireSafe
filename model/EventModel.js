var EventModel = function (conf)
{
	this.event_name = conf['event_name'];
	this.device_id = conf['device_id'];
	this.event_data = conf['event_data'];
	this.event_priority = conf['event_priority'];
	this.time_modified = conf['time_modified'];
};

EventModel.prototype = {
	fun1:function(){

	},
	fun2:function(){

	}
}