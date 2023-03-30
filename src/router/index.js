/*
 * @Author: cym
 * @Date: 2022-10-06 17:26:30
 * @LastEditors: cym
 * @LastEditTime: 2022-10-07 23:00:31
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'
import dataset from '@/components/dataset'
import model from '@/components/model'
import diagnose from '@/components/diagnose'
import treat from '@/components/treat'
import historyTask from '@/components/historyTask'
import index from '@/components/index'
import Login from "@/components/login";
import Register from "@/components/register";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/dataset',
      children: [
        {
          path: '/dataset',
          name: 'dataset',
          component: dataset,
        },
        {
          path: '/model',
          name: 'model',
          component: model,
        },
        {
          path: '/diagnose',
          name: 'diagnose',
          component: diagnose,
        },
        {
          path: '/treat',
          name: 'treat',
          component: treat,
        },
        {
          path: '/historyTask',
          name: 'historyTask',
          component: historyTask
        }
      ]
    }
  ]
})
