<script setup>
import Options from '../../liuyue'
import { useRoute } from 'vue-router';
var def = Options;
const router = new useRoute();
var url = router.query.video_url;
var ui = def.ui({
  id:'liuyue-video',
  width:1024,
  height:768,
  version:'0.1',
  'use-default-poster':'',
  'aria-label':'',
  path:url,
})

/**
default concise
*/
var ui_default = ui.default;
ui.readFile
</script>
<template>
<div v-html="ui_default" ref="video_ref"></div>
</template>
<style>
</style>