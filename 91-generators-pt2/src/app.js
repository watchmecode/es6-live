console.log("");
console.log("----------------------------------");
console.log("");

function *foo(){
  console.log("starting foo");
  console.log(yield 1);
  yield;
  console.log("at the end of foo");
}

console.log("about to foo");
var it = foo();
var output = it.next();
console.log(output);
it.next("some value");

