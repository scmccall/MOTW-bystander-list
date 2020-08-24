import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {

    }
  },
  {
    path: '/create',
    name: 'Create',
    component: function () {
      return import("../components/CreateBystander");
    }
  },
  {
    path: '/view',
    name: 'View',
    component: function () {
      return import("../components/ListBystanders") 
    }
  },
  {
    path: '/edit/:name',
    name: 'Edit',
    component: function () {
      return import("../components/EditBystander") 
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
