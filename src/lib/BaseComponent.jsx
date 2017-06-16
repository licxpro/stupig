var React = require('react');

class BaseComponent extends React.Component {
  constructor(props){
  	super(props);
  }
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
};

module.exports = BaseComponent;