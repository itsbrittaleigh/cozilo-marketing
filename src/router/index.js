import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Faq from '../pages/Faq';
import Features from '../pages/Features';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: Faq,
    },
    {
      path: '/features',
      name: 'Features',
      component: Features,
    },
  ],
});
