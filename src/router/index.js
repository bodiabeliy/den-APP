import Vue from 'vue'
import VueRouter from 'vue-router'
import PatentsList from '../components/PatentsList'
import DetalizeInfo from '../components/DetalizeInfo'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'List',
    component: PatentsList
  },
  {
    path: '/DetalizeInfo',
    name: 'info',
    component: DetalizeInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
