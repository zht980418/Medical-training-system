import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/courseCentre',
    children: [{
      path: 'courseCentre',
      name: 'CourseCentre',
      component: () => import('@/views/courseCentre/index'),
      meta: { title: '课程培训', icon: 'el-icon-s-management' }
    }]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: 'examCentre',
        name: 'ExamCentre',
        component: () => import('@/views/examCentre/index'),
        meta: { title: '考试中心', icon: 'form' }
      }
    ]
  },

  {
    path: '/answering',
    component: Layout,
    meta: { title: '答疑中心', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/platform',
        name: 'Table',
        component: () => import('@/views/answering/platform/index'),
        meta: { title: '答疑平台', icon: 'el-icon-chat-line-square' }
      },
      {
        path: '/quiz',
        name: 'Quiz',
        component: () => import('@/views/answering//quiz/index'),
        meta: { title: '提问', icon: 'el-icon-tickets' }
      }
    ]
  },

  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/message/index'),
        meta: { title: '通知中心', icon: 'nested' }
      }
    ]
  },

  {
    path: 'info',
    component: Layout,
    children: [
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info/index'),
        meta: { title: '个人中心', icon: 'el-icon-user' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
