import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
    }
  },
  {
    path: '/create',
    name: 'create',
    component: function () {
      return import("../components/CreateBystander");
    }
  },
  {
    path: '/view',
    name: 'view',
    component: function () {
      return import("../components/ListBystanders") 
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
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
