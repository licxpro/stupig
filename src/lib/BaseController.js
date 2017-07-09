var EventEmitter = require('events').EventEmitter;
var dispather = require('./Dispather');
/*
	Action Structrue
	{
		actionName:
		arguments:
		sender:
	}
*/
class BaseController extends EventEmitter {
    
    constructor(props){
        super();
        this._view = null;
    	this.dispather = dispather;
        this.regiester();
	}
    initialize(){

    }
	regiester(){
		//注册机制
    	
    }
    getView(){

        return this._view;
    }
	bundleView(view){
        //将view绑定到controller
        
        this._view = view;
        console.log('initialize in base');
        this.initialize();
    }
    unbundleView(view){
        //当view被卸载的时候从这里解绑
        // for(var i in this._view){
        //     if(this._view[i] == view){
        //         delete this._view[i];
        //     }
        // }
        this._view = null;
    }
    bundleDispather(dispather){
    	this.dispather = dispather;
    }
	dispose(){
      console.log("dispose");
    }
    addListener(eventName,callback) {
	  this.on(eventName, callback);
	}
	removeListener(eventName,callback) {
	  this.off(eventName, callback);
	}
    
    handleAction(action,index){
    	var index = index;
    	this.emit(action.actionName,action,index);
    }
    sendAction(action){
    	this.dispather.dispather(action);
    }
};

module.exports = BaseController;