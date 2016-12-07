var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dispather = require('./Dispather');
/*
	Action Structrue
	{
		actionName:
		arguments:
		sender:
	}
*/
var BaseController = assign({},EventEmitter.prototype, {
    _view:[],
    initialize:function(){
    	this.dispather = dispather;
    	this.regiester();
	},
	regiester:function(){
		//注册机制
    	
    },
    getViews:function(){
        return this._view;
    },
	bundleView:function(view){
        //将view绑定到controller
        var flag = true;
        for(var i in this._view){
            if(this._view[i] == view){
                flag = false;
            }
        }
      	if(flag){
            this._view.push(view);
        }
    },
    unbundleView:function(view){
        //当view被卸载的时候从这里解绑
        for(var i in this._view){
            if(this._view[i] == view){
                delete this._view[i];
            }
        }
    },
    bundleDispather:function(dispather){
    	this.dispather = dispather;
    },
	dispose:function(){
      console.log("dispose");
    },
    addListener: function(eventName,callback) {
	  this.on(eventName, callback);
	},
	removeListener: function(eventName,callback) {
	  this.removeListener(eventName, callback);
	},
    
    handleAction:function(action,index){
    	var index = index;
    	this.emit(action.actionName,action,index);
    },
    sendAction:function(action){
    	this.dispather.dispather(action);
    }
});

module.exports = BaseController;