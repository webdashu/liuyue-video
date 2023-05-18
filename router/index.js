import { createRouter,createWebHistory} from "vue-router";
import router_utils from '../router/utils'
const stringifyQuery = router_utils.stringifyQuery;
const parseQuery = router_utils.parseQuery;
const route = [{
    path:'/',
    name:'app',
    component:()=>import('../src/App.vue')
},{
    path:'/video',
    name:'video',
    component:()=>import('../src/components/views/Video.vue')
},{
    path:'/home',
    name:'home',
    component:()=>import('../src/components/views/Home.vue')
},{
    path:'/v',
    name:'canvasvideo',
    component:()=>import('../src/components/views/CanvasVideo.vue')
}]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: route,
    scrollBehavior: () => ({ left: 0, top: 0 }),
    stringifyQuery,
    parseQuery,
  })

export default router