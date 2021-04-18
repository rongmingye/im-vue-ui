import ImButton from '../packages/im-button/index.js'
import ImDialog from '../packages/im-dialog/index.js'
import ImSelect from '../packages/im-select/index.js'
import ImMessage from '../packages/im-message/index.js'
import ImLoading from '../packages/im-loading/index.js'

const components = [
    ImButton,
    ImDialog,
    ImSelect,
    ImMessage,
    ImLoading,
]

const install = function(Vue, opts) {
    components.forEach(item => {
        Vue.use(item)
    })

    Vue.prototype.$loading = ImLoading
}

export default {
    install,
    version: '1.0.0',
    ImButton,
    ImDialog,
    ImSelect,
    ImMessage,
    ImLoading,
}