"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var marked0$0 = [foo].map(_regeneratorRuntime.mark);
console.log("");
console.log("----------------------------------");
console.log("");

function foo() {
  return _regeneratorRuntime.wrap(function foo$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        console.log("starting foo");
        context$1$0.t0 = console;
        context$1$0.next = 4;
        return 1;

      case 4:
        context$1$0.t1 = context$1$0.sent;
        context$1$0.t0.log.call(context$1$0.t0, context$1$0.t1);
        context$1$0.next = 8;
        return;

      case 8:
        console.log("at the end of foo");
        return context$1$0.abrupt("return", "asdf");

      case 10:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

console.log("about to foo");
var it = foo();
var output = it.next();
console.log(output);
it.next("some value");
//# sourceMappingURL=app.js.map
