import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
} else if (process.env.NODE_ENV === 'production') {
  new Vue({
    router,
    store,
    vuetify: new Vuetify(),
    render: h => h(App)
  }).$mount('#app')
}
