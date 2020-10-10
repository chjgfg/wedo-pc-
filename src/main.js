import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);

Vue.config.productionTip = false;
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {//到哪去,从哪来,然后干嘛
    if (to.meta.requireAuth) {//判断哪个要拦截
      if (sessionStorage.getItem("token") === 'true') {//判断存的变量
        next()//如果是就继续跳转
      } else {//如果不是那就跳转到登录页面
        next({
          path: '/index/login',
          /*query: {redirect: to.fullPath}*/
        })
      }
    } else {//如果不拦截直接跳转
      if (sessionStorage.getItem("token") === 'true') {
        next('/index/mains');
      } else {
        next();
      }
    }
  }
);




new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app');
