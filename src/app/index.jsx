var React = require('react');
var ReactDom = require('react-dom');
var ToolBarView = require('../view/ToolBarView.jsx');
var ToolBarCtl 	= require('../controller/ToolBarCtl.js');


var toolBarCtl = new ToolBarCtl();
ReactDom.render(
    <ToolBarView contorller = {toolBarCtl} / > 
    ,document.getElementById('main')
);