import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.js'
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta&&to.meta.title){
    window.document.title = to.meta.title
  }
  next()
})

export default router