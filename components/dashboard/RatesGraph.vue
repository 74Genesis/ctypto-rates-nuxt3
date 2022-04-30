<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "frappe-charts";
// import { Chart, LineController, CategoryScale, LinearScale, LineElement, PointElement } from "chart.js";
// import {valueOrDefault} from 'chart.js/_api/_api.esm';

// Chart.register(LineController, CategoryScale, LinearScale, LineElement, PointElement);

const chartEl = ref();
// let chart = ref();

const days = [];
const sum = [];
for (let i = 0; i < 30; i++) {
  days.push(i + 1);
  sum.push(Number(Math.random() * 1000).toFixed(2));
}

onMounted(() => {
  if (chartEl.value) {
    new Chart(chartEl.value, {
      data: {
        labels: ["3", "6am", "9am", "12pm", "3pm", "6pm", "9pm", "12am"],

        datasets: [
          {
            // name: "Yet Another",
            chartType: "line",
            values: [15, 20, -3, -15, 58, 12, -17, 37],
          },
        ],
      },

      // title: "My Awesome Chart",
      type: "line", // or 'bar', 'line', 'pie', 'percentage'
      height: 200,
      colors: ["#f54d0a", "#f54d0a", "#f54d0a"],
      axisOptions: {
        xIsSeries: false, // default: false
      },
      tooltipOptions: {
        // formatTooltipX: d => (d + '').toUpperCase(),
        // formatTooltipY: d => d + ' pts',
      },
    });
  }
});
</script>

<template>
  <div class="graph bg-white px-8 py-6">
    <div class="graph__info flex items-center justify-between">
      <div class="graph__price">$2,800.35 <span>(+8.4%)</span></div>
      <div class="graph__currency flex items-center">
        <img
          src="~/assets/icons/currencies/BTC.svg"
          alt="BTC"
          class="w-5 h-5 mr-1"
        />
        Bitcoin
      </div>
    </div>
    <div class="graph__chart">
      <div ref="chartEl" class="graph__chart-canvas"></div>
    </div>
  </div>
</template>

<style lang="scss">
.graph {
  border-radius: 5px;

  &__currency {
    float: right;
  }
  &__chart-canvas {
    width: 100%;
    height: 200px;
  }
  &__price {
    font-weight: 500;
    font-size: em(20px);
    span {
      font-size: em(14px);
      color: $green;
      font-weight: 400;
    }
  }
}
</style>
