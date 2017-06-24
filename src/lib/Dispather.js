 
/*
	{
		actionName:{
			'before':[listener1,listener2],
			'action':[listener3,listener4],
			'after' :[listener1,listener3]
	}
*/
class Dispather{
	
	constructor(){

		this._dispatherMapper={};  	//消息分发映射图
		this._dispatherIndex=[];		//索引
	}	
	regiester(actionName,actionHandler){
		if(!this._dispatherMapper[actionName]){
			this._dispatherMapper[actionName] = [];
		}
		this._dispatherMapper[actionName].push(actionHandler);
		console.log("dispather");
		console.log(this._dispatherMapper);
		console.log("dispather");
	}
	dispather(action,index){
		/*
		action{actionName:'',arguments:'',sender:''}
		*/
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
	}
	next(action,index){
		
		this.dispather(action,index);
	}
};
let dispather = new Dispather();
module.exports = dispather;