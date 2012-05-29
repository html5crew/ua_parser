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
                    data.isAndroid = true;
                    this._checkAndroid();
                    data.os.version = this._androidVersion();
                } else if (matchKeywords(ua, 'like mac os x.')) {
                    data.isIOS = true;
                    this._checkIos();
                    data.os.version = this._iosVersion();
                } else if (matchKeywords(ua, ['windows', '!polaris'])) {
                    data.isWindow = true;
                    data.os.version = this._windowVersion();
                } else if (matchKeywords(ua, 'macintosh')) {
                    data.isMac = true;
                    data.os.version = {major: 0, minor: 0};
                } else if (matchKeywords(ua, "bada")) {
                    data.isBada = true;
                    data.os.version = this._badaVersion();
                }
            },
            _checkAndroid: function () {
                if (matchKeywords(ua, ['android', 'mobile', 'safari'])) {
                    data.isAndroidMobile = true;
                } else if (matchKeywords(ua, ['android', '!mobile', 'safari'])) {
                    data.isAndroidTablet = true;
                }
            },
            _checkIos: function () {
                if (matchKeywords(ua, 'ipad')) {
                    data.isIpad = true;
                } else if (matchKeywords(ua, ['iphone', '!ipod'])) {
                    data.isIphone = true;
                } else if (matchKeywords(ua, 'ipod')) {
                    data.isIpod = true;
                }
            },
            checkBrowser: function () {
                data.browser = {};
                if (matchKeywords(ua, 'msie')) {
                    data.isIe = true;
                    data.browser.version = this._ieVersion();
                } else if (matchKeywords(ua, ['opera', '!mobi', '!mini'])) {
                    data.isOpera = true;
                    data.browser.version = this._operaVersion();
                } else if (matchKeywords(ua, 'firefox')) {
                    data.isFirefox = true;
                    data.browser.version = this._firefoxVersion();
                } else if (matchKeywords(ua, "chrome/")) {
                    data.isChrome = true;
                    data.browser.version = this._chromeVersion();
                } else if (matchKeywords(ua, ["safari", "!chrome/"])) {
                    data.isSafari = true;
                    data.browser.version = this._safariVersion();
                } else if (matchKeywords(ua, "dolfin")) {
                    data.isDolfin = true;
                    data.browser.version = this._dolfinVersion();
                } else if (matchKeywords(ua, ['firefox', 'fennec'])) {
                    data.isFirefoxMobile = true;
                } else if (matchKeywords(ua, ['mobile', 'safari'])) {
                    data.isSafariMobile = true;
                } else if (matchKeywords(ua, 'iemobile')) {
                    data.isIeMobile = true;
                } else if (matchKeywords(ua, 'windows ce') || matchKeywords(ua, 'windows mobile')) {
                    data.isWinMobile = true;
                } else if (matchKeywords(ua, ['opera', 'mobi'])) {
                    data.isOperaMobile = true;
                } else if (matchKeywords(ua, 'polaris') || matchKeywords(ua, 'natedata') || /([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
                    data.isPolaris = true;
                }
            },

            checkPlatform: function () {
                if (data.isAndroidTablet || data.isIpad) {
                    data.isTablet = true;
                } else if (this.checkMobile()) {
                    data.isMobile = true;
                }
            },
            checkMobile: function () {
                if (data.isFirefoxMobile || data.isPolaris || data.isSafariMobile ||
                    data.isIeMobile || data.isWinMobile || data.isOperaMobile ||
                    data.isAndroidMobile || data.isIphone || data.isIpod) {
                    return true;
                }
                return false;
            },
            _versioning: function (reg) {
                var major = 0, minor = 0, versions,
                    matches = reg.exec(ua);
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
            _windowVersion: function() {
                if (matchKeywords(ua, "windows 98")) {
                    data.isWin98 = true;
                    return {major: 98, minor: 0};
                } else {
                    var windowName = {
                        "5-0": "isWin2k",
                        "5-1": "isWinXp",
                        "6-0": "isWinVista",
                        "6-1": "isWin7"
                    };
                    var version = this._versioning(/windows nt ([0-9a-z\.\-\_]+)/i);
                    data[windowName[version.major + "-" + version.minor]] = true;
                    return version;
                }
            },
            _androidVersion: function() {
                return this._versioning(/ android ([0-9a-z\.\-\_]+);/i);
            },
            _iosVersion: function() {
                return this._versioning(/ os ([0-9a-z\.\-\_]+) like/i);
            },
            _ieVersion: function() {
                return this._versioning(/ msie ([0-9a-z\.\-\_]+);/i);
            },
            _chromeVersion: function() {
                return this._versioning(/ chrome\/([0-9a-z\.\-\_]+) /i);
            },
            _firefoxVersion: function() {
                return this._versioning(/ firefox\/([0-9a-z\.\-\_]+)/i);
            },
            _operaVersion: function() {
                return this._versioning(/ version\/([0-9a-z\.\-\_]+)/i);
            },
            _safariVersion: function() {
                return this._versioning(/ version\/([0-9a-z\.\-\_]+)/i);
            },
            _badaVersion: function() {
                return this._versioning(/ bada\/([0-9a-z\.\-\_]+);/i);
            },
            _dolfinVersion: function() {
                return this._versioning(/ dolfin\/([0-9a-z\.\-\_]+)/i);
            }
        };

        info.checkOS();
        info.checkBrowser();
        info.checkPlatform();
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
