console.log("");
console.log("--------------------------------");
console.log("");

function makeAjaxRequest(url, cb){
  setTimeout(function(){
    cb('{"id":1, "url": "' + url + '"}');
  }, 1000);
}

function request(url){
  return new Promise(function(resolve){
    makeAjaxRequest(url, function(val){
      resolve(val);
    });
  });
}

function bar(a){
  return a + "foooooooooooooooooooooo";
}

function async(gen){
  var it = gen();

  function run(val){
    var result = it.next(val);
    if (result.done) { return; }

    var promise = result.value;
    if (promise.then) {
      promise.then(run);
    } else {
      run(result.value);
    }
  }

  run();
}

async(function *(){
  var result = yield request("http://3.example.com");
  console.log(result);

  result = yield request("http://something.example.com");
  console.log(result);

  result = yield request("http://something.example.com");
  console.log(result);

  result = yield bar("bar:");
  console.log(result);
});

