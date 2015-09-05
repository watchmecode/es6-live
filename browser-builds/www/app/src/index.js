import SomeView from "./someView";

var App = new Marionette.Application();

App.addRegions({
  main: "#main"
});

App.on("start", () => {
  var someView = new SomeView();
  App.main.show(someView);


});

global.App = App;
