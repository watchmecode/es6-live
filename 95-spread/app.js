"use strict";

var _slice = require("babel-runtime/helpers/slice")["default"];

console.log("");
console.log("");
console.log("-----------------------------------");

function doStuff() {
  var args = [].concat(_slice.call(arguments));
  args.forEach(function (a) {
    console.log(a);
  });
}

doStuff("a", "b", 1, 2, 3, 4, 5, 6, 7, 8);
//# sourceMappingURL=app.js.map
