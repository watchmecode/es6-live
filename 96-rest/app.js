"use strict";

console.log("");
console.log("");
console.log("-----------------------------------");

function doStuff(a, b) {
  console.log(a);
  console.log(b);

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  console.log(args);
}

doStuff("foo", 1, 2, 3, "bar");
//# sourceMappingURL=app.js.map
