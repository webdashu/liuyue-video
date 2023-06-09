'use strict'
import { ref,nextTick } from "vue";
import utils from "./utils";
const canvas = {
    prototoype() {
        this.CanVasID;
        this.CanVasEl;
        this.Video;
        this.Options;
    },
    get CanVasID() {
        return this.CanVasID;
    },
    get CanVasEl() {
        return this.CanVasEl;
    },
    get Video() {
        return this.Video;
    },
    CanVasTemplate() {

    },
    setCanVasTemplate(Options={
        video: {
            width: 0,
            height: 0,
        },
        canvas: {
            width: 0,
            height: 0
        }
    }) {
        return utils.toTemplate('<video id="liuyue-video" width=' + Options.video.width + ' height=' + Options.video.height + ' x5-video-player-type="h5-page" controls="controls" controlslist="nofullscreen" style="object-fit:cover;" src="/src/assets/video/dome.mp4"></video>')
    },
    setFileStyle() {

    },
    toCanvas2D(ctx) {
        return ctx.getContext('2d');
    },
    drawImages(ctx,video,x,y,w,h) {
        return this.toCanvas2D(ctx).drawImage(video, x, y, w, h);
    },
    toDataURL(ctx){
        return ctx.toDataURL('image/jpg');
    },
    toMedia(){}

}

export default canvas