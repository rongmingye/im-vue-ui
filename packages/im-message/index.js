import ImMessage from './src/index.vue'

ImMessage.install = (vue) => {
    vue.component(ImMessage.name, ImMessage)
}

export default ImMessage