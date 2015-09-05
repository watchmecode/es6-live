module.exports = function(grunt){

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        optional: ["runtime"]
      },
      dist: {
        files: {
          "app.js": "src/app.js",
          "someView.js": "src/someView.js"
        }
      }
    },

    watch: {
      babel: {
        files: ["src/**/*.js"],
        tasks: ["babel"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["babel"]);
};
