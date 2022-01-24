import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Checkout from '../views/Checkout.vue'

Vue.use( VueRouter );

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/checkout',
  //   name: 'checkout',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/User.vue' ),
  // },
];

const router = new VueRouter( {
  routes,
  mode: 'history',
} );

export default router;
