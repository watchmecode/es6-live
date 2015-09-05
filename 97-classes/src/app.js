console.log("");
console.log("");
console.log("-----------------------------------");


function Animal(type, word){
  this.type = type;
  this.word = word;
}

Animal.prototype.talk = function() {
  console.log("this a '", this.type, "'");
  console.log("the ", this.type, "is talking:", this.word);
}

class Dog extends Animal {
  something() {
    console.log("dog something");
  }
}

var d = new Dog("dog", "bark");
d.talk();
d.something();

