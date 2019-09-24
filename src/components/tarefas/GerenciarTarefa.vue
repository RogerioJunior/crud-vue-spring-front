<script>
    import gerenciarTarefaBusiness from "../../business/tarefaBusiness/gerenciarTarefaBusiness";
    import router from '../../router'

    export default {
        title () {
            return this.tarefaDto ? "Editar Tarefa" : "Adicionar Tarefa";
        },
        components: {

        },

        props: [
            'tarefaDto'
        ],

        data () {
            return {
                form: {
                    nome: "",
                    descricao: "",
                    nota: ""
                }
            }

        },

        beforeMount(){
            if (this.tarefaDto) {
                this.$set(this.form, 'nome', this.tarefaDto.nome);
                this.$set(this.form, 'descricao', this.tarefaDto.descricao);
                this.$set(this.form, 'nota', this.tarefaDto.nota);

            }
        },

        computed:{

            setTitulo () {
                return this.tarefaDto ? "Editar Tarefa" : "Adicionar Tarefa";
            },
        },

        methods: {

            async salvar () {
                if (this.tarefaDto) {
                    await gerenciarTarefaBusiness.editarTarefa(this.tarefaDto.id, this.form);
                }else{
                    await gerenciarTarefaBusiness.salvarTarefa(this.form);
                }
                router.push({name: 'Principal'})
            }
        }
    }
</script>

<template>

    <div>
        <h2>{{setTitulo}}</h2>
        <form @submit.prevent="">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input class="form-control" id="nome" v-model="form.nome" required/>
            </div>
            <div class="form-group">
                <label for="descricao">Descrição</label>
                <textarea class="form-control" id="descricao" rows="5" v-model="form.descricao"></textarea>
            </div>
            <div class="form-group">
                <label for="nota">Nota</label>
                <input type="number" class="form-control" id="nota" v-model="form.nota"/>
            </div>
            <div class="form-group gerenciar">
                <button type="submit" class="btn btn-primary" @click="salvar()">Salvar</button>

                <router-link :to="{name: 'Principal'}">
                    <!-- <router-link to="/">-->
                    <button type="button" class="btn btn-default"> Cancelar</button>
                </router-link>
            </div>
        </form>
    </div>
</template>

<style lang="scss" src="../../css/tarefas.scss"></style> 
 