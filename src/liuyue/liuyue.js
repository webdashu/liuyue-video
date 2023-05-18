'use strict'
import Options from './'
import { createApp, toRaw, ref, nextTick } from 'vue'
let app = Options;
let liuyue = {
}
liuyue.set(async () => {
    return new Promise((resolve) => {
        if (createApp()) {
            console.log('Hello world LiuYue.js for Vue3');
            let baseURL = ref(Option);
            nextTick(() => {
                let tmp = toRaw(baseURL.value);
                console.dir(tmp);
            })
            console.log(baseURL);
            axios.create({
                baseURL: baseURL,

            });
            resolve();
        }
    }).then((value) => {
        value = 1;
        console.log(value);
    })
})(app);

export default liuyue

