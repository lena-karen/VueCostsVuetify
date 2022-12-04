<template>
    <transition name = 'fade'>
       
        <slot v-if = 'isShown' class="modal">   
        </slot>
    </transition>
</template>

<script>
    import AddCostForm from './AddCostForm.vue';
    import ContextMenu from './ContextMenu.vue';
    import EditCostForm from './EditCostForm.vue';
    export default {
        name: 'ModalWindow',

        components: {
            AddCostForm,
            ContextMenu, 
            EditCostForm
        },
        
        props: ['id'],

        data: () => ({
            isShown: false,
        }),
    
        mounted() {
            this.$modal.EventBus.$on('modalShow', this.show)
            this.$modal.EventBus.$on('modalHide', this.hide)
            this.$modal.EventBus.$on('modalToggle', this.toggle)
        },
        methods: {
            show(id) {
                if (id ==this.id){
                    this.isShown = true
                } 
            },
            hide(id) {
                if (id ==this.id){
                    this.isShown = false;
                }
            },
            toggle(id) {
                if (id == this.id) {
                    this.isShown = !this.isShown
                }
               
}
        }
    }
</script>

<style>
    .modal {
        margin: 20px;
        position: absolute;
        background-color: rgb(239, 239, 232);
        box-shadow: 0 0 100px lightgray;
        z-index: 1000;
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
    .fade-enter, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;
    }
</style>