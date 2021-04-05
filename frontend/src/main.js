import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import store from './store.js';
import VueRouter from 'vue-router';

import Messages from './components/Messages';
import NewMessage from "./components/NewMessage";
import Message from "./components/Message";
Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Messages},
  { path: "/NewMessage", component: NewMessage},
  { path: "/Messages/:id", component: Message}
]

const router = new VueRouter({routes, mode: 'history'});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
