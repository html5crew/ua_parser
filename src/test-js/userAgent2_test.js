describe("userAgent.js", function () {
    var UA_GALAXY_NEXUS = "Mozilla/5.0 (Linux; U; Android 4.0.1; ko-kr; Galaxy Nexus Build/ITL41F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        UA_IPHONE_4S = "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3",
        UA_IPAD = "Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; ko-kr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5",
        UA_GALAXY_TAB_10 = "Mozilla/5.0 (Linux; U; Android 3.1; ko-kr; SHW-M380S Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13",
        UA_BADA_3 = "Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8530/M210SKSKD1; U; Bada/1.2; ko-kr) AppleWebKit/534.20 (KHTML, like Gecko) Dolfin/2.2 Mobile WVGA SMM-MMS/1.2.0 OPN-B",
        UA_POLARIS = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0;800*600;POLARIS 6.0;em1.0;lgtelecom;EB10-20080721-703976395;LG-LH2300;0)",
        UA_MOBI_FIREFOX = "Mozilla/5.0 (Android; Linux armv7l; rv:9.0) Gecko/ Firefox/9.0 Fennec/9.0",
        UA_MOBI_IE = "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.5; Trident/3.1; IEMobile/7.0; NOKIA; Lumia 710)",
        UA_MOBI_OPERA = "Opera/9.80 (Android 4.0.1; Linux; Opera Mobi/ ADR-1111101157; U; en) Presto/2.9.201 Version/11.50";
    
    describe('Identify user-agents', function () {
        describe('Identify user-agents of android mobile device', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_GALAXY_NEXUS);
            });
            it('should identify os : android', function () {
                expect(ua.os.type).toBe("android");
            });
            it('should identify Browser : safari', function () {
                expect(ua.browser.type).toBe("safari");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.device.android).toBeTruthy();
                expect(ua.platform).toBe("mobile");
            });
            it('should identify os version : 4.0', function () {
                expect(ua.os.version.major).toBe(4);
                expect(ua.os.version.minor).toBe(0);
            });
        });

        describe('Identify user-agents of iphone mobile device', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_IPHONE_4S);
            });
            it('should identify os : ios', function () {
                expect(ua.os.type).toBe("ios");
            });
            it('should identify Browser : safari', function () {
                expect(ua.browser.type).toBe("safari");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.device.iphone).toBeTruthy();
                expect(ua.platform).toBe("mobile");
            });
            it('should identify os version : 5.0', function () {
                expect(ua.os.version.major).toBe(5);
                expect(ua.os.version.minor).toBe(0);
            });
        });
        describe('Identify user-agents of ipad tablet device', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_IPAD);
            });
            it('should identify os : ios', function () {
                expect(ua.os.type).toBe("ios");
            });
            it('should identify Browser : safari', function () {
                expect(ua.browser.type).toBe("safari");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.device.ipad).toBeTruthy();
                expect(ua.platform).toBe("tablet");
            });
            it('should identify os version : 4.3', function () {
                expect(ua.os.version.major).toBe(4);
                expect(ua.os.version.minor).toBe(3);
            });
        });
        describe('Identify user-agents of android tablet device', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_GALAXY_TAB_10);
            });
            it('should identify os : android', function () {
                expect(ua.os.type).toBe("android");
            });
            it('should identify Browser : safari', function () {
                expect(ua.browser.type).toBe("safari");
            });
            it('should identify Platform : tablet', function () {
                expect(ua.device.android).toBeTruthy();
                expect(ua.platform).toBe("tablet");
            });
            it('should identify os version : 3.1', function () {
                expect(ua.os.version.major).toBe(3);
                expect(ua.os.version.minor).toBe(1);
            });
        });

        describe('Identify user-agents of bada phone', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_BADA_3);
            });
            it('should identify os : bada', function () {
                expect(ua.os.type).toBe("bada");
            });
            it('should identify Browser : dolfin', function () {
                expect(ua.browser.type).toBe("dolfin");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.device.bada).toBeTruthy();
                expect(ua.platform).toBe("mobile");
            });
            it('should identify os version : 1.2', function () {
                expect(ua.os.version.major).toBe(1);
                expect(ua.os.version.minor).toBe(2);
            });
        });

        describe('Identify user-agents of android opera mobile', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_MOBI_OPERA);
            });
            it('should identify os : android', function () {
                expect(ua.os.type).toBe("android");
            });
            it('should identify Browser : opera', function () {
                expect(ua.browser.type).toBe("opera");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.device.android).toBeTruthy();
                expect(ua.platform).toBe("mobile");
            });
            it('should identify os version : 4.0', function () {
                expect(ua.os.version.major).toBe(4);
                expect(ua.os.version.minor).toBe(0);
            });
            it('should identify browser version : 11.5', function () {
                expect(ua.browser.version.major).toBe(11);
                expect(ua.browser.version.minor).toBe(50);
            });
        });

        describe('Identify user-agents of polaris browser', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_POLARIS);
            });
            it('should identify os : unknown', function () {
                expect(ua.os.type).toBe("unknown");
            });
            it('should identify Browser : ie', function () {
                expect(ua.browser.type).toBe("ie");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.device.polaris).toBeTruthy();
                expect(ua.platform).toBe("mobile");
            });
            it('should identify browser version : 6.0', function () {
                expect(ua.browser.version.major).toBe(6);
                expect(ua.browser.version.minor).toBe(0);
            });
        });
        
        describe('Identify user-agents of mobile firefox', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_MOBI_FIREFOX);
            });
            it('should identify os : android', function () {
                expect(ua.os.type).toBe("android");
            });
            it('should identify Browser : firefox', function () {
                expect(ua.browser.type).toBe("firefox");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.device.android).toBeTruthy();
                expect(ua.device.firefox).toBeTruthy();
                expect(ua.platform).toBe("mobile");
            });
            it('should identify os version : 0.0', function () {
                expect(ua.os.version.major).toBe(0);
                expect(ua.os.version.minor).toBe(0);
            });
            it('should identify browser version : 9.0', function () {
                expect(ua.browser.version.major).toBe(9);
                expect(ua.browser.version.minor).toBe(0);
            });
        });
        
        describe('Identify user-agents of mobile ie', function () {
            var ua;
            beforeEach(function() {
                ua = daumUtil.userAgent(UA_MOBI_IE);
            });
            it('should identify os : windows', function () {
                expect(ua.os.type).toBe("windows");
            });
            it('should identify Browser : ie', function () {
                expect(ua.browser.type).toBe("ie");
            });
            it('should identify Platform : mobile', function () {
                expect(ua.device.windows).toBeTruthy();
                expect(ua.device.ie).toBeTruthy();
                expect(ua.platform).toBe("mobile");
            });
            it('should identify browser version : 9.0', function () {
                expect(ua.browser.version.major).toBe(7);
                expect(ua.browser.version.minor).toBe(0);
            });
        });
    });
});