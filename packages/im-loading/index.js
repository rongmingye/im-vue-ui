import ImLoading from './src/index.vue'

ImLoading.install = (vue) => {
    vue.component(ImLoading.name, ImLoading)
}

export default ImLoading