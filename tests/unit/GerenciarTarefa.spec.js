// import { mount } from '@vue/test-utils' *mount monta o componente e carrega os filhos dele tambem, podendo gerar um efeito colateral
import { shallowMount } from '@vue/test-utils'
import GerenciarTarefa from '@/components/tarefas/GerenciarTarefa.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
// quando o jest chega no gerenciarTarefa ( monta o componente de forma isolada),
// ele não chega no main.js, assim não reconhece/nao sabe o que fazer com o <router-Link>,
// temos que importar o que vem de fora ex. router, vuelidate

describe('Gerenciar Tarefa', () => {

  let wrapper;

  beforeAll(() => { // executa o metodo e depois o callback antes dos testes
    wrapper = shallowMount(GerenciarTarefa);
  });

  test('As propriedades corretas estão presentes no estado do componente', () => {
    const expected = ['form'];
    const received = Object.keys(wrapper.vm.$data);
    expect(received).toEqual(expected)
  });


  test(' Componente é uma instancia do Vue', () => {
    const wrapper = shallowMount(GerenciarTarefa);
    expect(wrapper.isVueInstance()).toBeTruthy()
  });


  test('renders props.msg when passed', () => {
      const msg = "Adicionar Tarefa Nome  Descrição  Nota  Salvar  Cancelar";
      const wrapper = shallowMount(GerenciarTarefa, {
        propsData: { msg }
      });
      expect(wrapper.text()).toMatch(msg)
    });



});




// npm t -- --watch ( roda apenas o teste que foi alterado, criado em um commit)
