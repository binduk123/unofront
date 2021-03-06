import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import Location from '@/components/Location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Hello
    },
    {
      path: '/location/:id',
      name: 'Location',
      component: Location
    }
  ]
})
