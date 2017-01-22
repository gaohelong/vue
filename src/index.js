// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'; // 引入vue.
import VueRouter from 'vue-router'; // 引入vue-router.
import store from './vuex/'; // 引入全局vuex.
// import Login from './components/Login'; // 引入组件.
import filters from './filter/index'; // 引入过滤器.
import routes from './router/index'; // 引入路由配置.

Vue.use(VueRouter);

/* 实例化Vue的filter */
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

/* 实例化VueRouter */
const router = new VueRouter({
    mode: 'history',
    routes
});

/* router beforeEach */
router.beforeEach((to, from, next) => {
    // 改变页面title.
    to.matched.some(record => {
        document.title = record.meta.pageTitle;
        return record.meta.pageTile;
    });

    // 登录验证.
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 异步请求验证登录状态，然后在进行后续操作.

        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.state.user.userInfo.id) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            });
        } else {
            next();
        }
    } else {
        next(); // 确保一定要调用 next()
    }
});

/* keyCode Config */
Vue.config.keyCodes = {
    p: 112
};

/* 创建和挂载根实例 */
new Vue({
    router,
    store,
    // el: '#login',
    // template: '<Login/>',
    // components: {
    //     Login
    // }
    beforeCreate() {
        console.log('main-创建完成前.');
    },
    created() {
        console.log('main-创建完成.');
    },
    beforeMount() {
        console.log('main-安装之前.');
    },
    mounted() {
        console.log('main-安装完成.');
    },

    /* 频繁调用 */
    beforeUpdate() {
        console.log('main-更新之前.');
    },
    updated() {
        console.log('main-更新完成.');
    },

    beforeDestroy() {
        console.log('main-释放之前.');
    },
    destroyed() {
        console.log('main-释放完成.');
    }
}).$mount('#login');
