module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },

      apps: ["www/app/src/**/*.js"]
    },

    clean: {
      es6Build: ["www/app/es6-build/"],
      app: ["www/public/assets/app.js"]
    },

    watch: {

      infrastructure: {
        files: ["www/app/assets/**/*.js"],
        tasks: ["concat"]
      },

      app: {
        files: ["www/app/src/**/*.js"],
        tasks: ["clean", "jshint", "babel", "browserify"]
      },

      reloader: {
        files: [
          "www/views/**/*.jade",
          "www/public/assets/**/*.css",
          "www/public/assets/**/*.js"
        ],
        options: {
          livereload: true
        }
      }
    },

    concat: {
      infrastructure: {
        src: [
          "www/app/assets/backbone.marionette/json2.js",
          "www/app/assets/backbone.marionette/underscore.js",
          "www/app/assets/jquery/jquery.min.js",
          "www/app/assets/backbone.marionette/backbone.js",
          "www/app/assets/backbone.marionette/backbone.stickit.js",
          "www/app/assets/backbone.marionette/backbone.radio.min.js",
          "www/app/assets/backbone.marionette/backbone.marionette.min.js",
          "www/app/assets/backbone.marionette/backbone.fwd.min.js",
          "www/app/assets/backbone.marionette/backbone.select.js",
          "www/app/assets/backbone.marionette/marionette.gauntlet.js",
          "www/app/assets/bootstrap/js/bootstrap.min.js"
        ],
        dest: "www/public/assets/infrastructure.js"
      }
    },

    babel: {
      options: {
        sourceMap: true
      },
      build: {
        files: [{
          expand: true,
          cwd: "www/app/src",
          src: ["**/*.js"],
          dest: "www/app/es6-build/"
        }]
      }
    },

    browserify: {
      options:{
        browserifyOptions: {
          debug: true
        }
      },
      app: {
        files: {
          "www/public/assets/app.js": "www/app/es6-build/index.js"
        },
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-sass");

  grunt.registerTask("default", ["concat", "watch"]);
};
