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
            '* Licensed <%= pkg.license %> */\n'
        },
        clean: {
            build: ['dist/*']
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
                'src/js/*.js'
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
                dest: 'dist/ua_parser-<%= pkg.version %>.js'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '<%= meta.banner %>',
                    ie8: true
                },
                src: ['src/js/*.js'],
                dest: 'dist/ua_parser-<%= pkg.version %>.min.js'
            }
        },
        jasmine: {
            ua_parse: {
                src: 'src/js/ua_parser.js',
                options: {
                    specs: ['spec/ua_parser_list.js', 'spec/ua_parser_spec.js'],
                    outfile: 'ua_parserSpec.html'
                }
            }
        }
    });

    // Load the plugin.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    // Default task(s).

    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('default', ['test', 'clean', 'concat', 'uglify']);
};