import { shallowMount } from '@vue/test-utils'
import CoolCard from '@/components/shared/CoolCard.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


describe('Cool Card', () => {

    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(CoolCard, {
            propsData: {
                user: {}
            }
        });
    });


    test('deve renderizar o conteúdo corretamente', () => {
        expect(wrapper.find('[data-test="cool-card-div"]').text()).toEqual('Card :)');
    });



});


