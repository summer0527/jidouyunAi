import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    noAuth: true,
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/system-user',
                name: 'system-user',
                meta: {
                    title: '用户管理',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "system-user" */ '../views/system/user.vue'),
            },
            {
                path: '/system-role',
                name: 'system-role',
                meta: {
                    title: '角色管理',
                    permiss: '12',
                },
                component: () => import(/* webpackChunkName: "system-role" */ '../views/system/role.vue'),
            },
            {
                path: '/system-menu',
                name: 'system-menu',
                meta: {
                    title: '菜单管理',
                    permiss: '13',
                },
                component: () => import(/* webpackChunkName: "system-menu" */ '../views/system/menu.vue'),
            },
            {
                path: '/dify-code',
                name: 'difycode',
                meta: {
                    title: '代码生成助手',
                    permiss: '31',
                },
                component: () => import(/* webpackChunkName: "dify-code" */ '../views/table/dify-code.vue'),
            },
            {
                path: '/dify-qa',
                name: 'dify-qa',
                meta: {
                    title: '研发问题助手',
                    permiss: '32',
                },
                component: () => import(/* webpackChunkName: "dify-qa" */ '../views/table/dify-qa.vue'),
            },
            {
                path: '/dify-memory',
                name: 'dify-memory',
                meta: {
                    title: '对话记忆',
                    permiss: '41',
                },
                component: () => import(/* webpackChunkName: "dify-memory" */ '../views/table/dify-memory.vue'),
            },
            {
                path: '/dify-teacher',
                name: 'dify-teacher',
                meta: {
                    title: '教案生成助手',
                    permiss: '42',
                },
                component: () => import(/* webpackChunkName: "dify-teacher" */ '../views/table/dify-teacher.vue'),
            },

            {
                path: '/dify-customer',
                name: 'dify-customer',
                meta: {
                    title: '智能客服助手',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "dify-customer" */ '../views/table/dify-customer.vue'),
            },
            {
                path: '/ucenter',
                name: 'ucenter',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "ucenter" */ '../views/pages/ucenter.vue'),
            },
            {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    permiss: '291',
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/pages/editor.vue'),
            },
            {
                path: '/markdown',
                name: 'markdown',
                meta: {
                    title: 'markdown编辑器',
                    permiss: '292',
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/pages/markdown.vue'),
            },
           
            {
                path: '/import',
                name: 'import',
                meta: {
                    title: '导入Excel',
                    permiss: '33',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/table/import.vue'),
            },
            {
                path: '/theme',
                name: 'theme',
                meta: {
                    title: '主题设置',
                    permiss: '7',
                },
                component: () => import(/* webpackChunkName: "theme" */ '../views/pages/theme.vue'),
            },
            {
                path: '/calendar',
                name: 'calendar',
                meta: {
                    title: '日历',
                    permiss: '24',
                },
                component: () => import(/* webpackChunkName: "calendar" */ '../views/element/calendar.vue'),
            },
            {
                path: '/watermark',
                name: 'watermark',
                meta: {
                    title: '水印',
                    permiss: '25',
                },
                component: () => import(/* webpackChunkName: "watermark" */ '../views/element/watermark.vue'),
            },
            {
                path: '/carousel',
                name: 'carousel',
                meta: {
                    title: '走马灯',
                    permiss: '23',
                },
                component: () => import(/* webpackChunkName: "carousel" */ '../views/element/carousel.vue'),
            },
            {
                path: '/tour',
                name: 'tour',
                meta: {
                    title: '分步引导',
                    permiss: '26',
                },
                component: () => import(/* webpackChunkName: "tour" */ '../views/element/tour.vue'),
            },
            {
                path: '/steps',
                name: 'steps',
                meta: {
                    title: '步骤条',
                    permiss: '27',
                },
                component: () => import(/* webpackChunkName: "steps" */ '../views/element/steps.vue'),
            },
            {
                path: '/form',
                name: 'forms',
                meta: {
                    title: '表单',
                    permiss: '21',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/element/form.vue'),
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    title: '上传',
                    permiss: '22',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/element/upload.vue'),
            },
            {
                path: '/statistic',
                name: 'statistic',
                meta: {
                    title: '统计',
                    permiss: '28',
                },
                component: () => import(/* webpackChunkName: "statistic" */ '../views/element/statistic.vue'),
            },
        ],
    },
    {
        path: '/login',
        name:'Login',
        meta: {
            title: '登录',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/pages/login.vue'),
    },
    {
        path: '/register',
        name:'Register',
        meta: {
            title: '注册',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "register" */ '../views/pages/register.vue'),
    },
    {
        path: '/reset-pwd',
        name:'Resetpwd',
        meta: {
            title: '重置密码',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "reset-pwd" */ '../views/pages/reset-pwd.vue'),
    },
    {
        path: '/403',
        meta: {
            title: '没有权限',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/pages/403.vue'),
    },
    {
        path: '/404',
        meta: {
            title: '找不到页面',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "404" */ '../views/pages/404.vue'),
    },
    { path: '/:path(.*)', redirect: '/404' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    const role = localStorage.getItem('s_name');
    const permiss = usePermissStore();
console.log('=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=')
    // if (!role && to.meta.noAuth !== true) {
        
    //     next('/login');
    // } else if (typeof to.meta.permiss == 'string' && !permiss.key.includes(to.meta.permiss)) {
    //     // 如果没有权限，则进入403
    //     next('/403');
    // } else {
    //     next();
    // }

    const isAuthenticated = localStorage.getItem('token'); 
    if (to.name !== 'Login'&&to.name !== 'Register'&&to.name !== 'Resetpwd' && !isAuthenticated) {
      // 用户未登录且访问的不是登录页面，重定向到登录页面
      next({ name: 'Login' }); 
    }else if ((to.name == 'Register'||to.name=='Resetpwd')&& !isAuthenticated){
        // next({ name: 'Register' }); 
        next(); 
    }else if (to.name === 'Login' && isAuthenticated) {
      // 用户已登录且访问的是登录页面，重定向到首页或其他合适的页面
      next({ name: 'Home' }); 
    } else {
      // 用户已登录且访问的是其他允许访问的页面，或者用户未登录且访问的是登录页面，直接放行
      next(); 
    }
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
