# userAgent

check browser and browser's version from userAgent

[![Build Status](https://secure.travis-ci.org/eastkiki/userAgent.png?branch=master)](http://travis-ci.org/eastkiki/userAgent)

## usage

### browser

~~~~~~~

var ua = util.userAgent();

ua = {
    ua,
    browser: {
        [msie | safari | firefox | chrome | opera | android | iphone | ipad | ipod | polaris | dolfin | unknown] : true,
        name: ["msie" | "safari" | "firefox" | "chrome" | "opera" | "android" | "iphone" | "ipad" | "ipod" | "polaris" | "dolfin" | "unknown"], // type string
        version: {
            info,  // type string (version full string : [major.minor.patch])
            major, // type string
            minor, // type string
            patch  // type string
        }
    },
    platform : ["pc" | "tablet" | "mobile"], // type string
    os : {
        ["windows" | "mac" | "linux" | "android" | "ios" | "blackberry" | "unknown"] : true,
        name : ["windows" | "mac" | "linux" | "android" | "ios" | "blackberry" | "unknown"] // type string
    }
};

~~~~~~~

### nodejs

#### install

~~~~~~~

npm install ua_parser

~~~~~~~

~~~~~~~

var util = require("ua_parser").util;
var ua = util.userAgent(USERAGENT_STRING);

ua = {
    ua,
    browser: {
        [msie | safari | firefox | chrome | opera | android | iphone | ipad | ipod | polaris | dolfin | unknown] : true,
        name: ["msie" | "safari" | "firefox" | "chrome" | "opera" | "android" | "iphone" | "ipad" | "ipod" | "polaris" | "dolfin" | "unknown"], // type string
        version: {
            info,  // type string (version full string : [major.minor.patch])
            major, // type string
            minor, // type string
            patch  // type string
        }
    },
    platform : ["pc" | "tablet" | "mobile"], // type string
    os : {
        ["windows" | "mac" | "linux" | "android" | "ios" | "blackberry" | "unknown"] : true,
        name : ["windows" | "mac" | "linux" | "android" | "ios" | "blackberry" | "unknown"] // type string
    }
};

~~~~~~~