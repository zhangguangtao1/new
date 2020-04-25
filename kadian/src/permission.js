import router from './router'
// 路由导航守卫
router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem("token");
  if (token) {
    if (to.path === '/login') {
      // 如果是已经登录，跳转到首页
      next({ path: '/index' })
    }else{
      next();
    };
  } else {
    if(to.path == "/login"){
      next();
    }else{
      /* 没有token，就是没有登录,跳转到登录页面*/
      next({ path: '/login' });
    }
  };
})
