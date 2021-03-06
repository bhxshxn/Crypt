const AES = require("crypto-js/aes");
const CryptoJS = require("crypto-js");
const key = AES.encrypt("verhardkey", '1').toString();

const hash = (str, sec) => {
    const mainString = AES.encrypt(str, key).toString();
    const secret = AES.encrypt(sec, key).toString();
    return `${secret}.${mainString}`
}

const deHash = (str, sec) => {
    const index = str.indexOf('.')
    const bytesStr = AES.decrypt(str.substring(index + 1, str.length), key);
    const originalText = bytesStr.toString(CryptoJS.enc.Utf8);
    const bytesSec = AES.decrypt(str.substring(0, index), key);
    const originalSec = bytesSec.toString(CryptoJS.enc.Utf8);
    if (originalSec === sec) {
        return originalText;
    } else {
        console.log(originalSec)
        return 'wrong key '
    }
}

module.exports.hash = hash;
module.exports.deHash = deHash;
