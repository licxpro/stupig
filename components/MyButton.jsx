var React = require('react');

var MyButton = function(props) {
  var items = props.items;
  var click = props.itemClick;
  var itemHtml = items.map(function (listItem, i) {
    return <li onClick={click} data-id={listItem.id} key={i}>{listItem.data}</li>;
  });

  return <div>
    <ul>{itemHtml}</ul>
  </div>;
};

module.exports = MyButton;
