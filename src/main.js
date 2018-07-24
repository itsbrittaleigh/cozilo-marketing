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
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  }).forEach(tag => document.head.appendChild(tag));

  return next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
