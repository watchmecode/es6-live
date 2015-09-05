"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

console.log("");
console.log("");
console.log("-----------------------------------");

function Animal(type, word) {
  this.type = type;
  this.word = word;
}

Animal.prototype.talk = function () {
  console.log("this a '", this.type, "'");
  console.log("the ", this.type, "is talking:", this.word);
};

var Dog = (function (_Animal) {
  function Dog() {
    _classCallCheck(this, Dog);

    _get(Object.getPrototypeOf(Dog.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(Dog, _Animal);

  _createClass(Dog, [{
    key: "something",
    value: function something() {
      console.log("dog something");
    }
  }]);

  return Dog;
})(Animal);

var d = new Dog("dog", "bark");
d.talk();
d.something();
//# sourceMappingURL=app.js.map
