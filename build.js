/*jshint regexp: false, node: true */
(function () {
    'use strict';

    var async = require('async'),
        clc = require('cli-color'),
        compressor = require('node-minify'),
        exec = require('child_process').exec;

    function success() {
        console.log(clc.green(Array.prototype.join.call(arguments, ' ')));
    }

    function error() {
        console.error(clc.red(Array.prototype.join.call(arguments, ' ')));
    }
    var destFileName = "userAgent.min.js";
    var srcFileName = "userAgent.js";
    var build = exports.upload = function (callback) {

        // step 1. check code by jshint
        function checkJsHint (cb) {
            var command = "jshint src/js/userAgent.js";
            exec(command, function (err, stdout, stderr) {
                if (err) {
                    console.log(stderr);
                    cb(err);
                } else {
                    console.log(stdout);
                    success("JsHint PASS!!!\n\n");
                    cb(null);
                }
            });
        }

        // step 2. check test code by jsamine
        function checkTestCase (cb) {
            var command = "jasmine-node src/test-js/userAgent_spec.js";
            exec(command, function (err, stdout, stderr) {
                if (err) {
                    console.log(stderr);
                    cb(err);
                } else {
                    console.log(stdout);
                    success("Test Case PASS!!!\n\n");
                    cb(null);
                }
            });
        }

        // step 3. minify source file
        function minifyFile(cb) {
            try {
                new compressor.minify({
                    type: 'gcc',
                    fileIn: __dirname + "/src/js/"+srcFileName,
                    fileOut: __dirname + "/dist/"+destFileName,
                    callback: function(err){
                        if (err) {
                            error("error : Minify " + srcFileName + " to " + destFileName + "\n\n");
                            cb(err);
                        } else {
                            success("success : Minify " + srcFileName + " to " + destFileName + "\n\n");
                            cb(null);
                        }
                    }
                });
            } catch (err) {
                cb(err);
            }
        }

        async.waterfall([
            checkJsHint,
            checkTestCase,
            minifyFile
        ], callback);
    };

    build(function(err){
        if (err) {
            error("error :");
            console.error(err.stack);
        }
        success("Success Build!!");
    });
})();
