var AdditionModel = function (conf)
{
	this.Type = conf['Type'];
	this.Name = conf['Name'];
	this.View = conf['View'];
	////特殊属性
	this.Contents = [];
	this.ModelSrc = conf['Model'];
	this.Models = [];
	if(conf['ImgSrc'])
	this.ImgSrc = conf['ImgSrc'];
	if(conf['Smoke'])
	this.Smoke = conf['Smoke'];
	if(conf['Fire'])
	this.Fire = conf['Fire'];
};

AdditionModel.prototype = {
	OnClickAddModel:function(Jquery_li){
		var modelObj=this;
		Jquery_li.click(function(){
			AdditionModelController.AddModelProcess(modelObj);
		})
	},
	AddToContents:function(content){
		this.Contents = content;
	},
	AddToModel:function(model){
		this.Models.push(model);
	}
}