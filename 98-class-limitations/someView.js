"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _template = _Symbol("_template");
var _foo = _Symbol("_foo");

var SomeView = (function () {
  function SomeView() {
    _classCallCheck(this, SomeView);
  }

  _createClass(SomeView, [{
    key: "foo",
    get: function get() {
      return this[_foo];
    },
    set: function set(value) {
      this[_foo] = value;
    }
  }, {
    key: "template",
    get: function get() {
      return this[_template];
    },
    set: function set(val) {
      this[_template] = val;
    }
  }]);

  return SomeView;
})();

exports["default"] = SomeView;
module.exports = exports["default"];
//# sourceMappingURL=someView.js.map
