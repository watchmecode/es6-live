console.log("");
console.log("----------------------------------");
console.log("");

var obj = {
  "something": "whatever"
};

function addIsChecked(){
  var isChecked = Symbol.for("config");
  obj[isChecked] = true;
}

function anotherIsChecked(){
  var isChecked = Symbol.for("config");
  obj[isChecked] = false;
}

addIsChecked();
anotherIsChecked();

console.log("symbols:", Object.getOwnPropertySymbols(obj));
