import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import './registerServiceWorker';

Vue.config.productionTip = process.env.NODE_ENV !== 'production' ? false : true;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
