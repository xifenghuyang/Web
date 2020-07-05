import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "",
    redirect: '/home',
  }, {
    path: "/home",
    // props: true,
    component: () => import('@/components/MainPage'),
    children: [
      {
        path: "",
        redirect: 'analysis',
      }, {
        path: "analysis",
        component: () => import('@/components/AlarmAnalysis'),
      }, {
        path: "influence",
        component: () => import('@/components/Influence')
      }, {
        path: "solution",
        component: () => import('@/components/Solution')
      }
    ]
  }, {
    path: "/cases",
    component: () => import('@/components/CaseEditor'),
  }

]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router;
