# ua_parser

check browser and browser's version from userAgent

[![Build Status](https://travis-ci.org/html5crew/ua_parser.svg)](https://travis-ci.org/html5crew/ua_parser)

[![NPM Stats](https://nodei.co/npm/ua_parser.png?downloads=true&downloadRank=true)](https://npmjs.org/packages/ua_parser/)


## usage

### browser

~~~~~~~

var ua = daumtools.userAgent(); // or window.ua_result

// result
{
    ua,
    browser: {
        [msie | edge | safari | firefox | chrome | opera | android | iphone | ipad | ipod | polaris | dolfin | unknown] : true,
        name: "msie" | "edge" | "safari" | "firefox" | "chrome" | "opera" | "android" | "iphone" | "ipad" | "ipod" | "polaris" | "dolfin" | "unknown", // type string
        version: {
            info,  // type string (version full string : [major.minor.patch])
            major, // type string
            minor, // type string
            patch  // type string
        }
    },
    platform : ["pc" | "tablet" | "mobile"], // type string
    os : {
        ["windows" | "mac" | "linux" | "android" | "ios" | "blackberry" | "chrome" | "unknown"] : true,
        name : "windows" | "mac" | "linux" | "android" | "ios" | "blackberry" | "chrome" | "unknown" // type string
    },
    app: {
        isApp: true | false, // type boolen
        name: "fxios" | "crios", // type string, fxios is firefox of iOS, crios is chrome of iOS.
        version: {
            info,  // type string (version full string : [major.minor.patch])
            major, // type string
            minor, // type string
            patch  // type string
        }
    }
}

~~~~~~~

### nodejs

#### install

~~~~~~~

npm install ua_parser

~~~~~~~

~~~~~~~

var result = require("ua_parser").userAgent(USERAGENT_STRING);

// result
{
    ua,
    browser: {
        [msie | edge | safari | firefox | chrome | opera | android | iphone | ipad | ipod | polaris | dolfin | unknown] : true,
        name: "msie" | "edge" | "safari" | "firefox" | "chrome" | "opera" | "android" | "iphone" | "ipad" | "ipod" | "polaris" | "dolfin" | "unknown", // type string
        version: {
            info,  // type string (version full string : [major.minor.patch])
            major, // type string
            minor, // type string
            patch  // type string
        }
    },
    platform : ["pc" | "tablet" | "mobile"], // type string
    os : {
        ["windows" | "mac" | "linux" | "android" | "ios" | "blackberry" | "chrome" | "unknown"] : true,
        name : "windows" | "mac" | "linux" | "android" | "ios" | "blackberry" | "chrome" | "unknown" // type string
    },
    app: {
        isApp: true | false, // type boolen
        name: "fxios" | "crios", // type string, fxios is firefox of iOS, crios is chrome of iOS.
        version: {
            info,  // type string (version full string : [major.minor.patch])
            major, // type string
            minor, // type string
            patch  // type string
        }
    }
}

~~~~~~~

[![NPM](https://nodei.co/npm-dl/ua_parser.png)](https://nodei.co/npm/ua_parser/)
