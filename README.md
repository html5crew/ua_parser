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
    	[msie | safari | firefox | chrome | opera | android | iphone | ipad | ipod | polaris | dolfin] : true,
    	version: {
    		major, // type string
    		minor, // type string
    		patch  // type string
    	}
    },
    platform : ["pc" | "tablet" | "mobile"] // type string
};
~~~~~~~

### nodejs

#### install
~~~~~~~
npm install userAgent
~~~~~~~

~~~~~~~
var util = require("userAgent").util;
var ua = util.userAgent(USERAGENT_STRING);

ua = {
    ua,
    browser: {
        [msie | safari | firefox | chrome | opera | android | iphone | ipad | ipod | polaris | dolfin] : true,
        version: {
            major, // type string
            minor, // type string
            patch  // type string
        }
    },
    platform : ["pc" | "tablet" | "mobile"] // type string
};
~~~~~~~