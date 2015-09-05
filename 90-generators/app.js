"use strict";

var _slicedToArray = require("babel-runtime/helpers/sliced-to-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var marked0$0 = [listThings].map(_regeneratorRuntime.mark);
console.log("");
console.log("");
console.log("-------------------------------");

function listThings() {
  var values, idx, val;
  return _regeneratorRuntime.wrap(function listThings$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        values = ["a", "b", "c", "d", "foo", "bar"];
        context$1$0.t0 = _regeneratorRuntime.keys(values);

      case 2:
        if ((context$1$0.t1 = context$1$0.t0()).done) {
          context$1$0.next = 10;
          break;
        }

        idx = context$1$0.t1.value;
        val = values[idx];
        return context$1$0.delegateYield(_regeneratorRuntime.mark(function callee$1$0() {
          return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return val;

              case 2:
              case "end":
                return context$2$0.stop();
            }
          }, callee$1$0, this);
        }), "t2", 6);

      case 6:
        context$1$0.t3 = context$1$0.t2;
        setTimeout(context$1$0.t3, 10);
        context$1$0.next = 2;
        break;

      case 10:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

console.log("async yield");

var _listThings = listThings();

var _listThings2 = _slicedToArray(_listThings, 3);

var a = _listThings2[0];
var b = _listThings2[1];
var c = _listThings2[2];

console.log("output:", a, b, c);
//# sourceMappingURL=app.js.map
