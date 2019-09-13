import axios from 'axios'

const SERVER_URL = 'http://localhost:8090';

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000
});

export default {
// (C)reate
  createNew: (dto) => instance.post('/tarefas', dto),

// (R)ead
  getAll: () => instance.get('/tarefas', {
    transformResponse: [function (data) {
      return data? JSON.parse(data) : data;
    }]
  }),

// (U)pdate
  updateForId: (id, dto) => instance.put('/tarefas/'+id, dto),

// (D)elete
  removeForId: (id) => instance.delete('/tarefas/'+id)
}