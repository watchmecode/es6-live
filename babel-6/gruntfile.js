module.exports = function(grunt){

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "build/app.js": "src/app.js",
          "build/myMath.js": "src/myMath.js",
          "build/subtract.js": "src/subtract.js",
          "build/add.js": "src/add.js"
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
