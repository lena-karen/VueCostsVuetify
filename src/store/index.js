import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    mutations: {
        addNewCost: (state, payload) => state.costsList.push(payload),
        changeCost: (state, payload) => state.costsList = payload,
        deleteCost: (state, payload) => state.costsList = payload
    },
    state: {
        categories: [
            'food',
            'travel',
            'transport',
            'entertainment'
        ],
        costsList: [],
        quantityOnPage: 5,
        showForm: false
    },
    getters: {
        getCategories: (state) => state.categories,
        getCostsList: (state) => state.costsList,
        getQuantityOnPage: (state) => state.quantityOnPage,
        getFormShow: (state) => state.showForm
    },
    actions: {
        getList({commit}) {
            return new Promise(
                (res) => {
                    const startCosts = [
                            { id: 1, type: 'food', date: '11/01/2022', amount: 200 },
                            { id: 2, type: 'travel', date: '11/02/2022', amount: 2000 },
                            { id: 3, type: 'transport', date: '11/03/2022', amount: 50 }
                    ]
                    startCosts.forEach(el => setTimeout(() => {commit('addNewCost', el), 2000}),
                rej =>{})
            })
        }
    }
})
