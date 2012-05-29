/*jshint browser: true
*/
/*global slide:true, Class: true, gesture: true*/
(function (exports) {
    'use strict';

    var userAgent = exports.userAgent = function (ua) {
        ua = (ua || window.navigator.userAgent).toString();
        return {
            ua: ua,
            isWin7: matchKeywords(ua, "windows nt 6.1"),
            isWinVista: matchKeywords(ua, "windows nt 6.0"),
            isWinXp: matchKeywords(ua, "windows nt 5.1"),
            isWin2k: matchKeywords(ua, "windows nt 5.0"),
            isWin98: matchKeywords(ua, "windows 98"),
            isAndroid: matchKeywords(ua, 'android'),
            isIOS: matchKeywords(ua, 'like mac os x.'),
            isWindow: matchKeywords(ua, 'windows'),
            isMac: matchKeywords(ua, 'macintosh'),
            
            isIe: matchKeywords(ua, 'msie'),
            isOpera: matchKeywords(ua, ['opera', '!mobi', '!mini']),
            isFirefox: matchKeywords(ua, 'firefox'),
            isChrome: matchKeywords(ua, "chrome/"),
            isSafari: matchKeywords(ua, ["safari", "!chrome/"]),

            isAndroidTablet: matchKeywords(ua, ['android', '!mobile', 'safari']),
            isAndroidMobile: matchKeywords(ua, ['android', 'mobile', 'safari']),

            isIpad: matchKeywords(ua, 'ipad'),
            isIphone: matchKeywords(ua, ['iphone', '!ipod']),
            isIpod: matchKeywords(ua, 'ipod'),
            
            isBada: matchKeywords(ua, 'bada'),
            isDolfin: matchKeywords(ua, 'dolfin'),

            isFirefoxMobile: matchKeywords(ua, ['firefox', 'fennec']),
            isPolaris: matchKeywords(ua, 'polaris') || matchKeywords(ua, 'natethis') || /([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(this.ua),
            isSafariMobile: matchKeywords(ua, ['mobile', 'safari']),
            isIeMobile: matchKeywords(ua, 'iemobile'),
            isWinMobile: matchKeywords(ua, 'windows ce') || matchKeywords(ua, 'windows mobile'),
            isOperaMobile: matchKeywords(ua, ['opera', 'mobi']),
            
            _versioning: function (reg) {
                var major = 0, minor = 0, versions,
                    matches = reg.exec(ua);
                if (matches && matches.length > 2) {
                    versions = matches[1].split(/[\.|-|_]/);
                    major = parseInt(versions[0], 10);
                    minor = parseInt(versions[1], 10);
                }
                return {
                    major: major,
                    minor: minor
                };
            },
            _androidVersion: function() {
                return this.versioning(/ android ([0-9a-z\.\-\_]+);/i);
            },
            _iosVersion: function() {
                return this.versioning(/ os ([0-9a-z\.\-\_]+) like/i);
            },
            _ieVersion: function() {
                return this.versioning(/ msie ([0-9a-z\.\-\_]+);/i);
            },
            _chromeVersion: function() {
                return this.versioning(/ chrome\/([0-9a-z\.\-\_]+) /i);
            },
            _firefoxVersion: function() {
                return this.versioning(/ firefox\/([0-9a-z\.\-\_]+)/i);
            },
            _operaVersion: function() {
                return this.versioning(/ version\/([0-9a-z\.\-\_]+)/i);
            },
            _safariVersion: function() {
                return this.versioning(/ version\/([0-9a-z\.\-\_]+)/i);
            },
            _badaVersion: function() {
                return this.versioning(/ bada\/([0-9a-z\.\-\_]+);/i);
            },
            _dolfinVersion: function() {
                return this.versioning(/ dolfin\/([0-9a-z\.\-\_]+)/i);
            }
        };
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
