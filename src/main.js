import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // store.commit('closeMenu');
  document.title = to.meta.title ? to.meta.title : 'Welcome | Cozilo';
  if (document.querySelector('meta[name="description"]')) {
    document.querySelector('meta[name="description"').content = to.meta.description ? to.meta.description : '';
  }
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
