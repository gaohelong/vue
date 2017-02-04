// 公共路由懒加载.
const Login = resolve => {
    require.ensure(['../components/login/index.vue'], () => {
        resolve(require('../components/login/index.vue'));
    });
};

const routers = [
    {
        path: '/',
        name: 'login',
        meta: {
            pageTitle: '登录页'
        },
        component: Login
    },
    {
        path: '/list',
        name: 'list',
        meta: {
            pageTitle: '列表页',
            requiresAuth: true
        },
        // 路由懒加载.
        component(resolve) {
            require.ensure(['../views/modules/test/list.vue'], () => {
                resolve(require('../views/modules/test/list.vue'));
            });
        }
    },
    {
        path: '/basicInstance',
        name: 'base',
        meta: {
            pageTitle: '基础页',
            requiresAuth: true
        },
        // 路由懒加载.
        component(resolve) {
            require.ensure(['../views/modules/test/base.vue'], () => {
                resolve(require('../views/modules/test/base.vue'));
            });
        }
    },
    {
        path: '/event',
        name: 'event',
        meta: {
            pageTitle: '事件页',
            requiresAuth: true
        },
        // 路由懒加载.
        component(resolve) {
            require.ensure(['../views/modules/test/event.vue'], () => {
                resolve(require('../views/modules/test/event.vue'));
            });
        }
    },
    {
        path: '/filter',
        name: 'filter',
        meta: {
            pageTitle: '过滤器',
            requiresAuth: true
        },
        // 路由懒加载.
        component(resolve) {
            require.ensure(['../views/modules/test/filter.vue'], () => {
                resolve(require('../views/modules/test/filter.vue'));
            });
        }
    },
    {
        path: '*',
        meta: {
            pageTitle: '登录页'
        },
        component: Login
    }
];

export default routers;
