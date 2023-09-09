console.clear();

import Vue from 'vue';
import App from './App.vue';
import VueFormulate from '@braid/vue-formulate';
import router from './router';

// Vue.use(VueFormulate);
Vue.use(VueFormulate, {
  locales: {
    en: {
      required ({ name }) {
        return `Please fill out the ${name} field.`
      }
    }
  }
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app'); 
