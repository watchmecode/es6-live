"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _someView = require("./someView");

var _someView2 = _interopRequireDefault(_someView);

console.log("");
console.log("");
console.log("-----------------------------------");

var Something = {
  foo: "bar"
};

var s = _Object$create(Something);
var s2 = _Object$create(Something);

console.log(s.foo);
console.log(s2.foo);

s2.foo = "change";
console.log(s.foo);
//# sourceMappingURL=app.js.map
