"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Util = require("./utils/Util.js");

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NaverMapLoader = function () {
    function NaverMapLoader(props) {
        _classCallCheck(this, NaverMapLoader);

        this.util = new _Util2.default();
        this.mapOptions = this.configureOptions(props);
        this.elementId = props.elementId;

        return this;
    }

    _createClass(NaverMapLoader, [{
        key: "configureOptions",
        value: function configureOptions(props) {
            var options = {
                key: props.apiKey || null,
                version: props.version || 2.0
            };

            return options;
        }
    }, {
        key: "init",
        value: function init() {
            var naverMapLoadingUrl = "http://openapi.map.naver.com/openapi/naverMap.naver";
            var queryString = this.util.jsonToQueryString(this.mapOptions);
            var url = naverMapLoadingUrl + queryString;

            this.map = this.util.loadScript(url, null).then(function (result) {
                return true;
            }).then(function (result) {
                return this.getMap();
            }.bind(this));
        }
    }, {
        key: "getMap",
        value: function getMap() {
            var map = new nhn.api.map.Map(this.elementId, {});
            return map;
        }
    }]);

    return NaverMapLoader;
}();

exports.default = NaverMapLoader;