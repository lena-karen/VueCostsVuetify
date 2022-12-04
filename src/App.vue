<template>
    <v-app>
        <v-container>
            <div class = "text-sm-h2 text-h5 mt-20 mb-20 ml-4">My personal costs</div>
        </v-container>

        <v-container>
            <v-row>
                <v-col>

                    <v-btn color = 'teal' dark @click = "dialog = true" >
                        ADD NEW COST <v-icon>mdi-plus</v-icon>
                    </v-btn>
         
                    <AddCostForm :dialog.sync = 'dialog'></AddCostForm>

                    <PaymentsTable />
                </v-col>
                  
                <v-col>
                  <GoogleChart />
                </v-col>
            </v-row>
        </v-container>
  </v-app>
</template>

<script>
import PaymentsTable from './components/PaymentsTable.vue'
import AddCostForm from './components/AddCostForm.vue';
import ModalWindow from './components/ModalWindow.vue'
import GoogleChart from './components/GoogleChart.vue';
export default {
  name: 'App',
  components: {
    PaymentsTable,
    AddCostForm,
    ModalWindow,
    GoogleChart
  },

  computed: {
    categories() {
     
      return this.$store.getters.getCategories
    },
  },

  data() {
    return {
      pageNumber: 1,
      dialog: false
    }
  },

  mounted() {
    this.$store.dispatch('getList')
  },

 methods: {
  showModal() {
    this.$modal.show('addForm')
  }
 }
};
</script>

<style>

</style>