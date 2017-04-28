/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
//    uglify: {
//      js: {
//        files: { 'built/tsjr.js': 'built/**/*.js' },
//        options: {
//          preserveComments: false
//        }
//      }
//    },
    rollup: {
      options: {
        entry: 'built/App.js',
        format: 'iife',
      },
      files: {
        src: 'built/App.js',
        dest: 'built/tsjr.js'
        //'built/tsjr.js': ['built/App.js'], // Only one source file is permitted
      },
    },
    watch: {
      concat: {
        files: 'built/**/*.js',
        tasks: ['rollup']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-rollup');

  // Default task.
  grunt.registerTask('default', ['rollup']);

};
