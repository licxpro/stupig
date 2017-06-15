var React  = require('react');
var ButtonView = require('./ButtonView.jsx');
// var ToolBarView = React.createClass({
//   render: function() {
//     return <h1>Hello World！</h1>;
//   }
// });
class ToolBarView extends React.Component {
    
	componentDidMount(){
	  this.props.contorller.bundleView(this);
	  console.log("mount component");
	}
	componentDidUpdate(){
	  console.log("update component");
	}
	componentWillUnmount(){
	  this.props.contorller.unbundleView(this);
	  console.log("dispose");
	}
	addItem (event) {
		console.log(event);
		this.props.contorller.sendAction({'actionName':'AddButtonClick','arguments':{name:'licx'},'tag':true,'sender':this});
	}
	itemClick(event){
		//
		console.log('item click');
		console.log(event.target);

		this.props.contorller.deleteItem(1);
	}
	render(){
	  return <div><ButtonView />
	  		<button onClick={this.addItem}>addItem</button>
	  		</div>
	}
};

module.exports = ToolBarView;