"use strict";

console.log("");
console.log("");

function Add(a, b) {
  this.a = a;
  this.b = b;
}

Add.prototype.execute = function (cb) {
  var sum = this.a + this.b;
  cb.bind(this, undefined, sum)();
};

var add = new Add(3, 6);
add.execute(function (err, sum) {
  var _this = this;

  if (err) {
    throw err;
  }

  console.log("verify the context:", this.a, this.b);

  setImmediate(function () {
    console.log("the sum is:", sum);
    console.log("replay the context", _this.a, _this.b);
  });
});

console.log("");
console.log("");
//# sourceMappingURL=app.js.map
