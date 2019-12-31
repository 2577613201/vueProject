import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);



import home from '../components/home'


  const routes= [

 		{ path: '/', redirect: '/home'},//设置默认指向的路径
    {
      path: '/home',
      component: home
    },
   
  ]
const router = new VueRouter({
  //mode:'history',   //去掉hash  不用/#
  routes:routes,    // （缩写）相当于 routes: routes  属性的简写
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;