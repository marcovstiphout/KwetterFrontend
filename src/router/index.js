import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../views/StartPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Startpage',
    component: StartPage
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProfilePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute && toRoute.name ? toRoute.name + " / Kwetter": 'Home';

  next();
})
export default router
