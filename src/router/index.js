import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Shirts from '../views/Shirts.vue'
import Tshirts from '../views/Tshirts.vue'
import Profile from '../views/Profile.vue'
import Details from '../views/ItemDetails.vue'
import Cart from '../views/Cart.vue'
import Jackets from '../views/Jackets.vue'
import Login from '../views/Login.vue'
import Checkout from '../views/Checkout.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/shops',
    name: 'shop',
    component: Shop
  },
  {
    path: '/shop/tshirts',
    name: 'tshirts',
    component: Tshirts
  },
  {
    path: '/shop/shirts',
    name: 'shirts',
    component: Shirts
  },
  {
    path: '/shop/jackets',
    name: 'jackets',
    component: Jackets
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/item/details',
    name: 'details',
    component: Details
  },
  {
    path: '/item/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/item/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
