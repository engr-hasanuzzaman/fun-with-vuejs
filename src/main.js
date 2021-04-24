import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router'; 
import store from './store';
// import './assets/styles/index.css';
Vue.directive('red-border', (elm) => {
  // eslint-disable-next-line no-debugger
  elm.style.border = '1px solid red';
});

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
