var React = require('react');
var MyButton = require('./MyButton');

var ListView = React.createClass({
	
	getInitialState:function(){
	  console.log(this.props);
	  //props.contorller.bundleView(this);
	  console.log("bundleView to controller");
	  console.log("initialState");
	  return {
	    items:[{id:1,data:'数据加载中...'}]
	  }
	},
	componentDidMount:function(){
	  this.props.contorller.bundleView(this);

	  console.log("mount component");
	},
	componentDidUpdate:function(){
	  console.log("update component");
	},
	componentWillUnmount:function(){
	  this.props.contorller.unbundleView(this);
	  console.log("dispose");
	},
	addItem: function (event) {
		console.log(event);
		this.props.contorller.sendAction({'actionName':'AddButtonClick','arguments':{name:'licx'},'tag':true,'sender':this});
	},
	itemClick:function(event){
		//
		console.log('item click');
		console.log(event.target);

		this.props.contorller.deleteItem(1);
	},
	render:function(){
	  return <div><MyButton itemClick={this.itemClick} items={this.state.items} />
	  		<button onClick={this.addItem}>addItem</button>
	  		</div>
	}
});

module.exports = ListView;