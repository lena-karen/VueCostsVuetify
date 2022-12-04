<template>
   
    <v-dialog  v-model = 'show' >
        <v-card class="context-main" 
        style="position: absolute; width: auto;right: 50px">
            <v-card class="edit" v-on:click.native = 'close'>
                <font-awesome-icon icon="fa-solid fa-pen" />
                <span>Редактировать</span>
            </v-card>
            <v-card v-on:click="deleteItem" v-on:click.native = 'close' class="delete">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
                <span>Удалить</span>
            </v-card>
        
        </v-card>
    </v-dialog>

</template>

<script>
    import ModalWindow from './ModalWindow.vue'
    export default {
        name: 'ContextMenu',
        components: {ModalWindow},
        props: ['id', 'show'],
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            showEditForm() {
                this.$modal.show('editForm')
                this.$modal.toggle(this.id)
            },
            deleteItem() {
              
                this.$store.commit('deleteCost', this.items.filter(el => el.id != this.id));
                this.$modal.toggle(this.id)
            },
            close() {
                this.$emit('update:show', false)
            }

        },
       
        computed: {
            items() {
                return this.$store.getters.getCostsList
            },
        }
    }
</script>

<style>
   .context-main {
        background-color: white;
        border: 1px solid lightgray;
        
        position: absolute;
        top: 30px;
        right: 0;
        
        z-index: 100;
        display: flex;
        flex-direction: column;
        

   }
    .context-main span {
        padding: 2px;
        margin: 0;
        font-size: 12px;
        margin-left: 10px;

    }
    .context-main .edit, .delete {
        padding: 5px;
        display: flex;
    }
    .context-main .edit:hover, .delete:hover {
        background-color: lightgray;
        cursor: pointer;
    }
  
</style>