import api from '../../commons/api';

export default {

    async getAllTarefas() {
        return await api.getAll().then(response => {
            return response.data

        })
            .catch((e) => {
                return Promise.reject(e);
            });

    },

    async excluirTarefa(idtarefa) {
        return api.removeForId(idtarefa);
    },

    async salvarTarefa(dto) {
        return api.createNew(dto);
    },

    async editarTarefa(idTarefa, dto) {
        return api.updateForId(idTarefa, dto)
    }


}