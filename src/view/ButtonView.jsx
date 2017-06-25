var React = require('react');
/*
var ButtonView = function(props) {
  var items = props.items;
  var click = props.itemClick;
  var itemHtml = items.map(function (listItem, i) {
    return <li onClick={click} data-id={listItem.id} key={i}>{listItem.data}</li>;
  });

  return <div>
    <ul>{itemHtml}</ul>
  </div>;
};
*/
class ButtonView extends React.Component {
  constructor(props){
    super(props);
    console.log("buttongView");
    console.log(props);
    console.log("buttongview");
    let items = props.items;
    let click = props.itemClick;
    console.log(items);
    let itemHtml = items.map(function (listItem, i) {
      return <li onClick={click} data-id={listItem.id} key={i}>{listItem.data}</li>;
    });
    this.render(itemHtml);
  }
	render(itemHtml){
	  return <div>{itemHtml}</div>;
	}
};
module.exports = ButtonView;