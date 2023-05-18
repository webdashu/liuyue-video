import { encrypt, decrypt } from 'crypto-js/aes'
import { parse } from 'crypto-js/enc-utf8'
import pkcs7 from 'crypto-js/pad-pkcs7'
import ECB from 'crypto-js/mode-ecb'
import UTF8 from 'crypto-js/enc-utf8'
import { isArray, isNull, isUndefined } from 'lodash-es'
const AES_KEY = '11111111';
const AES_IV = '00000000';
let router_utils = {
    get AES_KEY() {
        return parse(AES_KEY);
    },
    set AES_KEY(val) {
        AES_KEY = parse(val);
    },
    get AES_IV() {
        return AES_IV;
    },
    set AES_IV(val) {
        return parse(val);
    },
    get getOptions() {
        return {
            mode: ECB,
            padding: pkcs7,
            iv: this.AES_IV
        }
    },
    encryptByAES: (val) => {
        return encrypt(val, router_utils.AES_KEY, router_utils.getOptions).toString()
    },
    decryptByAES: (val) => {
        return decrypt(val, router_utils.AES_KEY, router_utils.getOptions).toString(UTF8);
    },
    stringifyQuery: (val) => {
        if (!val) return ''
        const result = Object.keys(val)
            .map((key) => {
                const value = val[key]
                if (isUndefined(value)) return ''
                if (isNull(value)) return key
                if (isArray(value)) {
                    const resArray = []
                    value.forEach((item) => {
                        if (isUndefined(item)) return
                        if (isNull(item)) {
                            resArray.push(key)
                        } else {
                            resArray.push(key + '=' + item)
                        }
                    })
                    return resArray.join('&')
                }

                return `${key}=${value}`
            })
            .filter((x) => x.length > 0)
            .join('&')

        return result ? `?${router_utils.encryptByAES(result)}` : ''
    },
    parseQuery: (val) => {
        const res = {};
        val = val.trim().replace(/^(\?|#|&)/, '')
        if (!val) return res
        
        val.split('&').forEach((param) => {
            const parts = param.replace(/\+/g, ' ').split('=')
            const key = parts.shift()
            const val = parts.length > 0 ? parts.join('=') : null
            if (!isUndefined(key)) {
                if (isUndefined(res[key])) {
                    res[key] = val
                    console.log(res);
                }
            }
        })
        return res  ? `?${router_utils.decryptByAES(res)}` : ''
    }
}
export default router_utils