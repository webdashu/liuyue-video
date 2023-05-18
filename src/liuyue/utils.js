'use strict'
const utils = {

    random: function (min, max) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * min + 1, 10);
            case 2:
                return parseInt(Math.random() * (max - min) + min, 10);
            default:
                return 0;
        }
    },
    to16Hash: function (char, length, key) {
        let u = 10, hash = 0;
        String.prototype.hashcode = () => {
            if (arguments.length === 0) return hash;
            for (u; u < length; u++) {
                hash = ((hash << 5));
                hash |= 0;
            }
            return hash;
        }
        let o = char.charCodeAt((hash) + key);
        if (o !== 0 || o !== 'undefined' || o !== undefined) {
            return o;
        }
    },
    UniCode:function(val){
        const HelpClass = [...arguments];
        let tmp_arr = [];
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, HelpClass];
        let num = this.random(0, 999);
        for (var i = 1; i < num; i++) {
            HelpClass.push(i)
        }
        for (var j = 0; j < val.length; j++) {
            arr.push(j);
            var to = this.to16Hash(val, val.length, j);
            if (!isNaN(to)) {
                tmp_arr.push(to)
            }
        }
        return tmp_arr;
    },

    HashTo16: function (arr) {
        var tmp = ''
        var t = '';
        for (var i = 0; i < arr.length; i++) {
            tmp += '&#' + arr[i] + ';';
        }
        var tmp_arr = tmp.match(/&#(\d+);/g);
        for (var j = 0; j < tmp_arr.length; j++) {
            t += String.fromCharCode(tmp_arr[j].replace(/[&#;]/g, ''));
        }
        return t;
    },
    toTemplate: function (val) {
        const HelpClass = [...arguments];
        let tmp_arr = [];
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, HelpClass];
        let num = this.random(0, 999);
        for (var i = 1; i < num; i++) {
            HelpClass.push(i)
        }
        for (var j = 0; j < val.length; j++) {
            arr.push(j);
            var to = this.to16Hash(val, val.length, j);
            if (!isNaN(to)) {
                tmp_arr.push(to)
            }
        }
        return this.HashTo16(tmp_arr).trim();
    },
    readFile:function(Template){
        let bolb = new Blob([Template],{type:'video/mp4'});
        let fs = new FileReader();
        if(fs.readyState === 0){
            fs.onload=(ev)=>{
                this.videoSrc = ev.target.result;
            }
            fs.readAsDataURL(bolb);
        }
    }
}

export default utils