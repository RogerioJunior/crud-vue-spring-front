
export default {

    beforeMount() {
        const titulo = this.getTitulo(this);

        if (titulo) {
            document.title = titulo
        }

    },

    methods : {

        getTitulo (vm) {
            const { title } = vm.$options;
            if (title) {
                return typeof title === 'function' ? title.call(vm) : title
            }
        }
    }

}