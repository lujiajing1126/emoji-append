const addFlag = require('./index').addFlag;

describe('test basic cases', () => {
    test('test keyword - 东京', () => {
        expect(addFlag("BGP 上海-东京 [1.5]")).toBe("🇯🇵 BGP 上海-东京 [1.5]");
        expect(addFlag("BGP 上海-东京 [1.5]")).toBe("🇯🇵 BGP 上海-东京 [1.5]");
    });

    test('test keyword - 日本', () => {
        expect(addFlag("日本 - AZURE 01")).toBe("🇯🇵 日本 - AZURE 01");
    });

    test('test traditional chinese - 美國', () => {
        expect(addFlag("專線-上海-美國")).toBe("🇺🇸 專線-上海-美國");
    });

    test('test yoyu 日用 node - 新加坡', () => {
        expect(addFlag("日用 深圳-狮城 03")).toBe("🇸🇬 日用 深圳-狮城 03");
    });
});

describe('test cases without information of country', () => {
    test('test string of traffic info', () => {
        expect(addFlag("剩余流量：99.14% 793.21GB")).toBe("剩余流量：99.14% 793.21GB");
    });

    test('test string of traffic info', () => {
        expect(addFlag("过期时间：2020-03-11 00:21:58")).toBe("过期时间：2020-03-11 00:21:58");
    });
});