console.log("");
console.log("");
console.log("-----------------------------------");

function doStuff(){
  let args = [...arguments];
  args.forEach(function(a){
    console.log(a);
  });
}

doStuff("a", "b", 1, 2, 3, 4, 5, 6, 7, 8);
