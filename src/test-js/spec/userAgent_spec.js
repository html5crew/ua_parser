/*jshint loopfunc: true
*/
/* global describe: true, beforeEach, it
*/
var util = require("../../js/userAgent.js").util;
var fs = require("fs");

describe("userAgent.js", function () {

    var UA_LIST = JSON.parse(fs.readFileSync("src/test-js/spec/userAgentList.json", "utf-8"));

    describe('Identify user-agents', function () {

        for (var i=0, len=UA_LIST.length; i<len; i++) {
            (function (userAgent) {
                describe('Identify user-agents of ' + userAgent.os_name, function () {
                    var ua = util.userAgent(userAgent.ua);
                    it('should identify browser : ' + userAgent.browser_name, function () {
                        expect(ua.browser[userAgent.browser_name]).toBeTruthy();
                        expect(ua.browser.name).toBe(userAgent.browser_name);
                    });
                    it('should identify browser version : ' + userAgent.browser_version, function () {
                        var versions = userAgent.browser_version.split(/[.|-|_]/);
                        expect(ua.browser.version.major).toBe(versions[0]);
                        expect(ua.browser.version.minor).toBe(versions[1]);
                        if (versions[2]) {
                            expect(ua.browser.version.patch).toBe(versions[2]);
                        }
                    });
                    it('should identify Platform' + userAgent.platform, function () {
                        expect(ua.platform).toBe(userAgent.platform);
                    });
                    it('should identify OS :' + userAgent.os_name, function () {
                        expect(ua.os[userAgent.os_name]).toBeTruthy();
                        expect(ua.os.name).toBe(userAgent.os_name);
                    });
                });
            })(UA_LIST[i]);
        }
    });
});
