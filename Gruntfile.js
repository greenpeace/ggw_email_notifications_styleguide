module.exports = function(grunt) {
  // Project config
  grunt.initConfig({
    inlinecss: {
      main: {
        options: {
        },
        files: {
          'build/digest.html': 'src/digest.html'
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-inline-css');

  // Default task(s).
  grunt.registerTask('default', ['inlinecss']);

};

