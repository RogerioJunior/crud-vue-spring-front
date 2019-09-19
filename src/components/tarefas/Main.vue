<template>

    <div>

        <div class="container">
            <header class="page-header">
                <div class="branding">
                    <h1>Vue.js - CRUD Lista Tarefas</h1>
                </div>
            </header>
        </div>

        <div class="actions">
            <router-link :to="{name: 'GerenciarTarefa'}">
                <button type="button" class="btn btn-default"> Adicionar Tarefa</button>
            </router-link>
        </div>

        <table class="fixed_headers">
            <thead>
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Nota</th>
                <th class="col-sm-2"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tarefa, i) in this.tarefas" :key="i">
                <td>{{ tarefa.nome }}</td>
                <td>{{ tarefa.descricao }}</td>
                <td>{{ tarefa.nota }}</td>
                <td>
                   <router-link :to="{name: 'GerenciarTarefa', params: {tarefaDto: tarefa}}">
                        <button type="button" class="btn btn-default"> Editar</button>
                    </router-link>
                    <button type="button" class="btn btn-default" @click="excluirTarefa(tarefa.id)"> Excluir</button>
                </td>
            </tr>
            </tbody>
        </table>

        <span>
        <cool-card></cool-card>
        </span>

        <div>
            <div v-for="(thing, index) in Array(2)" :key="index">
                <div data-test="fake-table-row">teste</div>
            </div>
        </div>

    </div>

</template>


<script>
    import gerenciarTarefaBusiness from "../../business/tarefaBusiness/gerenciarTarefaBusiness";
    import CoolCard from "../shared/CoolCard";

    export default {

        components: {
            CoolCard
        },

        data () {
            return {
                tarefas: []
            }

        },

        mounted() {
            this.load();
        },

        methods: {

            async excluirTarefa (idtarefa) {
                await gerenciarTarefaBusiness.excluirTarefa(idtarefa);
                this.load();

            },

            async load () {
                this.tarefas = await gerenciarTarefaBusiness.getAllTarefas();
            },

        }

    }
</script>


<style lang="scss" src="../../css/tarefas.scss"></style>