const addFlag = require('./index').addFlag;

describe('test basic usage - Japan', () => {
    test('test keyword - 东京', () => {
        expect(addFlag("BGP 上海-东京 [1.5]")).toBe("🇯🇵 BGP 上海-东京 [1.5]");
        expect(addFlag("BGP 上海-东京 [1.5]")).toBe("🇯🇵 BGP 上海-东京 [1.5]");
    });

    test('test keyword - 日本', () => {
        expect(addFlag("日本 - AZURE 01")).toBe("🇯🇵 日本 - AZURE 01");
    });

    test('test traditional chinese - 美國', () => {
        expect(addFlag("專線-上海-美國")).toBe("🇺🇸 專線-上海-美國");
    })
});
