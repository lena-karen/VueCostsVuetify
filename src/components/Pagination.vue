<template>
    <div class="pagination">
       <span @click="onDecreasePage">&lt;</span> 
       <span :class="{active: clickedPage == page}" @click="onChangePage(page)" v-for="page of pagesArray" v-bind:key="page">{{page}}</span>
       <span @click="onIncreasePage">&gt;</span> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                clickedPage: 1
            }
        },
        computed: {
            quantityOnPage: function() {
                return this.$store.getters.getQuantityOnPage
            },
            items: function() {
                return this.$store.getters.getCostsList
            },
            pagesArray: function() {
                if (this.items.length == 0) {
                    return 1;
                } else {
                    const page =  Math.ceil(this.items.length / this.quantityOnPage);
                    return page
                }
            }
        },
        methods: {
            onDecreasePage() {
                if (this.clickedPage == 1) {
                    return;
                } else {
                    this.clickedPage--;
                    this.onChangePage(this.clickedPage)
                }
                
            },
            onIncreasePage() {
                console.log(this.pagesArray.length)
                console.log(this.clickedPage)
                

                if (this.clickedPage == Math.ceil(this.items.length/this.quantityOnPage)) {
                    return;
                } else {
                    this.clickedPage++;
                    this.onChangePage(this.clickedPage)
                }
            },
            onChangePage(pageNum) {
                this.$emit('changePage', pageNum);
                this.clickedPage = pageNum;
                
            }
        }
    }
</script>

<style>
    .pagination {
        border-bottom: 1px solid rgb(199, 195, 195);
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .pagination span {
        cursor: pointer;
        margin: 0 5px;
        padding: 5px;
    }
    .pagination span:hover {
        color: grey;
    }
    .active {
         color: red;
    }
</style>