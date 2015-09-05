"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _someView = require("./someView");

var _someView2 = _interopRequireDefault(_someView);

var App = new Marionette.Application();

App.addRegions({
  main: "#main"
});

App.on("start", function () {
  var someView = new _someView2["default"]();
  App.main.show(someView);
});

global.App = App;
//# sourceMappingURL=index.js.map
