import { createRouter, createWebHistory, createWebHashHistory,RouteRecordRaw } from 'vue-router'
import {
  TrendCharts,Grid,List,
} from '@element-plus/icons-vue'
const routes: Array<RouteRecordRaw> = [

  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children:[
      {
        path: '/echarts',
        name: 'echarts',
        component: () => import('../views/home/childrens/EchartsView.vue'),
        meta:{
          title:"数据展示",
          icon:TrendCharts
        }
      },
      {
        path: '/pay',
        name: 'pay',
        component: () => import('../views/home/childrens/PayList.vue'),
        meta:{
          title:"缴费管理",
          icon:Grid
        }
      },

      {
        path: '/user',
        name: 'user',
        component: () => import('../views/home/childrens/UserOne.vue'),
        meta:{
          title:"住户信息",
          icon:List
        },
        children:[
          {

            path: '/userlist',
            name: 'userlist',
            component: () => import('../views/home/childrens/UserList.vue'),
            meta:{
              classifyTitle:"住户信息",
              title:"住户信息列表"
            }
          },
          {
            path: '/userupdate',
            name: 'userupdate',
            component: () => import('../views/home/childrens/UserUpdate.vue'),
            meta:{
              classifyTitle:"住户信息",
              title:"住户信息修改"
            }
          },
        ]
      },
    ]
  },
  {
    path:"/",
    redirect:"/login"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
