/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.copyright %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['src/js/*.js', 'src/test-js/*.js']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'src/js/*.js'],
        dest: 'dist/userAgent-<%= pkg.version %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', 'src/js/*.js'],
        dest: 'dist/userAgent-<%= pkg.version %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        node: true,
        exports: true,
        require: true,
        describe: true,
        it: true,
        beforeEach: true,
        before: true,
        expect: true
      }
    },
    jasmine: {
      ua_parse : {
        src: "src/test-js/spec/"
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine');
  // Default task.
  grunt.registerTask('default', 'lint jasmine concat min');

};
