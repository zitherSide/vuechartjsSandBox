<template>
    <v-main class='ma-4'>
        <v-row class='ma-4'>
            <v-card>
                <v-card-title>Charts</v-card-title>
                <v-card-text>
                    <v-row class='my-4 mx-1'>
                        <bar-chart :chartdata='barchartdata' :options='options'/>
                        <line-chart :chartdata='linechartdata' :options='options'/>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
    </v-main>
</template>

<script>
export default {
    data () {
        return {
            barchartdata: {
                labels: ['January', 'February'],
                datasets: [
                    {
                        label: ['Data One'],
                        backgroundColor: '#f87979',
                        data: [40, 30]
                    }
                ]
            },
            linechartdata: {
                labels: ['0', '1', '2', '3', '4'],
                datasets: [
                    {
                        label: ['LineData'],
                        backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                        data: [0, 10, 20, 0, 50]
                    }
                ]
            },
            options: {
                scales:{
                    yAxes: [
                        {
                            ticks:{
                                beginAtZero: true,
                                suggestedMin: 0,
                                suggestedMax: 50
                            }
                        }
                    ],
                    xAxes: [
                        {
                            scaleLabel:{
                            }
                        }
                    ]
                }
            },
        }
    }
}
</script>