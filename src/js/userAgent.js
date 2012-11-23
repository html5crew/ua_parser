/*jshint browser: true
*/
/*global slide, Class, gesture*/

(function (exports) {
    'use strict';

    var userAgent = exports.userAgent = function (ua) {
        ua = (ua || window.navigator.userAgent).toString().toLowerCase();
        function checkUserAgent(ua) {
            var browser = {};
            var match = /(dolfin)[ \/]([\w.]+)/.exec( ua ) ||
                    /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                    /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
                    /(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
                    /(msie) ([\w.]+)/.exec( ua ) ||
                    ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec( ua ) ||
                    ["","unknown"];
            if (match[1] === "webkit") {
                match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) ||
                    /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], "safari", match[2]];
            } else if (match[1] === "mozilla") {
                match[1] = "firefox";
            } else if (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
                match[1] = "polaris";
            }

            browser[match[1]] = true;
            browser.name = match[1];
            browser.version = {};

            var versions = match[2] ? match[2].split(/\.|-|_/) : ["0","0","0"];
            browser.version.info = versions.join(".");
            browser.version.major = versions[0] || "0";
            browser.version.minor = versions[1] || "0";
            browser.version.patch = versions[2] || "0";

            return browser;
        }
        function checkPlatform (ua) {
            if (isPc(ua)) {
                return "pc";
            } else if (isTablet(ua)) {
                return "tablet";
            } else if (isMobile(ua)) {
                return "mobile";
            } else {
                return "";
            }
        }
        function isPc (ua) {
            if (ua.match(/linux|windows (nt|98)|macintosh/) && !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) {
                return true;
            }
            return false;
        }
        function isTablet (ua) {
            if (ua.match(/ipad/) || (ua.match(/android/) && !ua.match(/mobi|mini|fennec/))) {
                return true;
            }
            return false;
        }
        function isMobile (ua) {
            if (!!ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
                return true;
            } else {
                return false;
            }
        }
        
        function checkOs (ua) {
            var os = {},
                match = (/android/.test(ua)? "android" : false) ||
                        (/like mac os x./.test(ua)? "ios" : false)||
                        (/(mac os)/.test(ua)? "mac" : false) ||
                        (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)? "polaris" : false) ||
                        (/(windows)/.test(ua)? "windows" : false) ||
                        (/(linux)/.test(ua)? "linux" : false) ||
                        (/webos/.test(ua)? "webos" : false) ||
                        (/bada/.test(ua)? "bada" : false) ||
                        (/(rim|blackberry)/.test(ua)? "blackberry" : false) || "unknown";
            os[match] = true;
            os.name = match;
            return os;
        }

        return {
            ua: ua,
            browser: checkUserAgent(ua),
            platform: checkPlatform(ua),
            os: checkOs(ua)
        };
    };

})((function (){
    // Make userAgent a Node module, if possible.
    if (typeof exports === 'object') {
        exports.util = (typeof exports.util === 'undefined') ? {} : exports.util;
        return exports.util;
    } else if (typeof window === 'object') {
        window.util = (typeof window.util === 'undefined') ? {} : window.util;
        return window.util;
    }
})());
