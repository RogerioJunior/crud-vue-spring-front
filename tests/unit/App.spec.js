// import { mount } from '@vue/test-utils' *mount monta o componente e carrega os filhos dele tambem, podendo gerar um efeito colateral
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


describe('App', () => {
  test('é uma instancia do Vue', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});
