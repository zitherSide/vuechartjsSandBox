<template>
    <div>
        <h1>Bar Chart</h1>
        <v-card>
            <v-card-text>
                <bar-chart :chartdata='chartdata' :options='options'/>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            chartdata: {
                labels: ['January', 'February'],
                datasets: [
                    {
                        label: ['Data One'],
                        backgroundColor: '#f87979',
                        data: [40, 30]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales:{
                    yAxes: [
                        {
                            ticks:{
                                beginAtZero: true,
                                min: 0,
                                max: 50
                            }
                        }
                    ]
                }
            }
        }
    }
}
</script>