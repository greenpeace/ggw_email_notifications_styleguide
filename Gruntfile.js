module.exports = function(grunt) {
  // Project config
  grunt.initConfig({
    clean: {
      build: {
        src: ['build/**']
      },
      tmp: {
        src: ['tmp/**']
      }
    },
    inlinecss: {
      main: {
        options: {
        },
        files: [{
          expand: true,
          cwd: 'tmp',
          src: '**/*.html',
          dest: 'build/'
        }]
      }
    },
    'compile-handlebars': {
      allStatic: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: 'html/**/*.hbs',
          dest: 'tmp/',
          ext: '.html'
        }],
        templateData: 'data/data.json',
        partials: [
          'src/shared/partials/*.hbs',
          'src/shared/partials/**/*.hbs'
        ]
      }
    },
    watch: {
      scripts: {
        files: ['src/**','data/**'],
        tasks: ['default'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean:build','compile-handlebars','inlinecss','clean:tmp']);
  grunt.registerTask('compile', ['compile-handlebars']);
  grunt.registerTask('cleanup', ['clean:build','clean:tmp']);

};
