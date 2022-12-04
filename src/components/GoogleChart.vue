<template>
    <div>
        <h3>Costs by categories</h3>

        <GChart
            type = 'PieChart'
            :data = 'dataChart'
        />
    </div>
</template>

<script>
import {GChart} from 'vue-google-charts/legacy'
export default {
    name: 'GoogleChart',
    components: {GChart},
   
    computed: {
        categories() {
            return this.$store.getters.getCategories
        },
        items() {  
            return this.$store.getters.getCostsList
        },
        dataChart() {
            const grouped = this.categories.map(cat => {
                const totalInCat = this.items.reduce((total, el) => {
                    if (el.type == cat) {
                        return total + +el.amount
                    } else {
                        return total;
                    }
                }, 0)
                return [cat, totalInCat]
            })

            grouped.unshift(['Type', 'Amount'])
            return grouped
        }
       
    }
}
</script>