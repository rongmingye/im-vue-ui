import ImButton from './src/index.vue'

ImButton.install = (vue) => {
    vue.component(ImButton.name, ImButton)
}

export default ImButton