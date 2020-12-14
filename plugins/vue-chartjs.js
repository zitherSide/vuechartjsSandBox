import Vue from 'vue'
import { Bar, Line } from 'vue-chartjs'

Vue.component('BarChart', {
    extends: Bar,
    props: {
        chartdata: {
            type: Object
        },
        options: {
            type: Object,
            default: () => ({
                responsive: true,
                maintainAspectRatio: false
            })
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
})

Vue.component('LineChart', {
    extends: Line,
    props: {
        chartdata:{
            type: Object
        },
        options: {
            type: Object,
            default: () => ({
                responsive: true,
                maintainAspectRatio: false
            })
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
})