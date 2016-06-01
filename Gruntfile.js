module.exports = function(grunt) {
  // Project config
  grunt.initConfig({
    clean: {
      build: {
        src: ['build/**']
      },
      tmp: {
        src: ['tmp/**']
      },
      css: {
        src: ['src/shared/partials/css/*','!src/shared/partials/css/outlook_css.hbs']
      }
    },
    less: {
      files: {
        expand: true,
        flatten: true,
        cwd: "less/",
        src: "*.less",
        dest: "tmp/css",
        ext: ".css"
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'tmp/css/',
        src: ['*.css'],
        dest: 'src/shared/partials/css/',
        ext: '.hbs'
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
        files: ['less/**','src/**','data/**'],
        tasks: ['default'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['clean:css','less','cssmin','clean:build','compile-handlebars','inlinecss','clean:tmp']);
  grunt.registerTask('compile', ['compile-handlebars']);
  grunt.registerTask('cleanup', ['clean:build','clean:tmp']);
  grunt.registerTask('css', ['clean:css','less','cssmin','clean:tmp']);

};
