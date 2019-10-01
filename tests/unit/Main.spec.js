import { shallowMount } from '@vue/test-utils'
import Main from '@/components/tarefas/Main.vue'
import CoolCard from "../../src/components/shared/CoolCard";
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


describe('Cool Card', () => {

    // let wrapper;
    //
    // beforeAll(() => {
    //     wrapper = shallowMount(Main);
    // });

    const build = () => {
        const wrapper = shallowMount(Main, {
            data: () => ({
                user: {}
            })
        });

        return {
            wrapper,
            coolCard: () => wrapper.find(CoolCard),
        }
    };


    test('deve exibir o número certo de linhas da tabela', () => {
        // expect(wrapper.findAll('[data-test="fake-table-row"]').wrappers.length).toBe(2);

        const { wrapper } = build();

        expect(wrapper.findAll('[data-test="fake-table-row"]').wrappers.length).toBe(2);
    });

    test('deve renderizar componentes filhos : CoolCard', () => {
        // const coolCard = wrapper.find(CoolCard);
        // expect(coolCard.exists()).toBe(true);

        const { coolCard } = build();

        expect(coolCard().exists()).toBe(true);
    });

    test('deve validar o bind do componente, esta passando uma propriedade para o componente coolCard' +
        ' contendo um objeto, e esse objeto terá todas as informações', () => {

        const { wrapper, coolCard } = build();
        wrapper.setData({
            user: {
                nome: 'Fulano'
            }
        });

        expect(coolCard().vm.user).toBe(wrapper.vm.user);
    });



});


