var assign = require('object-assign');
/*
	{
		actionName:{
			'before':[listener1,listener2],
			'action':[listener3,listener4],
			'after' :[listener1,listener3]
	}
*/
var Dispather = assign({},{
	_dispatherMapper:{},  	//消息分发映射图
	_dispatherIndex:[],		//索引
	init:function(){

	},	
	regiester:function(actionName,actionHandler){
		if(!this._dispatherMapper[actionName]){
			this._dispatherMapper[actionName] = [];
		}
		this._dispatherMapper[actionName].push(actionHandler);
	},
	dispather:function(action,index){
		//index 用于从 actionHandler 手动触发下一个
		var mapper = this._dispatherMapper;
		var listener = mapper[action.actionName];
		var start = 0;
		if(index){
			start = index;
		}
	 
		if(!listener||!listener[start]){
			return false;
		}
		listener[start].handleAction(action,start);
	},
	next:function(action,index){
		
		this.dispather(action,index);
	}
});
module.exports = Dispather;