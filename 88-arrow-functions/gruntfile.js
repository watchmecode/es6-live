module.exports = function(grunt){

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "app.js": "src/app.js"
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
