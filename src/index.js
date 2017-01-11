// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 引入vue.
import Vue from 'vue'

// 引入vue-router.
import VueRouter from 'vue-router'

// 引入全局vuex.
import store from './vuex/global'

// 引入组件.
// import Login from './components/Login'

// 引入过滤器.
import filters from './filter/index'

// 引入路由配置.
import routes from './router/index'

Vue.use(VueRouter)

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

// 实例化VueRouter
const router = new VueRouter({
  mode: 'history',
  routes
})

// 创建和挂载根实例.
new Vue({
  router,
  store
  // el: '#login',
  // template: '<Login/>',
  // components: {
  //   Login
  // }
}).$mount('#login')
