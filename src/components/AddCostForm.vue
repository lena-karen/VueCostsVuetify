<template>
    <v-dialog  width = '500px' v-model = 'dialog'>
        <v-card class="text-left pa-8">

            <v-text-field type = 'number' label = "Amount" v-model = "costsData.amount"></v-text-field>

            <v-select label = 'Category' v-model = "costsData.type" :items = "categories">
            </v-select>

            <v-text-field label = "Date" v-model = "costsData.date" ></v-text-field>

            <v-card-actions>
                <v-btn color = 'teal' dark class="wrapper-form-btn" @click="addCost">Add</v-btn>
                <v-btn v-on:click.native = "close" class="close-btn">x</v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>
                         
</template>

<script>
    export default {
        name: 'AddCostForm',
        data() {
            return {
                costsData: {        
                    type: 'food',
                    amount: 0,
                    date: new Date().toLocaleDateString('en-us', {timeZone: 'UTC'})
                },
                
                
            }
        },
        props: ['id', 'dialog'],
        mounted() {
            return {
                costsData: {
                    type: this.categories[0]
                }
            }
        },
        computed: {
            categories() {
                return this.$store.getters.getCategories
            },
           
            
        },
        methods: {
            addCost() {
                this.costsData.id = Date.now();
                this.costsData.date = new Date().toLocaleDateString('en-us', {timeZone: 'UTC'})
                this.$store.commit('addNewCost', Object.assign({}, this.costsData));
               // this.$store.dispatch('getList', Object.assign({}, this.costsData));
            },
            close() {
                this.$emit('update:dialog', false)
            }
        }
    }
</script>

<style>
   .wrapper-form {
        position: absolute;
        right: 50%;
        background-color: white;
        z-index: 100;
        border: 1px solid gray;
   }
    .wrapper-form input {
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
    .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        background-color: white;
    }
</style>