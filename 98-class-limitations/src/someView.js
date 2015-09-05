var _template = Symbol("_template");
var _foo = Symbol("_foo");

class SomeView {
  get foo(){
    return this[_foo];
  }

  set foo(value){
    this[_foo] = value;
  }

  get template(){
    return this[_template];
  }

  set template(val){
    this[_template] = val;
  }
}

export default SomeView;
