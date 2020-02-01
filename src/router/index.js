import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Icons from '@/views/Icons'
import Maps from '@/views/Maps'
import Notifications from '@/views/Notifications'
import UserProfile from '@/views/UserProfile'
import TableList from '@/views/TableList'
import Typography from '@/views/Typography'
import Support from '@/views/Support'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'dashboard'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard'
  },
  {
    path: '/icons',
    component: Icons,
    name: 'icons'
  },
  {
    path: '/maps',
    component: Maps,
    name: 'maps'
  },
  {
    path: '/notifications',
    component: Notifications,
    name: 'notifications'
  },
  {
    path: '/UserProfile',
    component: UserProfile,
    name: 'UserProfile'
  },
  {
    path: '/table-list',
    component: TableList,
    name: 'table-list'
  },
  {
    path : '/typography',
    component: Typography,
    name: 'typography'
  },
  {
    path: '/support',
    component: Support,
    name: 'support'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
