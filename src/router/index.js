import Vue from 'vue'
import VueRouter from 'vue-router'
import DataList from '../components/DataList'
import Alert from '../components/Alert'
import AddContact from '../components/AddNewContact'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'DataList',
    component: DataList
  },
  {
    path: '/alert',
    name: 'alert',
    component: Alert
  },
  {
    path: '/addContact',
    name: 'addContact',
    component: AddContact
  }
]

const router = new VueRouter({
  routes
})

export default router
