import Vue from 'vue'
import Router from 'vue-router'
import AddCostForm from '../components/AddCostForm'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/form',
            name: 'addCosts',
            component: () => import('../components/AddCostForm.vue')
        },
        {
            path: '/form/:type/:price',
            name: 'addFood',
            component: () => import('../components/AddCostForm.vue')
        },
        {
            path: '/form/:id',
            name: 'changeCost',
            component: () => import('../components/EditCostForm.vue')
        }
    ]
})