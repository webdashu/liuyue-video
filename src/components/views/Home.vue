<script setup>
import { useRouter } from 'vue-router'
import router_utils from '../../../router/utils';
import { ref } from 'vue';
import CanvasVideo from './CanvasVideo.vue';
router_utils
const router = useRouter();
function goVideo() {
    router.push({
        name:'video',
        query:{
            video_url: '/src/assets/video/dome.mp4'
        }
    })
}
function goCanvasVideo(){
    router.push({
        name:'canvasvideo',
    })
}
onMounted:()=>{

}
component:{
    CanvasVideo
}
const width = ref(1024);
const height = ref(768);
</script>
<template>
    <div>
        <CanvasVideo :videowidth="width" :videoheight="height" :isshow="true"></CanvasVideo>
        <button v-on:click="goVideo">点击打开video页面</button>
        <button v-on:click="goCanvasVideo">点击打开canvas-video页面</button>
    </div>
</template>
<style>
body{background-color: black;}
</style>