console.log("");
console.log("");
console.log("-------------------------------");

function* listThings(){
  var values = ["a", "b", "c", "d", "foo", "bar"];
  for(var idx in values){
    var val = values[idx];

      yield val;
  }
}

console.log("async yield");
let [a, b, c] = listThings();
console.log("output:", a, b, c);
