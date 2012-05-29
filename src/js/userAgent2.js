/*jshint browser: true
*/
/*global slide:true, Class: true, gesture: true*/
(function (exports) {
    'use strict';

    var userAgent = exports.userAgent = function (ua) {
        ua = (ua || window.navigator.userAgent).toString().toLowerCase();
        var data = {ua:ua};
        var info = {
            checkOS: function () {
                data.os = {};
                if (matchKeywords(ua, 'android')) {
                    data.os.type = "android";
                    data.os.version = this._androidVersion();
                } else if (matchKeywords(ua, 'like mac os x')) {
                    data.os.type = "ios";
                    data.os.version = this._iosVersion();
                } else if (matchKeywords(ua, ['windows', '!polaris'])) {
                    data.os.type = "windows";
                    data.os.version = this._windowVersion();
                } else if (matchKeywords(ua, 'macintosh')) {
                    data.os.type = "mac";
                    data.os.version = this._unknownVersion();
                } else if (matchKeywords(ua, "bada")) {
                    data.os.type = "bada";
                    data.os.version = this._badaVersion();
                } else if (matchKeywords(ua, ['linux', '!polaris'])) {
                    data.os.type = "linux";
                    data.os.version = this._unknownVersion();
                } else {
                    data.os.type = "unknown";
                    data.os.version = this._unknownVersion();
                }
            },
            checkDevice: function () {
                data.device = {};
                if (data.os.type === "ios") {
                    if (matchKeywords(ua, 'ipad')) {
                        data.device.ipad = true;
                    } else if (matchKeywords(ua, 'ipod')) {
                        data.device.ipod = true;
                    } else if (matchKeywords(ua, 'iphone')) {
                        data.device.iphone = true;
                    }
                }

                if (data.os.type !== "unknown") {
                    data.device[data.os.type] = true;
                } else if (matchKeywords(ua, 'polaris') || matchKeywords(ua, 'natedata') || /([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
                    data.device.polaris = true;
                }

                if (data.browser.type !== "unknown") {
                    data.device[data.browser.type] = true;
                }
                if (data.platform !== "unknown") {
                    data.device[data.platform] = true;
                }
            },
            checkBrowser: function () {
                data.browser = {};
                if (matchKeywords(ua, 'msie')) {
                    data.browser.type = "ie";
                    data.browser.version = this._ieVersion();
                } else if (matchKeywords(ua, 'opera')) {
                    data.browser.type = 'opera';
                    data.browser.version = this._operaVersion();
                } else if (matchKeywords(ua, 'firefox')) {
                    data.browser.type = 'firefox';
                    data.browser.version = this._firefoxVersion();
                } else if (matchKeywords(ua, "chrome")) {
                    data.browser.type = "chrome";
                    data.browser.version = this._chromeVersion();
                } else if (matchKeywords(ua, "dolfin")) {
                    data.browser.type = "dolfin";
                    data.browser.version = this._dolfinVersion();
                } else if (matchKeywords(ua, ["safari", "!chrome"])) {
                    data.browser.type = "safari";
                    data.browser.version = this._safariVersion();
                } else {
                    data.browser.type = "unknown";
                    data.browser.version = this._unknownVersion();
                }
            },
            checkPlatform: function () {
                if (this.detectPc() || data.isIpad) {
                    data.platform = "pc";
                } else if (this.detectTablet()) {
                    data.platform = "tablet";
                } else if (this.detectMobile()) {
                    data.platform = "mobile";
                } else {
                    data.platform = "unknown";
                }
            },
            detectPc: function () {
                if (ua.match(/linux|windows nt|windows 98|macintosh/) && !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) {
                    return true;
                }
                return false;
            },
            detectTablet: function () {
                if (ua.match(/ipad/) || (ua.match(/android/) && !ua.match(/mobi|mini|fennec/))) {
                    return true;
                }
                return false;
            },
            detectMobile: function () {
                if (!!ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
                    return true;
                } else {
                    return false;
                }
            },
            _versioning: function (regExp) {
                var major = 0, minor = 0, versions,
                    matches = regExp.exec(ua);
                if (matches && matches.length >= 2) {
                    versions = matches[1].split(/[\.|-|_]/);
                    major = parseInt(versions[0], 10);
                    minor = parseInt(versions[1], 10);
                }
                return {
                    major: major,
                    minor: minor
                };
            },
            _unknownVersion: function () {
                return {major: 0, minor: 0};
            },
            _windowVersion: function () {
                if (matchKeywords(ua, "windows 98")) {
                    return {major: 0, minor: 98};
                } else if (matchKeywords(ua, "windows nt")){
                    return this._versioning(/windows nt ([0-9a-z\.\-\_]+)/i);
                } else {
                    return this._unknownVersion();
                }
            },
            _androidVersion: function() {
                return this._versioning(/android ([0-9a-z\.\-\_]+);/i);
            },
            _iosVersion: function() {
                return this._versioning(/os ([0-9a-z\.\-\_]+) like/i);
            },
            _ieVersion: function() {
                return this._versioning(/msie ([0-9a-z\.\-\_]+);/i);
            },
            _chromeVersion: function() {
                return this._versioning(/chrome\/([0-9a-z\.\-\_]+) /i);
            },
            _firefoxVersion: function() {
                return this._versioning(/firefox\/([0-9a-z\.\-\_]+)/i);
            },
            _badaVersion: function() {
                return this._versioning(/bada\/([0-9a-z\.\-\_]+);/i);
            },
            _dolfinVersion: function() {
                return this._versioning(/dolfin\/([0-9a-z\.\-\_]+)/i);
            },
            _operaVersion: function() {
                return this._versioning(/version\/([0-9a-z\.\-\_]+)/i);
            },
            _safariVersion: function() {
                return this._versioning(/version\/([0-9a-z\.\-\_]+)/i);
            }
        };

        info.checkOS();
        info.checkBrowser();
        info.checkPlatform();
        info.checkDevice();
        return data;
    };
    function createMatcher (keyword) {
        var matcher = function (keyword) {
            return function (str) {
                return str.indexOf(keyword) > -1;
            };
        };
        var notMatcher = function (keyword) {
            return function (str) {
                return str.indexOf(keyword) === -1;
            };
        };
        return (keyword.substr(0, 1) === '!') ? notMatcher(keyword.substr(1)) : matcher(keyword);
    }
    function matchKeywords (str, keywords) {
        keywords = [].concat(keywords);
        for (var i = 0; i < keywords.length; i++) {
            var match = createMatcher(keywords[i]);
            if (!match(str)) {
                return false;
            }
        }
        return true;
    }

})(window.daumUtil = (typeof window.daumUtil === 'undefined') ? {} : window.daumUtil);
