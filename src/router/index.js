import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../views/StartPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import firebase from "firebase"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Startpage',
    component: StartPage,
    meta: {
			requiresAuth: true
		}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProfilePage,
    meta: {
			requiresAuth: true
		}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	firebase.auth().onAuthStateChanged(function(user) {
		if (requiresAuth && !user) {
			next("Login");
		} else {
			next();
		}
	});
});
export default router
