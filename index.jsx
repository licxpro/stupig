var React = require('react');
var ReactDOM = require('react-dom');
var ListView = require('./components/ListView');
var listViewController = require('./controller/ListViewController');
 
ReactDOM.render(
  <ListView contorller = {listViewController} />,
  document.querySelector('#example')
);
