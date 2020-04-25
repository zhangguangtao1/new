import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const route = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta:{
        isShow:false//用于控制是否显示公共部分
      },
      component: () => import('@/pages/login/login')
    },
    {
      path: '/',
      redirect: '/login',
      meta:{
        isShow:true//用于控制是否显示公共部分
      }
    },
    {
      path: '/index',
      name: 'Index',
      meta:{
        isShow:true//用于控制是否显示公共部分
      },
      component: () => import('@/pages/index/index')
    }
  ]
});
export default route
