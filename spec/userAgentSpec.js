/*jshint loopfunc: true
*/
/* global describe: true, beforeEach, it
*/

describe("userAgent.js", function () {

    var UA_LIST = userAgentList;
    describe('Identify user-agents', function () {

        for (var i=0, len=UA_LIST.length; i<len; i++) {
            (function (userAgent) {
                describe(userAgent.index +' : Identify user-agents of ' + userAgent.os_name, function () {
                    var ua;
                    if (userAgent.app_name) {
                        ua = daumtools.userAgent(userAgent.ua, [userAgent.app_name]);
                    } else {
                        ua = daumtools.userAgent(userAgent.ua);
                    }

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
                    it('should identify Platform : ' + userAgent.platform, function () {
                        expect(ua.platform).toBe(userAgent.platform);
                    });
                    it('should identify OS : ' + userAgent.os_name, function () {
                        expect(ua.os[userAgent.os_name]).toBeTruthy();
                        expect(ua.os.name).toBe(userAgent.os_name);
                    });
                    it('should identify OS version : ' + userAgent.os_version, function () {
                        var versions = userAgent.os_version.split(/[.|-|_]/);
                        expect(ua.os.version.major).toBe(versions[0]);
                        expect(ua.os.version.minor).toBe(versions[1]);
                        if (versions[2]) {
                            expect(ua.os.version.patch).toBe(versions[2]);
                        }
                    });

                    if (userAgent.app_name) {
                        it('should identify app : ' + userAgent.app_name, function () {
                            expect(ua.app.name).toBe(userAgent.app_name);
                        });
                        it('should identify app version : ' + userAgent.app_version, function () {
                            var versions = userAgent.app_version.split(/[.|-|_]/);
                            expect(ua.app.version.major).toBe(versions[0]);
                            expect(ua.app.version.minor).toBe(versions[1]);
                            if (versions[2]) {
                                expect(ua.app.version.patch).toBe(versions[2]);
                            }
                        });
                    }
                });
            })(UA_LIST[i]);
        }
    });

    describe('legacy supports', function () {
        it('should provide legacy "util" namespace', function () {
            expect(util.userAgent).toBe(daumtools.userAgent);
        });
    });
});
