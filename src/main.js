import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueCarousel from 'vue-carousel';
import InViewportDirective from 'vue-in-viewport-directive';

import App from './App';
import router from './router';
import store from './store';

require('./vendor/font-awesome/fontawesome-all');

Vue.config.productionTip = false;

Vue.use(VueScrollTo);
Vue.use(VueCarousel);

Vue.directive('in-viewport', InViewportDirective);

router.beforeEach((to, from, next) => {
  store.commit('closeMenu');
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
