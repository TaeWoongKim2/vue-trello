import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Board from '../views/feature/Board.vue'
import Card from '../views/feature/Card.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter) // 미들웨어

const requireAuth = () => (to, from, next) => {
  const isAuth = localStorage.getItem('token');
  isAuth ? next() : next(`/login?rPath=${encodeURIComponent(to.path)}`);
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth()
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    // 동적 라우팅 매칭 - bid라는 것을 동적으로 주소값에 입력받을 수 있다!
    path: '/b/:bid',
    name: 'Board',
    component: Board,
    beforeEnter: requireAuth(),
    children: [
      // 중첩 라우팅!
      { path: 'c/:cid', component: Card }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
