import SomeView from "./someView"

console.log("");
console.log("");
console.log("-----------------------------------");

var Something = {
  foo: "bar"
};

var s = Object.create(Something);
var s2 = Object.create(Something);

console.log(s.foo);
console.log(s2.foo);

s2.foo = "change";
console.log(s.foo);
