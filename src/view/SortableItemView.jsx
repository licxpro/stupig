var React = require('react');

class SortableItemView extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let item = this.props.item;
    let click = this.props.itemClick;
		return <div class="ui-sortable-item" onClick={click.bind(this)}><span>{item.name}</span></div>;
	}
}