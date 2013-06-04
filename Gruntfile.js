/* jshint sub:true
*/

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.copyright %>;\n' +
            '* Licensed <%= pkg.licenses[0].type %> - <%= pkg.licenses[0].url %>*/\n'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                loopfunc: true,
                globals: {
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
            uses_defaults: [
                'Gruntfile.js',
                'src/main/webapp/scripts/core/**/*.js',
                'src/main/webapp/scripts/modules/**/*.js'
            ]
        },
        concat: {
            options: {
                separator: ''
            },
            dist: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: ['src/js/*.js'],
                dest: 'dist/userAgent-<%= pkg.version %>.js'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: ['src/js/*.js'],
                dest: 'dist/userAgent-<%= pkg.version %>.min.js'
            }
        },
        jasmine: {
            ua_parse: {
                src: 'src/js/userAgent.js',
                options: {
                    specs: ['spec/userAgentList.js', 'spec/userAgentSpec.js'],
                    outfile: 'userAgentSpec.html'
                }
            }
        }
    });

    // Load the plugin.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    // Default task(s).

    grunt.registerTask('default', ['jshint', 'jasmine', 'concat', 'uglify']);
};