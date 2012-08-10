/* global describe: true, beforeEach, it
*/
var util = require("../../js/userAgent.js").util;

describe("userAgent.js", function () {
    var UA_GALAXY_NEXUS = "Mozilla/5.0 (Linux; U; Android 4.0.1; ko-kr; Galaxy Nexus Build/ITL41F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        UA_IPHONE_4S = "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3",
        UA_IPAD = "Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; ko-kr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5",
        UA_GALAXY_TAB_10 = "Mozilla/5.0 (Linux; U; Android 3.1; ko-kr; SHW-M380S Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13",
        UA_BADA_3 = "Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8530/M210SKSKD1; U; Bada/1.2; ko-kr) AppleWebKit/534.20 (KHTML, like Gecko) Dolfin/2.2 Mobile WVGA SMM-MMS/1.2.0 OPN-B",
        UA_POLARIS = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0;800*600;POLARIS 6.0;em1.0;lgtelecom;EB10-20080721-703976395;LG-LH2300;0)",
        UA_MOBI_FIREFOX = "Mozilla/5.0 (Android; Linux armv7l; rv:9.0) Gecko/ Firefox/9.0 Fennec/9.0",
        UA_MOBI_IE7 = "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.5; Trident/3.1; IEMobile/7.0; NOKIA; Lumia 710)",
        UA_MOBI_IE9 = "Mozilla/4.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/3.1; IEMobile/9.0; NOKIA; Lumia 710)",
        UA_MOBI_OPERA = "Opera/9.80 (Android 4.0.1; Linux; Opera Mobi/ ADR-1111101157; U; en) Presto/2.9.201 Version/11.50";
        
    var UA_IE6 = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
        UA_IE7 = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)",
        UA_IE8 = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)",
        UA_IE9 = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",
        UA_CHROME = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.46 Safari/536.5",
        UA_SAFARI = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.5 Safari/534.55.3",
        UA_FIREFOX = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0",
        UA_OPERA = "Opera/9.80 (Windows NT 6.1; WOW64; U; ko) Presto/2.10.229 Version/11.62",
        UA_CHROME_MAC = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.57 Safari/537.1",
        UA_SAFARI_MAC = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25";
    
    describe('Identify user-agents', function () {
        describe('Identify user-agents of android mobile device', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_GALAXY_NEXUS);
            });
            it('should identify browser : android', function () {
                expect(ua.browser.android).toBeTruthy();
            });
            it('should identify browser version : 4.0.1', function () {
                expect(ua.browser.version.major).toBe("4");
                expect(ua.browser.version.minor).toBe("0");
                expect(ua.browser.version.patch).toBe("1");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.platform).toBe("mobile");
            });
            it('should identify OS : android', function () {
                expect(ua.os.android).toBeTruthy();
            });
        });

        describe('Identify user-agents of iphone mobile device', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_IPHONE_4S);
            });
            it('should identify browser : iphone', function () {
                expect(ua.browser.iphone).toBeTruthy();
            });
            it('should identify browser version : 5.0.1', function () {
                expect(ua.browser.version.major).toBe("5");
                expect(ua.browser.version.minor).toBe("0");
                expect(ua.browser.version.patch).toBe("1");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.platform).toBe("mobile");
            });
            it('should identify OS : ios', function () {
                expect(ua.os.ios).toBeTruthy();
            });
        });
        describe('Identify user-agents of ipad tablet device', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_IPAD);
            });
            it('should identify browser : ios', function () {
                expect(ua.browser.ipad).toBeTruthy();
            });
            it('should identify browser version : 4.3.2', function () {
                expect(ua.browser.version.major).toBe("4");
                expect(ua.browser.version.minor).toBe("3");
                expect(ua.browser.version.patch).toBe("2");
            });
            it('should identify Platform : tablet', function () {
                expect(ua.platform).toBe("tablet");
            });
            it('should identify OS : ios', function () {
                expect(ua.os.ios).toBeTruthy();
            });
        });
        describe('Identify user-agents of android tablet device', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_GALAXY_TAB_10);
            });
            it('should identify browser : android', function () {
                expect(ua.browser.android).toBeTruthy();
            });
            it('should identify browser version : 3.1', function () {
                expect(ua.browser.version.major).toBe("3");
                expect(ua.browser.version.minor).toBe("1");
            });
            it('should identify Platform : tablet', function () {
                expect(ua.platform).toBe("tablet");
            });
            it('should identify OS : android', function () {
                expect(ua.os.android).toBeTruthy();
            });
        });

        describe('Identify user-agents of bada(dolfin) phone', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_BADA_3);
            });
            it('should identify browser : dolfin', function () {
                expect(ua.browser.dolfin).toBeTruthy();
            });
            it('should identify browser version : 2.2', function () {
                expect(ua.browser.version.major).toBe("2");
                expect(ua.browser.version.minor).toBe("2");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.platform).toBe("mobile");
            });
            it('should identify OS : unknown', function () {
                expect(ua.os.unknown).toBeTruthy();
            });
        });

        describe('Identify user-agents of polaris browser', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_POLARIS);
            });
            it('should identify Browser : polaris', function () {
                expect(ua.browser.polaris).toBeTruthy();
            });
            it('should identify Platform : mobile', function () {
                expect(ua.platform).toBe("mobile");
            });
            it('should identify OS : unknown', function () {
                expect(ua.os.unknown).toBeTruthy();
            });
        });

        describe('Identify user-agents of mobile ie7', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_MOBI_IE7);
            });
            it('should identify Browser : msie', function () {
                expect(ua.browser.msie).toBeTruthy();
            });
            it('should identify Platform : mobile', function () {
                expect(ua.platform).toBe("mobile");
            });
            it('should identify browser version : 7.0', function () {
                expect(ua.browser.version.major).toBe("7");
                expect(ua.browser.version.minor).toBe("0");
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });
        describe('Identify user-agents of mobile ie9', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_MOBI_IE9);
            });
            it('should identify Browser : msie', function () {
                expect(ua.browser.msie).toBeTruthy();
            });
            it('should identify Platform : mobile', function () {
                expect(ua.platform).toBe("mobile");
            });
            it('should identify browser version : 9.0', function () {
                expect(ua.browser.version.major).toBe("9");
                expect(ua.browser.version.minor).toBe("0");
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });

        describe('Identify user-agents of opera mobile', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_MOBI_OPERA);
            });
            it('should identify Browser : opera', function () {
                expect(ua.browser.opera).toBeTruthy();
            });
            it('should identify Platform : mobile', function () {
                expect(ua.platform).toBe("mobile");
            });
            it('should identify browser version : 11.5', function () {
                expect(ua.browser.version.major).toBe('11');
                expect(ua.browser.version.minor).toBe('50');
            });
            it('should identify OS : android', function () {
                expect(ua.os.android).toBeTruthy();
            });
        });

        
        
        describe('Identify user-agents of mobile firefox', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_MOBI_FIREFOX);
            });
            it('should identify Browser : firefox', function () {
                expect(ua.browser.firefox).toBeTruthy();
            });
            it('should identify Platform : mobile', function () {
                expect(ua.platform).toBe("mobile");
            });
            it('should identify browser version : 9.0', function () {
                expect(ua.browser.version.major).toBe('9');
                expect(ua.browser.version.minor).toBe('0');
            });
            it('should identify OS : android', function () {
                expect(ua.os.android).toBeTruthy();
            });
        });

        describe('Identify user-agents of safari', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_SAFARI);
            });
            it('should identify Browser : safari', function () {
                expect(ua.browser.safari).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 5.1.5', function () {
                expect(ua.browser.version.major).toBe("5");
                expect(ua.browser.version.minor).toBe("1");
                expect(ua.browser.version.patch).toBe("5");
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });

        describe('Identify user-agents of firefox', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_FIREFOX);
            });
            it('should identify Browser : firefox', function () {
                expect(ua.browser.firefox).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 12.0', function () {
                expect(ua.browser.version.major).toBe('12');
                expect(ua.browser.version.minor).toBe('0');
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });

        describe('Identify user-agents of chrome', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_CHROME);
            });
            it('should identify Browser : chrome', function () {
                expect(ua.browser.chrome).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 19.0', function () {
                expect(ua.browser.version.major).toBe('19');
                expect(ua.browser.version.minor).toBe('0');
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });

        describe('Identify user-agents of opera', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_OPERA);
            });
            it('should identify Browser : chrome', function () {
                expect(ua.browser.opera).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 11.62', function () {
                expect(ua.browser.version.major).toBe('11');
                expect(ua.browser.version.minor).toBe('62');
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });

        describe('Identify user-agents of msie 6', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_IE6);
            });
            it('should identify Browser : msie 6', function () {
                expect(ua.browser.msie).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 6.0', function () {
                expect(ua.browser.version.major).toBe('6');
                expect(ua.browser.version.minor).toBe('0');
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });

        describe('Identify user-agents of msie 7', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_IE7);
            });
            it('should identify Browser : msie 7', function () {
                expect(ua.browser.msie).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 7.0', function () {
                expect(ua.browser.version.major).toBe('7');
                expect(ua.browser.version.minor).toBe('0');
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });

        describe('Identify user-agents of msie 8', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_IE8);
            });
            it('should identify Browser : ie6', function () {
                expect(ua.browser.msie).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 8.0', function () {
                expect(ua.browser.version.major).toBe('8');
                expect(ua.browser.version.minor).toBe('0');
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });
        
        describe('Identify user-agents of msie 9', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_IE9);
            });
            it('should identify Browser : msie', function () {
                expect(ua.browser.msie).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 9.0', function () {
                expect(ua.browser.version.major).toBe('9');
                expect(ua.browser.version.minor).toBe('0');
            });
            it('should identify OS : windows', function () {
                expect(ua.os.windows).toBeTruthy();
            });
        });

        describe('Identify user-agents of chrome on Mac', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_CHROME_MAC);
            });
            it('should identify Browser : chrome', function () {
                expect(ua.browser.chrome).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 21.0', function () {
                expect(ua.browser.version.major).toBe('21');
                expect(ua.browser.version.minor).toBe('0');
            });
            it('should identify OS : mac', function () {
                expect(ua.os.mac).toBeTruthy();
            });
        });
        
        describe('Identify user-agents of safari on Mac', function () {
            var ua;
            beforeEach(function() {
                ua = util.userAgent(UA_SAFARI_MAC);
            });
            it('should identify Browser : safari', function () {
                expect(ua.browser.safari).toBeTruthy();
            });
            it('should identify Platform : pc', function () {
                expect(ua.platform).toBe("pc");
            });
            it('should identify browser version : 5.1.5', function () {
                expect(ua.browser.version.major).toBe("6");
                expect(ua.browser.version.minor).toBe("0");
                expect(ua.browser.version.patch).toBe("0");
            });
            it('should identify OS : mac', function () {
                expect(ua.os.mac).toBeTruthy();
            });
        });
    });
});
