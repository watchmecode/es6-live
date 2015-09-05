"use strict";

var _Promise = require("babel-runtime/core-js/promise")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

console.log("");
console.log("--------------------------------");
console.log("");

function makeAjaxRequest(url, cb) {
  setTimeout(function () {
    cb("{\"id\":1, \"url\": \"" + url + "\"}");
  }, 1000);
}

function request(url) {
  return new _Promise(function (resolve) {
    makeAjaxRequest(url, function (val) {
      resolve(val);
    });
  });
}

function bar(a) {
  return a + "foooooooooooooooooooooo";
}

function async(gen) {
  var it = gen();

  function run(val) {
    var result = it.next(val);
    if (result.done) {
      return;
    }

    var promise = result.value;
    if (promise.then) {
      promise.then(run);
    } else {
      run(result.value);
    }
  }

  run();
}

async(_regeneratorRuntime.mark(function callee$0$0() {
  var result;
  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return request("http://3.example.com");

      case 2:
        result = context$1$0.sent;

        console.log(result);

        context$1$0.next = 6;
        return request("http://something.example.com");

      case 6:
        result = context$1$0.sent;

        console.log(result);

        context$1$0.next = 10;
        return request("http://something.example.com");

      case 10:
        result = context$1$0.sent;

        console.log(result);

        context$1$0.next = 14;
        return bar("bar:");

      case 14:
        result = context$1$0.sent;

        console.log(result);

      case 16:
      case "end":
        return context$1$0.stop();
    }
  }, callee$0$0, this);
}));
//# sourceMappingURL=app.js.map
