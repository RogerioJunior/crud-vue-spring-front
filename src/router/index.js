import Vue from 'vue'
import Router from 'vue-router'
import Principal from './../components/tarefas/Main'
import GerenciarTarefa from './../components/tarefas/GerenciarTarefa'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Principal',
            component: Principal,
            props: true
        },

        {
            path: '/gerenciar-tarefa',
            name: 'GerenciarTarefa',
            component: GerenciarTarefa,
            props: true
        },

    ]
})
