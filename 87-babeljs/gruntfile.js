module.exports = function(grunt){
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "index.js": "src/index.js"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadTasks("default", ["babel"]);
};
