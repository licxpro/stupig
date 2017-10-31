 
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
		/*
			actionHandler:{
				_uniqueId:
				controller:
				actionType:
			}
		*/
		/*
			table actionName
			//table actionHandler
			table actionName-actionHandler-relation
		*/
		this._dispatherIndex=[];		//索引
		let  startIndex = 0;
		this._uniqueId = function(){
			return startIndex++;
		}
	}
	getUniqueId(){
		return this._uniqueId();
	}
	regiester(actionName,actionHandler){
		//ext 额外标识
		if(!this._dispatherMapper[actionName]){
			this._dispatherMapper[actionName] = [];
		}
		let uniqueId = this.getUniqueId();
		let handler = {
			uniqueId:uniqueId,
			handler:actionHandler
		};
		this._dispatherMapper[actionName].push(handler);
		console.log("dispather");
		console.log(this._dispatherMapper);
		console.log("dispather");
		return uniqueId;
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
		listener[start][handler].handleAction(action,start);
	}
	next(action,index){
		
		this.dispather(action,index);
	}
};
let dispather = new Dispather();
module.exports = dispather;