<template>
    <v-container>
        <v-row class="font-weight-bold text-center">
            <v-col :cols = '4'>Date</v-col>
            <v-col :cols = '5'>Category</v-col>
            <v-col :cols = '2'>Amount</v-col>
        </v-row>
        
        <v-row class = 'text-center' v-for = "item, idx of costsOnPage" v-bind:key="idx"> 
            
            <v-col :cols = '4'>{{item.date}}</v-col>
            <v-col :cols = '5'>{{item.type}}</v-col>
            <v-col :cols = '2'>{{item.amount}}</v-col>
    
            <v-menu >
                <template v-slot:activator = '{on}'>
                    <v-btn icon v-on = "on">
                        <v-icon>mdi-dots-vertical </v-icon>
                    </v-btn>
                </template> 

                <v-card>
                    <v-list >
                        <v-list-item v-on:click = "click(item.id)">
                            <font-awesome-icon icon="fa-solid fa-pen" />
                            <span>Редактировать</span>     
                        </v-list-item>

                        <v-list-item v-on:click="deleteItem(item.id)">
                            <font-awesome-icon icon="fa-solid fa-trash-can" />
                            <span>Удалить</span>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
            
            <EditCostForm :dialog.sync = 'dialog' v-bind:id = "currentItem"/>
        </v-row>

        <Pagination @changePage = "changePage" />
    </v-container>

</template>

<script>

import Pagination from './Pagination.vue'
import ModalWindow from './ModalWindow.vue'
import EditCostForm from './EditCostForm.vue'
import ContextMenu from './ContextMenu.vue'

    export default {
        name: 'PaymentsTable',
        components: {
            Pagination,
            ModalWindow,
            EditCostForm,
            ContextMenu,
 
        },
        data() {
            return {
                page: 1,
                currentItem: 0,
                dialog: false
            }
        },
        computed: {
            items() {
                return this.$store.getters.getCostsList
            },
            quantityOnPage() {
                return this.$store.getters.getQuantityOnPage
            },
            costsOnPage: function() {
                
                let subArray = [];
                for (let i = this.quantityOnPage * (this.page - 1); i < Math.min(this.page * this.quantityOnPage, this.items.length); i++) {
                    subArray.push(this.items[i])
                }
                return subArray
            },
        },

        methods: {
            changePage(num) {
                this.page = num;
            },
            deleteItem(id) {
                this.$store.commit('deleteCost', this.items.filter(el => el.id != id));
            },
            click(id){
                this.dialog = true;
                this.currentItem = id;
            }
        }
    }
</script>

<style>
    span {
        margin-left: 5px;
    }
    .context-menu {
        cursor: pointer;
    }
    
    .icon-menu {
        align-self: center;
        margin-left: 20px;
        cursor: pointer;
    }
    .wrapper-form {
        background-color: white;
    }
</style>