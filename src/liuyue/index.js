'use strict'
import { ref, nextTick } from "vue";
import utils from "./utils";

var LiuYue = {};

LiuYue.prototype = Object.prototype;
if (typeof LiuYue == 'object' || !typeof LiuYue == 'function' || !typeof LiuYue == 'undefined') {
    // /* function */
    LiuYue.prototype.isString = function (val) {
        return /string/i.test(typeof val);
    }
    LiuYue.prototype.isObject = function (val) {
        return /object/i.test(typeof val);
    }
    LiuYue.prototype.isFunction = function (val) {
        return /function/i.test(typeof val)
    }
    LiuYue.prototype.isNumber = function (val) {
        return /number/i.test(typeof val);
    }
    LiuYue.prototype.isUndefined = function (val) {
        return /undefined/i.test(typeof val);
    }
    LiuYue.prototype.isBoolean = function (val) {
        return /boolean/i.test(typeof val);
    }
    LiuYue.prototype.log = function (val) {
        return console.log("LiuYue Error Message:" + val);
    }
    LiuYue.prototype.document = function () {
        return Document;
    }
    LiuYue.prototype.Json = function (val) {
        return JSON.stringify(val).replace("\"", "");
    }
} else {
    console.log('LiuYue.js Error');
}
/* main */
export default {
    Option: {},
    get video_url() {
        this.video_url = video_url;
    },
    get prototype() {
        this.prototype = LiuYue.prototype;
    },
    get Options() { return this.Options },
    ui(Options = {
        id: '',
        version: '',
        width: 0,
        height: 0,
        'use-default-poster': '',
        '-webkit-media-controls': '',
        'aria-label': '',
        path:''
    }) {
        Function.call(this.init());
        let video_ref = ref(Options);
        nextTick(() => {
            console.dir(video_ref)
            Object.assign(Option, video_ref);
        })
        let temp = {
            default: utils.toTemplate('<div>' +
                '<video id=' + Options.id + ' width=' + Options.width + ' height=' + Options.height + ' x5-video-player-type="h5-page" controls="controls" controlslist="nofullscreen" style="object-fit:cover;" controlslist="nodownload" src=' + (function () {
                    return `${Options.path}`

                })() + '></video>' +
                '</div>'),
        }
        return {
            default: temp.default,
            readFile: utils.readFile(video_ref.path),
            video_ref
        };
    },
    init() {
        console.log(new Date().getTime());
        return this;
    },
    main: {
    }
}
    ; (function () {

        utils.toTemplate('liuyue-video');

    })()