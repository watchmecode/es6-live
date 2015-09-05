console.log("");
console.log("");
console.log("-----------------------------------");

function doStuff(a, b, ...args){
  console.log(a);
  console.log(b);
  console.log(args);
}

doStuff("foo", 1, 2, 3, "bar");
