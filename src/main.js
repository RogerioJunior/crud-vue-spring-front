import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import tituloMixin from './mixins/TituloMixin'

Vue.use(VueRouter);
Vue.mixin(tituloMixin);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
