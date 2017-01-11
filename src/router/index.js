// 公共路由懒加载.
const Login = resolve => {
  require.ensure(['../components/login/index.vue'], () => {
    resolve(require('../components/login/index.vue'))
  })
}

const routers = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/list',
    name: 'list',
    // 路由懒加载.
    component (resolve) {
      require.ensure(['../views/modules/test/list.vue'], () => {
        resolve(require('../views/modules/test/list.vue'))
      })
    }
  },
  {
    path: '*',
    component: Login
  }
]

export default routers
