module.exports = function(grunt) {
  // Project config
  grunt.initConfig({
    inlinecss: {
      main: {
        options: {
        },
        files: {
          'build/modules.html': 'src/modules.html'
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-inline-css');

  // Default task(s).
  grunt.registerTask('default', ['inlinecss']);

};

