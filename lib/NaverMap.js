"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NaverMap = _react2.default.createClass({
    displayName: "NaverMap",
    render: function render() {
        var text = "Hello Naver Map";
        return _react2.default.createElement(
            "div",
            null,
            text
        );
    }
});

exports.default = NaverMap;