<script setup lang="ts">
import { ref, onMounted } from "vue";
// import {
//   Chart,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip,
//   SubTitle,
// } from "chart.js";

// Chart.register(
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip,
//   SubTitle
// );

const chartEl = ref();

const props = defineProps({
  history: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },
  grow: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  isLoading: {
    type: Boolean,
    default: true,
  },
});

const labels = computed((): Array<string> => {
  let days: Array<string> = [];
  props.history.forEach((item: Record<string, any>, index: number) => {
    if (item.time) {
      let date = new Date(item.time);
      let day = ("0" + String(date.getMonth())).substr(-2);
      let month = ("0" + String(date.getDate())).substr(-2);
      days.push(month + "." + day);
    }
  });
  return days;
});

const prices = computed((): Array<number> => {
  let res: Array<number> = [];
  props.history.forEach((item: Record<string, any>) => {
    if (item.priceUsd) {
      res.push(+parseFloat(item.priceUsd).toFixed(2));
    }
  });
  return res;
});

watch(
  () => props.isLoading,
  async (newLoading) => {
    if (!newLoading) {
      let data = {
        labels: labels.value,
        datasets: [
          {
            label: "",
            backgroundColor: "#f54d0a",
            // pointBackgroundColor: "white",
            // borderWidth: 1,
            borderColor: "#f54d0a",
            data: prices.value,
          },
        ],
      };

      let options: Record<string, any> = {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          easing: "easeInOutQuad",
          duration: 520,
        },
        scales: {
          // xAxes: [
          //   {
          //     gridLines: {
          //       color: "rgba(200, 200, 200, 0.05)",
          //       lineWidth: 1,
          //     },
          //   },
          // ],
          // yAxes: [
          //   {
          //     gridLines: {
          //       color: "rgba(200, 200, 200, 0.08)",
          //       lineWidth: 1,
          //     },
          //   },
          // ],
        },
        elements: {
          line: {
            tension: 0.4,
          },
        },
        legend: {
          display: false,
        },
        point: {
          backgroundColor: "white",
        },
        tooltips: {
          titleFontFamily: "Open Sans",
          backgroundColor: "rgba(0,0,0,0.3)",
          titleFontColor: "red",
          caretSize: 5,
          cornerRadius: 2,
          xPadding: 10,
          yPadding: 10,
        },
      };

      await nextTick();
      // let chartInstance = new Chart(chartEl.value, {
      //   type: "line",
      //   data: data,
      //   options,
      // });
    }
  }
);

// onMounted(() => {});
</script>

<template>
  <div class="graph bg-white px-8 py-6">
    <transition name="fade">
      <div v-if="props.isLoading" class="graph__loading">
        <div class="graph__load-chart flex justify-between items-end">
          <div class="graph__load-line" />
          <div class="graph__load-line" />
          <div class="graph__load-line" />
          <div class="graph__load-line" />
          <div class="graph__load-line" />
          <div class="graph__load-line" />
          <div class="graph__load-line" />
          <div class="graph__load-line" />
          <div class="graph__load-line" />
        </div>
      </div>
      <div v-else class="graph__content">
        <div class="graph__info flex items-center justify-between">
          <div class="graph__price">
            {{ props.price }} <span>({{ props.grow }})</span>
          </div>
          <div class="graph__currency flex items-center">
            <img :src="props.icon" :alt="props.name" class="w-5 h-5 mr-1" />
            {{ props.name }}
          </div>
        </div>
        <div class="graph__chart">
          <canvas ref="chartEl" class="graph__chart-canvas"></canvas>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.graph {
  border-radius: 5px;
  min-height: em(300px);
  position: relative;

  $load-color: #f6f6f6;
  &__loading {
    width: 80%;
    height: 80%;
    position: absolute;
    left: 10%;
    top: 10%;
  }
  &__load-chart {
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: em(15px);
    &:before {
      content: "";
      display: block;
      width: 5px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: $load-color;
    }
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: $load-color;
    }
  }

  &__load-line {
    width: 8%;
    background-color: $load-color;
    //border-top-left-radius: em(10px);
    //border-top-right-radius: em(10px);
    &:nth-child(1),
    &:nth-child(7),
    &:nth-child(9) {
      animation: m1 6s;
      animation-iteration-count: infinite;
    }
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(12),
    &:nth-child(10) {
      animation: m2 5s;
      animation-iteration-count: infinite;
    }
    &:nth-child(5),
    &:nth-child(13),
    &:nth-child(8) {
      animation: m3 7s;
      animation-iteration-count: infinite;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(11) {
      animation: m3 5.5s;
      animation-iteration-count: infinite;
    }
  }
  @keyframes m1 {
    0% {
      height: 30%;
    }
    50% {
      height: 65%;
    }
    100% {
      height: 30%;
    }
  }
  @keyframes m2 {
    0% {
      height: 80%;
    }
    50% {
      height: 40%;
    }
    100% {
      height: 80%;
    }
  }
  @keyframes m3 {
    0% {
      height: 40%;
    }
    50% {
      height: 70%;
    }
    100% {
      height: 40%;
    }
  }
  @keyframes m3 {
    0% {
      height: 70%;
    }
    50% {
      height: 95%;
    }
    100% {
      height: 70%;
    }
  }

  &__currency {
    float: right;
  }
  &__chart-canvas {
    width: 100%;
    //height: 250px;
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
