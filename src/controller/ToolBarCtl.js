//var DefaultView = require('../view/ToolBarView.js');
var BaseController = require('../lib/BaseController.js');
var buttonList = require('../model/ToolbarModel.js');
class ToolBarCtl extends BaseController{
	constructor(props){
		super(props);
		
	}
	regiester(){
		//注册机制
		var _this = this;
    	this.dispather.regiester('AddButtonClick',this);
    	this.addListener('AddButtonClick',function(action,index){
    		_this.onButtonClick(action,index);
    	});
    }
    onButtonClick(action,index){
    	 
        /*
        
        */
        //action.sender 可以单独更新
    	//action.sender.setState({age:111});

        //或着this.view
        /*
        var views = this.getViews();
        for(var i in views){
            views[i].setState({age:111});
        }
        */
        
        buttonList.addOneItem('licx');
         
        this.updateView();
        //ch:执行完毕后通知执行下一个
        //eg:after you have finish your job ,you must dispather action to the next 
        this.dispather.next(action,index+1);
    }
    deleteItem(id){
        buttonList.deleteOneData(id);
        this.updateView();
    }
    updateView(){
        //所有的通知一块更新
        var items = buttonList.getItems();
        var view = this.getView();
         console.log(items);
        
        view.setState({items:items});
        
    }
};
module.exports = ToolBarCtl;