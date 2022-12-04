<template>
    <v-dialog width = '500px' v-model = 'dialog'>
        <v-card class="text-left pa-8">

            <v-text-field type = 'number' label="Amount" v-model ='item.amount' ></v-text-field>
            
            <v-select label = 'Category' v-model = "item.type" :items = "categories">
            </v-select>
 
            <v-card-actions>
                <v-btn color = 'teal' dark v-on:click = 'saveChange'>Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'EditCostForm',
        props: ['id', 'dialog'],
     
        computed: {
            categories() {
                return this.$store.getters.getCategories
            },
            costs() {
                return this.$store.getters.getCostsList
            },
            item() {
               
                return this.costs.find(el => el.id == this.id)
            }
        },
     
        methods: {
            saveChange() {
                const changedItems = this.costs.map(el => {
                    if (el.id == this.id) {
                        el.type = this.item.type;
                        el.amount = this.item.amount;
                    }
                    return el;
                })
            
                this.$store.commit('changeCost', changedItems);  
                this.$emit('update:dialog', false)
            }
        }
    }
</script>
<style>
    .edit-form {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 0;
        top: -150px;
        padding: 20px;
        border-radius: 10px;
        background-color: white;
        position: absolute;
        border: 1px solid gray;
    }
    .edit-form input {
        width: 300px;
        height: 30px;
        outline: none;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 5px 20px;
        margin-bottom: 10px;
    }
    .selection {
        width: 343px;
        height: 40px;
        border-radius: 5px;
        padding: 5px 20px;
        margin-bottom: 10px;
    }
    .wrapper-form-btn {
        width: 200px;
        padding: 10px 20px;
        background-color: rgb(5, 107, 107);
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
  
</style>