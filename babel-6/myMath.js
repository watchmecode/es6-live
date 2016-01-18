"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subtract = require("./subtract");

var _subtract2 = _interopRequireDefault(_subtract);

var add = require("./add");

var math = {
  add: add,
  subtract: _subtract2["default"]
};

exports["default"] = math;
module.exports = exports["default"];
//# sourceMappingURL=myMath.js.map
