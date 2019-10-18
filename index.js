require('core-js/es/array/flat-map');
require('core-js/es/object/entries');

const EmojiFlag = {
    'CN': '🇨🇳',
    'TW': '🇨🇳',
    'HK': '🇭🇰',
    'JP': '🇯🇵',
    'KR': '🇰🇷',
    'US': '🇺🇸',
    'SG': '🇸🇬',
    'UK': '🇬🇧',
    'DE': '🇩🇪',
    'AU': '🇦🇺',
    'CA': '🇨🇦',
    'BR': '🇧🇷',
    'FR': '🇫🇷',
    'TR': '🇹🇷',
    'MO': '🇲🇴',
    'RU': '🇷🇺',
    'AE': '🇦🇪',
    'TH': '🇹🇭'
};

const KEYWORDS = {
    'HK': ['香港', '港'],
    'JP': ['日本', '东京', '日', '大阪'],
    'KR': ['韩国', '首尔' , '韩', '韓國'],
    'US': ['美国', '洛杉矶', '硅谷', '费利蒙', '芝加哥', '凤凰城', '达拉斯', '西雅图', '圣何塞', '美', '美國'],
    'SG': ['新加坡', '狮城', '新'],
    'DE': ['德国', '德國', '法兰克福', '德'],
    'UK': ['英国', '伦敦'],
    'TW': ['台湾', '台北', '台中', '新北', '彰化', '台', '台灣'],
    'CA': ['加拿大'],
    'BR': ['巴西'],
    'AU': ['澳大利亚', '悉尼'],
    'FR': ['法国'],
    'TR': ['土耳其'],
    'MO': ['澳门'],
    'TH': ['泰国', '曼谷'],
    'RU': ['俄罗斯', '圣彼得堡'],
    'AE': ['阿联酋']
};

const searchKeyword = (name) => {
    let flag = 'CN';
    let entries = Object.entries(KEYWORDS).flatMap(([code, places]) => {
        return places.map((place) => [code, place])
    }).sort((a, b) => {
        return b[1].length - a[1].length;
    });
    for (let [code, place] of entries) {
        if (name.includes(place)) {
            return code;
        }
    }
    return flag;
}

const addFlag = (name) => {
    const flag = EmojiFlag[searchKeyword(name)];
    return `${flag} ${name}`
}

exports.addFlag = addFlag;