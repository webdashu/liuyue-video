<script setup>
import canvas from '../../liuyue/canvas';
import { ref, nextTick } from "vue";
const props = defineProps(['videowidth', 'videoheight', 'isshow'])
let ct = null, video = null;
const r = ref([]);
const vi = ref([]);
const a = {};
const b = {};
const w = props.videowidth;
const h = props.videoheight;
var temp = canvas.setCanVasTemplate({
    video: {
        width: props.videowidth,
        height: props.videoheight
    }
});
video = (el) => {
    vi.value.push(el)
}
const setRef = (el) => {
    r.value.push(el);
};
nextTick(() => {
    console.dir(r.value);
    Object.assign(a, r.value)
    ct = a[0];
    ct.setAttribute('width', w);
    ct.setAttribute('height', h);
    Object.assign(b, vi.value);
    video = b[0].lastChild;
});
function drawImages() {
    console.log(canvas.drawImages(ct, video));
    console.log(canvas.toDataURL(ct));
}
</script>
<template>
    <div v-html="temp" :ref="video">
    </div>
    <canvas id="ctx" :ref="setRef" v-bind:width="props.videowidth ? true : ''" v-bind:height="props.videoheight ? true : ''"
        v-bind:isshow="props.isshow"></canvas>
    <button v-on:click="drawImages" v-if="props.isshow">点击截图</button>
</template>
<style>
#ctx {
    position: absolute;
    top: 72px;
    left: 93px;
    z-index: -1;
}
</style>

