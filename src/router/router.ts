import index from '@/views/Index'

export default [
    {
      path: '/',
      redirect:{
        name: 'index'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta:{
        title:'主页'
      }
    },   
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      meta:{
        title:'关于'
      },
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/404.vue'),
      meta:{
        title:'404'
      },
    },
  ]