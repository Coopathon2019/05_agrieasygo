import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/Homepage'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import upload from '../components/upload'
import tupload from '../components/tupload'
import message from '../components/message'
import info from '../components/info'
import infoall from '../components/infoall'
import test from '../components/test'

import farmerhome from '../components/farmer/farmerhome'

import studenthome from '../components/student/studenthome'
import course from '../components/student/course'
import album from '../components/student/album'
import diary from '../components/student/diary'
import question from '../components/student/question'
import question1 from '../components/student/question1'

import teacherhome from '../components/teacher/teacherhome'



Vue.use(Router)

const router = new Router({

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition && to.meta.keepAlive) {
            return savedPosition;
        }
        return { x: 0, y: 0 };
    },


    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        {
            path: '/',
            name: 'home',
            component: home
        },

        {
            path: '/login',
            name: 'login',
            component: Login
        },

        {
            path: '/register',
            name: 'register',
            component: Register
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },

        {
            path: '/info',
            name: 'info',
            component: info,
            meta: {
                title: '媒合配對資訊',
            }
        },

        {
            path: '/infoall',
            name: 'infoall',
            component: infoall,
            meta: {
                title: '課程資訊',
            }
        },

        {
            path: '/test',
            name: 'test',
            component: test,
            meta: {
                title: '測試業面',
            }
        },


        {
            path: 'https://fae.coa.gov.tw/search.php?unit=A&search_style=advanced',
            name: 'platform',
            meta: {
                title: '食農教育平台',
            }
        },

        {
            path: '/farmer',
            name: 'farmer',
            component: farmerhome,
            meta: {
                title: '農民首页',
                role: "農民"
            }
        },

        {
            path: '/farmer/upload',
            name: 'upload',
            component: upload,
            meta: {
                title: '農民上傳',
            }
        },

        {
            path: '/user',
            name: 'student',
            component: studenthome,
            meta: {
                title: '學生首页',
                role: "學生"
            }
        },

        {
            path: '/user/course',
            name: 'course',
            component: course,
            meta: {
                title: '學生課程',
            }
        },

        {
            path: '/user/class/album',
            name: 'album',
            component: album,
            meta: {
                title: '學生課程相簿',
            }
        },

        {
            path: '/user/class/diary',
            name: 'diary',
            component: diary,
            meta: {
                title: '學生課程日記',
            }
        },

        {
            path: '/user/class/question',
            name: 'question',
            component: question,
            meta: {
                title: '學生課程問題',
            }
        },

        {
            path: '/user/class/query',
            name: 'uploadquestion',
            component: question1,
            meta: {
                title: '學生提問課程問題',
            }
        },

        {
            path: '/teacher',
            name: 'teacher',
            component: teacherhome,
            meta: {
                title: '食農教育者',
                role: "老師"
            }
        },

        {
            path: '/teacher/tupload',
            name: 'tupload',
            component: tupload,
            meta: {
                title: '食農教育者上傳',
            }
        },


        {
            path: '/message',
            name: 'message',
            component: message,
            meta: {
                title: '問題對話框',
            }
        }

    ]

})





export default router
