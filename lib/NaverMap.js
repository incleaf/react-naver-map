'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Util = require('./utils/Util.js');

var _Util2 = _interopRequireDefault(_Util);

var _NaverMapLoader = require('./NaverMapLoader.js');

var _NaverMapLoader2 = _interopRequireDefault(_NaverMapLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NaverMap = _react2.default.createClass({
    displayName: 'NaverMap',
    componentDidMount: function componentDidMount() {
        var naverMap = new _NaverMapLoader2.default(this.props).init();
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'naver-map-conatiner' },
            _react2.default.createElement('div', { className: 'naver-map', id: this.props.elementId })
        );
    }
});

exports.default = NaverMap;