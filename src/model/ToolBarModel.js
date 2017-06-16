

//数据关联这里有问题，如何确保view移除的时候这里的数据也跟着消失
/*
	解决办法，新增一条数据在这里申请一条，做关联
*/
var ButtonList = {
	store:[],
	init:function(){
		this.count = (function(){
			var i=0;
			return function(){
				return i++;
			}
		})();
	},
	addOneItem:function(data){
		this.store.push(this.createOneData(data));
	},
	createOneData:function(data){
		var count = this.count();
		return {id:count,data:data+count};
	},
	deleteOneData:function(id){
		for(var i in this.store){
			if(this.store[i].id==id){
				delete this.store[i];
			}
		}
	},
	getItems:function(){
		return this.store;
	}
}
ButtonList.init();
module.exports = ButtonList;