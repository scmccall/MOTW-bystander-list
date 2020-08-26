import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import("../components/Home");
    },
    meta : {
      auth : 'false',
      title : 'Home'
    }
  },
  {
    path: '/create',
    name: 'create',
    component: function () {
      return import("../components/CreateBystander");
    },
    meta : {
      auth : 'false',
      title : 'Create Bystander'
    }
  },
  {
    path: '/view',
    name: 'view',
    component: function () {
      return import("../components/ListBystanders")
    },
    meta : {
      auth : 'false',
      title : 'View All Bystanders'
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: function () {
      return import("../components/EditBystander") 
    },
    meta : {
      auth : 'false',
      title : 'Edit Bystander'
    }
  },
  {
    path: '/what-is-motw',
    name: 'edit',
    component : function () {
      return import("../components/WhatIsMOTW")
    },
    meta : {
      auth : 'false',
      title : 'What is Monster of the Week?'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
