import { shallowMount } from '@vue/test-utils'
import Main from '@/components/tarefas/Main.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


describe('Cool Card', () => {

    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(Main);
    });


    test('deve exibir o número certo de linhas da tabela', () => {
        expect(
            wrapper.findAll('[data-test="fake-table-row"]').wrappers.length).toBe(2);
    });



});


