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
};

const KEYWORDS = {
    'HK': ['香港', "港"],
    'JP': ['日本', '东京', "日"],
    'KR': ['韩国', '首尔' , "韩", "韓國"],
    'US': ['美国', '洛杉矶', '硅谷', "美", "美國"],
    'SG': ['新加坡', '狮城', "新"],
    'DE': ['德国', '法兰克福', "德"],
    'UK': ['英国', '伦敦'],
    'TW': ['台湾', "台北", "台", "台灣"],
    'CA': ['加拿大'],
    'BR': ['巴西'],
    'AU': ['澳大利亚'],
    'FR': ['法国'],
    'TR': ['土耳其'],
    'MO': ['澳门'],
    'RU': ['俄罗斯'],
    'AE': ['阿联酋']
};

const searchKeyword = (name) => {
    let flag = 'CN';
    for (let [code, places] of Object.entries(KEYWORDS)) {
        for (let place of places) {
            if (name.includes(place)) {
                return code;
            }
        }
    }
    return flag;
}

const addFlag = (name) => {
    const flag = EmojiFlag[searchKeyword(name)];
    return `${flag} ${name}`
}

exports.addFlag = addFlag;