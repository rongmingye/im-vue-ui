import ImDialog from './src/index.vue'

ImDialog.install = (vue) => {
    vue.component(ImDialog.name, ImDialog)
}

export default ImDialog