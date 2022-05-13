import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/',
      component: () => import('../components/common/Base.vue'),
      meta: {
        title: '公共部分'
      },
      children: [
        {
          path: '/index',
          component: () => import('../components/page/Home.vue'),
          meta: {
            title: '控制台'
          }
        },
        {
          path: '/chart-simple',
          component: () => import('../components/page/EChartsSimple.vue'),
          meta: {
            title: '简单图表'
          }
        },
        {
          path: '/chart-complex',
          component: () => import('../components/page/EChartsComplex.vue'),
          meta: {
            title: '复杂图表'
          }
        },
        {
          path: '/group',
          component: () => import('../components/page/group.vue'),
          meta: {
            title: '小组管理'
          }
        },
        {
          path: '/mine',
          component: () => import('../components/page/mine.vue'),
          meta: {
            title: '个人中心'
          }
        },
        {
          path: '/guide',
          component: () => import('../components/page/guide.vue'),
          meta: {
            title: '农事指导管理'
          }
        },
        {
          path: '/decision',
          component: () => import('../components/page/decision.vue'),
          meta: {
            title: '农事决策管理'
          }
        },
        {
          path: '/flow',
          component: () => import('../components/page/flow.vue'),
          meta: {
            title: '农事流程管理'
          }
        },
        {
          path: '/active',
          component: () => import('../components/page/active.vue'),
          meta: {
            title: '农事活动管理'
          }
        },
        {
          path: '/source',
          component: () => import('../components/page/source.vue'),
          meta: {
            title: '农事资源管理'
          }
        },
        {
          path: '/example',
          component: () => import('../components/page/example.vue'),
          meta: {
            title: '实例管理'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../components/page/Login.vue')
    },
    {
      path: '/reg',
      component: () => import('../components/page/Reg.vue')
    },
    {
      path: '/error',
      component: () => import('../components/page/Error.vue')
    },
    {
      path: '/404',
      component: () => import('../components/page/404.vue')
    }
  ]
})
