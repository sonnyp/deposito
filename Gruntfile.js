'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jsvalidate: {
      files:{
        src:[
          '*.js',
          // 'bin/*'
        ]
      }
    },

    jshint: {
      files:[
        '*.js',
        '*.json',
        'bin/*'
      ],
      options: {
        jshintrc: '.jshintrc',
        jshintignore: '.jshintignore'
      }
    },

  });

  grunt.loadNpmTasks('grunt-jsvalidate');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('syntax', ['jsvalidate', 'jshint']);
  grunt.registerTask('test', ['jsvalidate', 'jshint']);
  grunt.registerTask('default', 'test');
};