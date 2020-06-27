import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    path:"",
    redirect:'/about'
  },{
    path:"/about",
    component:() => import('@/components/About')
  },{
    path:"/help",
    component:() => import('@/components/Help')
  }

]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router;
