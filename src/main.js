import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ModalPlugin from './plugins/ModalPlugin'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faEllipsisVertical, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsisVertical)
library.add(faPen)
library.add(faTrashCan)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ModalPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
