webpackJsonp([0],{

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//var DefaultView = require('../view/ToolBarView.js');\nvar BaseController = __webpack_require__(52);\nvar buttonList = __webpack_require__(89);\n\nvar ToolBarCtl = function (_BaseController) {\n    _inherits(ToolBarCtl, _BaseController);\n\n    function ToolBarCtl(props) {\n        _classCallCheck(this, ToolBarCtl);\n\n        var _this2 = _possibleConstructorReturn(this, (ToolBarCtl.__proto__ || Object.getPrototypeOf(ToolBarCtl)).call(this, props));\n\n        _this2.regiester();\n        return _this2;\n    }\n\n    _createClass(ToolBarCtl, [{\n        key: 'regiester',\n        value: function regiester() {\n            //注册机制\n            var _this = this;\n            this.dispather.regiester('AddButtonClick', this);\n            this.addListener('AddButtonClick', function (action, index) {\n                _this.onButtonClick(action, index);\n            });\n        }\n    }, {\n        key: 'onButtonClick',\n        value: function onButtonClick(action, index) {\n\n            /*\r\n            \r\n            */\n            //action.sender 可以单独更新\n            //action.sender.setState({age:111});\n\n            //或着this.view\n            /*\r\n            var views = this.getViews();\r\n            for(var i in views){\r\n                views[i].setState({age:111});\r\n            }\r\n            */\n\n            buttonList.addOneItem('licx');\n\n            this.updateView();\n            //ch:执行完毕后通知执行下一个\n            //eg:after you have finish your job ,you must dispather action to the next \n            this.dispather.next(action, index + 1);\n        }\n    }, {\n        key: 'deleteItem',\n        value: function deleteItem(id) {\n            buttonList.deleteOneData(id);\n            this.updateView();\n        }\n    }, {\n        key: 'updateView',\n        value: function updateView() {\n            //所有的通知一块更新\n            var items = buttonList.getItems();\n            var views = this.getViews();\n            console.log(views);\n            views.map(function (view, i) {\n                view.setState({ items: items });\n            });\n        }\n    }]);\n\n    return ToolBarCtl;\n}(BaseController);\n\n;\nmodule.exports = ToolBarCtl;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9Ub29sQmFyQ3RsLmpzPzg4MTgiXSwibmFtZXMiOlsiQmFzZUNvbnRyb2xsZXIiLCJyZXF1aXJlIiwiYnV0dG9uTGlzdCIsIlRvb2xCYXJDdGwiLCJwcm9wcyIsInJlZ2llc3RlciIsIl90aGlzIiwiZGlzcGF0aGVyIiwiYWRkTGlzdGVuZXIiLCJhY3Rpb24iLCJpbmRleCIsIm9uQnV0dG9uQ2xpY2siLCJhZGRPbmVJdGVtIiwidXBkYXRlVmlldyIsIm5leHQiLCJpZCIsImRlbGV0ZU9uZURhdGEiLCJpdGVtcyIsImdldEl0ZW1zIiwidmlld3MiLCJnZXRWaWV3cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ2aWV3IiwiaSIsInNldFN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBSUEsaUJBQWlCLG1CQUFBQyxDQUFRLEVBQVIsQ0FBckI7QUFDQSxJQUFJQyxhQUFhLG1CQUFBRCxDQUFRLEVBQVIsQ0FBakI7O0lBQ01FLFU7OztBQUNMLHdCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkhBQ1hBLEtBRFc7O0FBRWpCLGVBQUtDLFNBQUw7QUFGaUI7QUFHakI7Ozs7b0NBQ1U7QUFDVjtBQUNBLGdCQUFJQyxRQUFRLElBQVo7QUFDRyxpQkFBS0MsU0FBTCxDQUFlRixTQUFmLENBQXlCLGdCQUF6QixFQUEwQyxJQUExQztBQUNBLGlCQUFLRyxXQUFMLENBQWlCLGdCQUFqQixFQUFrQyxVQUFTQyxNQUFULEVBQWdCQyxLQUFoQixFQUFzQjtBQUN2REosc0JBQU1LLGFBQU4sQ0FBb0JGLE1BQXBCLEVBQTJCQyxLQUEzQjtBQUNBLGFBRkQ7QUFHQTs7O3NDQUNhRCxNLEVBQU9DLEssRUFBTTs7QUFFdkI7OztBQUdBO0FBQ0g7O0FBRUc7QUFDQTs7Ozs7OztBQU9BUix1QkFBV1UsVUFBWCxDQUFzQixNQUF0Qjs7QUFFQSxpQkFBS0MsVUFBTDtBQUNBO0FBQ0E7QUFDQSxpQkFBS04sU0FBTCxDQUFlTyxJQUFmLENBQW9CTCxNQUFwQixFQUEyQkMsUUFBTSxDQUFqQztBQUNIOzs7bUNBQ1VLLEUsRUFBRztBQUNWYix1QkFBV2MsYUFBWCxDQUF5QkQsRUFBekI7QUFDQSxpQkFBS0YsVUFBTDtBQUNIOzs7cUNBQ1c7QUFDUjtBQUNBLGdCQUFJSSxRQUFRZixXQUFXZ0IsUUFBWCxFQUFaO0FBQ0EsZ0JBQUlDLFFBQVEsS0FBS0MsUUFBTCxFQUFaO0FBQ0NDLG9CQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDREEsa0JBQU1JLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWNDLENBQWQsRUFBZ0I7QUFDdEJELHFCQUFLRSxRQUFMLENBQWMsRUFBQ1QsT0FBTUEsS0FBUCxFQUFkO0FBQ0gsYUFGRDtBQUdIOzs7O0VBaERvQmpCLGM7O0FBaUR4QjtBQUNEMkIsT0FBT0MsT0FBUCxHQUFpQnpCLFVBQWpCIiwiZmlsZSI6Ijg2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy92YXIgRGVmYXVsdFZpZXcgPSByZXF1aXJlKCcuLi92aWV3L1Rvb2xCYXJWaWV3LmpzJyk7XHJcbnZhciBCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uL2xpYi9CYXNlQ29udHJvbGxlci5qcycpO1xyXG52YXIgYnV0dG9uTGlzdCA9IHJlcXVpcmUoJy4uL21vZGVsL1Rvb2xiYXJNb2RlbC5qcycpO1xyXG5jbGFzcyBUb29sQmFyQ3RsIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXJ7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5yZWdpZXN0ZXIoKTtcclxuXHR9XHJcblx0cmVnaWVzdGVyKCl7XHJcblx0XHQvL+azqOWGjOacuuWItlxyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuICAgIFx0dGhpcy5kaXNwYXRoZXIucmVnaWVzdGVyKCdBZGRCdXR0b25DbGljaycsdGhpcyk7XHJcbiAgICBcdHRoaXMuYWRkTGlzdGVuZXIoJ0FkZEJ1dHRvbkNsaWNrJyxmdW5jdGlvbihhY3Rpb24saW5kZXgpe1xyXG4gICAgXHRcdF90aGlzLm9uQnV0dG9uQ2xpY2soYWN0aW9uLGluZGV4KTtcclxuICAgIFx0fSk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKGFjdGlvbixpbmRleCl7XHJcbiAgICBcdCBcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9hY3Rpb24uc2VuZGVyIOWPr+S7peWNleeLrOabtOaWsFxyXG4gICAgXHQvL2FjdGlvbi5zZW5kZXIuc2V0U3RhdGUoe2FnZToxMTF9KTtcclxuXHJcbiAgICAgICAgLy/miJbnnYB0aGlzLnZpZXdcclxuICAgICAgICAvKlxyXG4gICAgICAgIHZhciB2aWV3cyA9IHRoaXMuZ2V0Vmlld3MoKTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdmlld3Mpe1xyXG4gICAgICAgICAgICB2aWV3c1tpXS5zZXRTdGF0ZSh7YWdlOjExMX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbkxpc3QuYWRkT25lSXRlbSgnbGljeCcpO1xyXG4gICAgICAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgICAgICAvL2NoOuaJp+ihjOWujOavleWQjumAmuefpeaJp+ihjOS4i+S4gOS4qlxyXG4gICAgICAgIC8vZWc6YWZ0ZXIgeW91IGhhdmUgZmluaXNoIHlvdXIgam9iICx5b3UgbXVzdCBkaXNwYXRoZXIgYWN0aW9uIHRvIHRoZSBuZXh0IFxyXG4gICAgICAgIHRoaXMuZGlzcGF0aGVyLm5leHQoYWN0aW9uLGluZGV4KzEpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlSXRlbShpZCl7XHJcbiAgICAgICAgYnV0dG9uTGlzdC5kZWxldGVPbmVEYXRhKGlkKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVZpZXcoKXtcclxuICAgICAgICAvL+aJgOacieeahOmAmuefpeS4gOWdl+abtOaWsFxyXG4gICAgICAgIHZhciBpdGVtcyA9IGJ1dHRvbkxpc3QuZ2V0SXRlbXMoKTtcclxuICAgICAgICB2YXIgdmlld3MgPSB0aGlzLmdldFZpZXdzKCk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHZpZXdzKTtcclxuICAgICAgICB2aWV3cy5tYXAoZnVuY3Rpb24odmlldyxpKXtcclxuICAgICAgICAgICAgdmlldy5zZXRTdGF0ZSh7aXRlbXM6aXRlbXN9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBUb29sQmFyQ3RsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cm9sbGVyL1Rvb2xCYXJDdGwuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(16);\nvar BaseComponent = __webpack_require__(51);\nvar ButtonView = __webpack_require__(90);\n// var ToolBarView = React.createClass({\n//   render: function() {\n//     return <h1>Hello World！</h1>;\n//   }\n// });\n\nvar ToolBarView = function (_BaseComponent) {\n\t_inherits(ToolBarView, _BaseComponent);\n\n\tfunction ToolBarView(props) {\n\t\t_classCallCheck(this, ToolBarView);\n\n\t\tvar _this = _possibleConstructorReturn(this, (ToolBarView.__proto__ || Object.getPrototypeOf(ToolBarView)).call(this, props));\n\n\t\t_this.addItem = _this.addItem.bind(_this);\n\t\t_this.itemClick = _this.itemClick.bind(_this);\n\t\t_this.items = [{ id: 1, data: '数据加载中...' }];\n\t\treturn _this;\n\t}\n\n\t_createClass(ToolBarView, [{\n\t\tkey: 'addItem',\n\t\tvalue: function addItem(event) {\n\t\t\tconsole.log(event);\n\t\t\tconsole.log(this);\n\t\t\tthis.props.contorller.sendAction({ 'actionName': 'AddButtonClick', 'arguments': { name: 'licx' }, 'tag': true, 'sender': this }, 0);\n\t\t}\n\t}, {\n\t\tkey: 'itemClick',\n\t\tvalue: function itemClick(event) {\n\t\t\t//\n\t\t\tconsole.log('item click');\n\t\t\tconsole.log(event.target);\n\n\t\t\tthis.props.contorller.deleteItem(1);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(ButtonView, { itemClick: this.itemClick, items: this.items }),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: this.addItem },\n\t\t\t\t\t'addItem'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn ToolBarView;\n}(BaseComponent);\n\n;\n\nmodule.exports = ToolBarView;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9Ub29sQmFyVmlldy5qc3g/MmUwMiJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJCYXNlQ29tcG9uZW50IiwiQnV0dG9uVmlldyIsIlRvb2xCYXJWaWV3IiwicHJvcHMiLCJhZGRJdGVtIiwiYmluZCIsIml0ZW1DbGljayIsIml0ZW1zIiwiaWQiLCJkYXRhIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY29udG9ybGxlciIsInNlbmRBY3Rpb24iLCJuYW1lIiwidGFyZ2V0IiwiZGVsZXRlSXRlbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUlDLGdCQUFpQixtQkFBQUQsQ0FBUSxFQUFSLENBQXJCO0FBQ0EsSUFBSUUsYUFBYSxtQkFBQUYsQ0FBUSxFQUFSLENBQWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUcsVzs7O0FBQ0osc0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsUUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYixPQUFmO0FBQ0EsUUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVELElBQWYsT0FBakI7QUFDQSxRQUFLRSxLQUFMLEdBQVcsQ0FBQyxFQUFDQyxJQUFHLENBQUosRUFBTUMsTUFBSyxVQUFYLEVBQUQsQ0FBWDtBQUppQjtBQUtqQjs7OzswQkFFT0MsSyxFQUFPO0FBQ2ZDLFdBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBQyxXQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLFFBQUtULEtBQUwsQ0FBV1UsVUFBWCxDQUFzQkMsVUFBdEIsQ0FBaUMsRUFBQyxjQUFhLGdCQUFkLEVBQStCLGFBQVksRUFBQ0MsTUFBSyxNQUFOLEVBQTNDLEVBQXlELE9BQU0sSUFBL0QsRUFBb0UsVUFBUyxJQUE3RSxFQUFqQyxFQUFvSCxDQUFwSDtBQUNBOzs7NEJBQ1NMLEssRUFBTTtBQUNmO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0FELFdBQVFDLEdBQVIsQ0FBWUYsTUFBTU0sTUFBbEI7O0FBRUEsUUFBS2IsS0FBTCxDQUFXVSxVQUFYLENBQXNCSSxVQUF0QixDQUFpQyxDQUFqQztBQUNBOzs7MkJBQ087QUFDTixVQUFPO0FBQUE7QUFBQTtBQUFLLHdCQUFDLFVBQUQsSUFBWSxXQUFXLEtBQUtYLFNBQTVCLEVBQXVDLE9BQU8sS0FBS0MsS0FBbkQsR0FBTDtBQUNMO0FBQUE7QUFBQSxPQUFRLFNBQVMsS0FBS0gsT0FBdEI7QUFBQTtBQUFBO0FBREssSUFBUDtBQUdEOzs7O0VBeEJ3QkosYTs7QUF5QnpCOztBQUVEa0IsT0FBT0MsT0FBUCxHQUFpQmpCLFdBQWpCIiwiZmlsZSI6Ijg3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIEJhc2VDb21wb25lbnQgID0gcmVxdWlyZSgnLi4vbGliL0Jhc2VDb21wb25lbnQuanN4Jyk7XHJcbnZhciBCdXR0b25WaWV3ID0gcmVxdWlyZSgnLi9CdXR0b25WaWV3LmpzeCcpO1xyXG4vLyB2YXIgVG9vbEJhclZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbi8vICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuLy8gICAgIHJldHVybiA8aDE+SGVsbG8gV29ybGTvvIE8L2gxPjtcclxuLy8gICB9XHJcbi8vIH0pO1xyXG5jbGFzcyBUb29sQmFyVmlldyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICBcdHN1cGVyKHByb3BzKTtcclxuICBcdHRoaXMuYWRkSXRlbSA9IHRoaXMuYWRkSXRlbS5iaW5kKHRoaXMpO1xyXG4gIFx0dGhpcy5pdGVtQ2xpY2sgPSB0aGlzLml0ZW1DbGljay5iaW5kKHRoaXMpO1xyXG4gIFx0dGhpcy5pdGVtcz1be2lkOjEsZGF0YTon5pWw5o2u5Yqg6L295LitLi4uJ31dO1xyXG4gIH1cclxuXHQgXHJcblx0YWRkSXRlbSAoZXZlbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cdFx0dGhpcy5wcm9wcy5jb250b3JsbGVyLnNlbmRBY3Rpb24oeydhY3Rpb25OYW1lJzonQWRkQnV0dG9uQ2xpY2snLCdhcmd1bWVudHMnOntuYW1lOidsaWN4J30sJ3RhZyc6dHJ1ZSwnc2VuZGVyJzp0aGlzfSwwKTtcclxuXHR9XHJcblx0aXRlbUNsaWNrKGV2ZW50KXtcclxuXHRcdC8vXHJcblx0XHRjb25zb2xlLmxvZygnaXRlbSBjbGljaycpO1xyXG5cdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuXHJcblx0XHR0aGlzLnByb3BzLmNvbnRvcmxsZXIuZGVsZXRlSXRlbSgxKTtcclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0ICByZXR1cm4gPGRpdj48QnV0dG9uVmlldyBpdGVtQ2xpY2s9e3RoaXMuaXRlbUNsaWNrfSBpdGVtcz17dGhpcy5pdGVtc30gLz5cclxuXHQgIFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkSXRlbX0+YWRkSXRlbTwvYnV0dG9uPlxyXG5cdCAgXHRcdDwvZGl2PlxyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9vbEJhclZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvVG9vbEJhclZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar React = __webpack_require__(16);\nvar ReactDom = __webpack_require__(33);\nvar ToolBarView = __webpack_require__(87);\nvar ToolBarCtl = __webpack_require__(86);\n\nvar toolBarCtl = new ToolBarCtl();\nReactDom.render(React.createElement(ToolBarView, { contorller: toolBarCtl }), document.getElementById('main'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmpzeD9jODBkIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RG9tIiwiVG9vbEJhclZpZXciLCJUb29sQmFyQ3RsIiwidG9vbEJhckN0bCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7QUFDQSxJQUFJQyxXQUFXLG1CQUFBRCxDQUFRLEVBQVIsQ0FBZjtBQUNBLElBQUlFLGNBQWMsbUJBQUFGLENBQVEsRUFBUixDQUFsQjtBQUNBLElBQUlHLGFBQWMsbUJBQUFILENBQVEsRUFBUixDQUFsQjs7QUFHQSxJQUFJSSxhQUFhLElBQUlELFVBQUosRUFBakI7QUFDQUYsU0FBU0ksTUFBVCxDQUNJLG9CQUFDLFdBQUQsSUFBYSxZQUFjRCxVQUEzQixHQURKLEVBRUtFLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGTCIsImZpbGUiOiI4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG52YXIgVG9vbEJhclZpZXcgPSByZXF1aXJlKCcuLi92aWV3L1Rvb2xCYXJWaWV3LmpzeCcpO1xyXG52YXIgVG9vbEJhckN0bCBcdD0gcmVxdWlyZSgnLi4vY29udHJvbGxlci9Ub29sQmFyQ3RsLmpzJyk7XHJcblxyXG5cclxudmFyIHRvb2xCYXJDdGwgPSBuZXcgVG9vbEJhckN0bCgpO1xyXG5SZWFjdERvbS5yZW5kZXIoXHJcbiAgICA8VG9vbEJhclZpZXcgY29udG9ybGxlciA9IHt0b29sQmFyQ3RsfSAvID4gXHJcbiAgICAsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXguanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//数据关联这里有问题，如何确保view移除的时候这里的数据也跟着消失\n/*\r\n\t解决办法，新增一条数据在这里申请一条，做关联\r\n*/\nvar ButtonList = {\n\tstore: [],\n\tinit: function init() {\n\t\tthis.count = function () {\n\t\t\tvar i = 0;\n\t\t\treturn function () {\n\t\t\t\treturn i++;\n\t\t\t};\n\t\t}();\n\t},\n\taddOneItem: function addOneItem(data) {\n\t\tthis.store.push(this.createOneData(data));\n\t},\n\tcreateOneData: function createOneData(data) {\n\t\tvar count = this.count();\n\t\treturn { id: count, data: data + count };\n\t},\n\tdeleteOneData: function deleteOneData(id) {\n\t\tfor (var i in this.store) {\n\t\t\tif (this.store[i].id == id) {\n\t\t\t\tdelete this.store[i];\n\t\t\t}\n\t\t}\n\t},\n\tgetItems: function getItems() {\n\t\treturn this.store;\n\t}\n};\nButtonList.init();\nmodule.exports = ButtonList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVG9vbGJhck1vZGVsLmpzPzZhYjIiXSwibmFtZXMiOlsiQnV0dG9uTGlzdCIsInN0b3JlIiwiaW5pdCIsImNvdW50IiwiaSIsImFkZE9uZUl0ZW0iLCJkYXRhIiwicHVzaCIsImNyZWF0ZU9uZURhdGEiLCJpZCIsImRlbGV0ZU9uZURhdGEiLCJnZXRJdGVtcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQTs7O0FBR0EsSUFBSUEsYUFBYTtBQUNoQkMsUUFBTSxFQURVO0FBRWhCQyxPQUFLLGdCQUFVO0FBQ2QsT0FBS0MsS0FBTCxHQUFjLFlBQVU7QUFDdkIsT0FBSUMsSUFBRSxDQUFOO0FBQ0EsVUFBTyxZQUFVO0FBQ2hCLFdBQU9BLEdBQVA7QUFDQSxJQUZEO0FBR0EsR0FMWSxFQUFiO0FBTUEsRUFUZTtBQVVoQkMsYUFBVyxvQkFBU0MsSUFBVCxFQUFjO0FBQ3hCLE9BQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQixLQUFLQyxhQUFMLENBQW1CRixJQUFuQixDQUFoQjtBQUNBLEVBWmU7QUFhaEJFLGdCQUFjLHVCQUFTRixJQUFULEVBQWM7QUFDM0IsTUFBSUgsUUFBUSxLQUFLQSxLQUFMLEVBQVo7QUFDQSxTQUFPLEVBQUNNLElBQUdOLEtBQUosRUFBVUcsTUFBS0EsT0FBS0gsS0FBcEIsRUFBUDtBQUNBLEVBaEJlO0FBaUJoQk8sZ0JBQWMsdUJBQVNELEVBQVQsRUFBWTtBQUN6QixPQUFJLElBQUlMLENBQVIsSUFBYSxLQUFLSCxLQUFsQixFQUF3QjtBQUN2QixPQUFHLEtBQUtBLEtBQUwsQ0FBV0csQ0FBWCxFQUFjSyxFQUFkLElBQWtCQSxFQUFyQixFQUF3QjtBQUN2QixXQUFPLEtBQUtSLEtBQUwsQ0FBV0csQ0FBWCxDQUFQO0FBQ0E7QUFDRDtBQUNELEVBdkJlO0FBd0JoQk8sV0FBUyxvQkFBVTtBQUNsQixTQUFPLEtBQUtWLEtBQVo7QUFDQTtBQTFCZSxDQUFqQjtBQTRCQUQsV0FBV0UsSUFBWDtBQUNBVSxPQUFPQyxPQUFQLEdBQWlCYixVQUFqQiIsImZpbGUiOiI4OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLy/mlbDmja7lhbPogZTov5nph4zmnInpl67popjvvIzlpoLkvZXnoa7kv512aWV356e76Zmk55qE5pe25YCZ6L+Z6YeM55qE5pWw5o2u5Lmf6Lef552A5raI5aSxXHJcbi8qXHJcblx06Kej5Yaz5Yqe5rOV77yM5paw5aKe5LiA5p2h5pWw5o2u5Zyo6L+Z6YeM55Sz6K+35LiA5p2h77yM5YGa5YWz6IGUXHJcbiovXHJcbnZhciBCdXR0b25MaXN0ID0ge1xyXG5cdHN0b3JlOltdLFxyXG5cdGluaXQ6ZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuY291bnQgPSAoZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGk9MDtcclxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0cmV0dXJuIGkrKztcclxuXHRcdFx0fVxyXG5cdFx0fSkoKTtcclxuXHR9LFxyXG5cdGFkZE9uZUl0ZW06ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLnN0b3JlLnB1c2godGhpcy5jcmVhdGVPbmVEYXRhKGRhdGEpKTtcclxuXHR9LFxyXG5cdGNyZWF0ZU9uZURhdGE6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR2YXIgY291bnQgPSB0aGlzLmNvdW50KCk7XHJcblx0XHRyZXR1cm4ge2lkOmNvdW50LGRhdGE6ZGF0YStjb3VudH07XHJcblx0fSxcclxuXHRkZWxldGVPbmVEYXRhOmZ1bmN0aW9uKGlkKXtcclxuXHRcdGZvcih2YXIgaSBpbiB0aGlzLnN0b3JlKXtcclxuXHRcdFx0aWYodGhpcy5zdG9yZVtpXS5pZD09aWQpe1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnN0b3JlW2ldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRnZXRJdGVtczpmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmU7XHJcblx0fVxyXG59XHJcbkJ1dHRvbkxpc3QuaW5pdCgpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbkxpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVsL1Rvb2xiYXJNb2RlbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(16);\n/*\r\nvar ButtonView = function(props) {\r\n  var items = props.items;\r\n  var click = props.itemClick;\r\n  var itemHtml = items.map(function (listItem, i) {\r\n    return <li onClick={click} data-id={listItem.id} key={i}>{listItem.data}</li>;\r\n  });\r\n\r\n  return <div>\r\n    <ul>{itemHtml}</ul>\r\n  </div>;\r\n};\r\n*/\n\nvar ButtonView = function (_React$Component) {\n  _inherits(ButtonView, _React$Component);\n\n  function ButtonView(props) {\n    _classCallCheck(this, ButtonView);\n\n    return _possibleConstructorReturn(this, (ButtonView.__proto__ || Object.getPrototypeOf(ButtonView)).call(this, props));\n  }\n\n  _createClass(ButtonView, [{\n    key: 'render',\n    value: function render() {\n      var items = this.props.items;\n      var click = this.props.itemClick;\n      var itemHtml = items.map(function (listItem, i) {\n        return React.createElement(\n          'li',\n          { onClick: click, 'data-id': listItem.id, key: i },\n          listItem.data\n        );\n      });\n      return React.createElement(\n        'div',\n        null,\n        itemHtml\n      );\n    }\n  }]);\n\n  return ButtonView;\n}(React.Component);\n\n;\nmodule.exports = ButtonView;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9CdXR0b25WaWV3LmpzeD8zNDA3Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIkJ1dHRvblZpZXciLCJwcm9wcyIsIml0ZW1zIiwiY2xpY2siLCJpdGVtQ2xpY2siLCJpdGVtSHRtbCIsIm1hcCIsImxpc3RJdGVtIiwiaSIsImlkIiwiZGF0YSIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBOzs7Ozs7Ozs7Ozs7OztJQWFNQyxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG1IQUNWQSxLQURVO0FBRWpCOzs7OzZCQUNNO0FBQ0wsVUFBSUMsUUFBUSxLQUFLRCxLQUFMLENBQVdDLEtBQXZCO0FBQ0EsVUFBSUMsUUFBUSxLQUFLRixLQUFMLENBQVdHLFNBQXZCO0FBQ0EsVUFBSUMsV0FBV0gsTUFBTUksR0FBTixDQUFVLFVBQVVDLFFBQVYsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzlDLGVBQU87QUFBQTtBQUFBLFlBQUksU0FBU0wsS0FBYixFQUFvQixXQUFTSSxTQUFTRSxFQUF0QyxFQUEwQyxLQUFLRCxDQUEvQztBQUFtREQsbUJBQVNHO0FBQTVELFNBQVA7QUFDRCxPQUZjLENBQWY7QUFHRCxhQUFPO0FBQUE7QUFBQTtBQUFNTDtBQUFOLE9BQVA7QUFDRDs7OztFQVh1QlAsTUFBTWEsUzs7QUFZOUI7QUFDREMsT0FBT0MsT0FBUCxHQUFpQmIsVUFBakIiLCJmaWxlIjoiOTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG4vKlxyXG52YXIgQnV0dG9uVmlldyA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcbiAgdmFyIGl0ZW1zID0gcHJvcHMuaXRlbXM7XHJcbiAgdmFyIGNsaWNrID0gcHJvcHMuaXRlbUNsaWNrO1xyXG4gIHZhciBpdGVtSHRtbCA9IGl0ZW1zLm1hcChmdW5jdGlvbiAobGlzdEl0ZW0sIGkpIHtcclxuICAgIHJldHVybiA8bGkgb25DbGljaz17Y2xpY2t9IGRhdGEtaWQ9e2xpc3RJdGVtLmlkfSBrZXk9e2l9PntsaXN0SXRlbS5kYXRhfTwvbGk+O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDx1bD57aXRlbUh0bWx9PC91bD5cclxuICA8L2Rpdj47XHJcbn07XHJcbiovXHJcbmNsYXNzIEJ1dHRvblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblx0cmVuZGVyKCl7XHJcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnByb3BzLml0ZW1zO1xyXG4gICAgbGV0IGNsaWNrID0gdGhpcy5wcm9wcy5pdGVtQ2xpY2s7XHJcbiAgICBsZXQgaXRlbUh0bWwgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGxpc3RJdGVtLCBpKSB7XHJcbiAgICAgIHJldHVybiA8bGkgb25DbGljaz17Y2xpY2t9IGRhdGEtaWQ9e2xpc3RJdGVtLmlkfSBrZXk9e2l9PntsaXN0SXRlbS5kYXRhfTwvbGk+O1xyXG4gICAgfSk7XHJcblx0ICByZXR1cm4gPGRpdj57aXRlbUh0bWx9PC9kaXY+O1xyXG5cdH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b25WaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L0J1dHRvblZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

},[88]);