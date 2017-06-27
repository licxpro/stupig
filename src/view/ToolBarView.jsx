var React = require('react');
var BaseComponent  = require('../lib/BaseComponent.jsx');
var ButtonView = require('./ButtonView.jsx');
// var ToolBarView = React.createClass({
//   render: function() {
//     return <h1>Hello World！</h1>;
//   }
// });
class ToolBarView extends BaseComponent {
  constructor(props){
  	super(props);
  	this.addItem = this.addItem.bind(this);
  	this.itemClick = this.itemClick.bind(this);
  	this.state={items:[{id:1,data:'数据加载中...'}]};
  }
	 
	addItem (event) {
		console.log(event);
		console.log(this);
		this.props.contorller.sendAction({'actionName':'AddButtonClick','arguments':{name:'licx'},'tag':true,'sender':this});
	}
	itemClick(event){
		//
		console.log('item click');
		console.log(event.target);

		this.props.contorller.deleteItem(1);
	}
	render(){
	  return <div><ButtonView itemClick={this.itemClick} items={this.state.items} />
	  		<button  onClick={this.addItem}>addItem</button>
	  		</div>
	}
};

module.exports = ToolBarView;