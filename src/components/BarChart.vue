<template>
  <div class="bar-chart">
    <canvas ref="chart" height="190"></canvas>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { onMounted, ref } from 'vue'

const chart = ref(null)
const data = [
  { hour: '16:00', count: 15 },
  { hour: '17:00', count: 16 },
  { hour: '18:00', count: 23 },
  { hour: '19:00', count: 27 },
  { hour: '20:00', count: 21 },
  { hour: '21:00', count: 16 },
  { hour: '22:00', count: 12 },
  { hour: '23:00', count: 5 }
]

onMounted(() => {
  new Chart(chart.value, {
    type: 'bar',
    data: {
      labels: data.map((row) => row.hour),
      datasets: [
        {
          data: data.map((row) => row.count),
          backgroundColor: '#006EFF',
          label: 'test'
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Оксид углерода CO, г/км',
            font: {
              size: 7
            }
          },
          ticks: {
            font: {
              size: 7
            }
          }
        },
        x: {
          ticks: {
            font: {
              size: 7
            }
          }
        }
      }
    }
  })
})
</script>

<style lang="scss">
.bar-chart {
  min-height: 270px;
}
</style>
