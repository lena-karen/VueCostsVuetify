export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true;

        Vue.prototype.$modal = {
            EventBus: new Vue(),

            show(id) {
                this.EventBus.$emit('modalShow', id)
              // console.log('2',id)
            },

            hide(id) {
                this.EventBus.$emit('modalHide', id)
              // console.log('plugin hidden')
            },
            toggle(id) {
                this.EventBus.$emit('modalToggle', id)
              // console.log('plugin toggle')
            },
        }
    }
}