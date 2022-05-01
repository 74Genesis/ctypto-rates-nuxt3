<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});

useHead({
  titleTemplate: "Dashboard - cryptorates",
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1",
});

let isChartReady = ref(false);

/* Bitcoin detail block */
import { useDetailBtc } from "~/stores/detailbtc";
let btc = useDetailBtc();

let isBtcLoaded = ref(true); //is info about btc loaded
Promise.all([btc.loadHistory(), btc.loadCurrency()]).then(() => {
  isBtcLoaded.value = false;
});

// btc current price
const btcPrice = computed(() => {
  return getFormattedPrice(+btc.currency?.priceUsd);
});

// btc grow percent
const btcGrow = computed(() => {
  const oldPrice = +btc.history?.[0]?.priceUsd;
  const newPrice = +btc.currency?.priceUsd;
  return getGrow(oldPrice, newPrice);
});

/*Ethereum detail block*/
import { useDetailEth } from "~/stores/detaileth";
let eth = useDetailEth();

let isEthLoaded = ref(true); //is info about eth loaded
Promise.all([eth.loadHistory(), eth.loadCurrency()]).then(() => {
  isEthLoaded.value = false;
});

// eth current price
const ethPrice = computed(() => {
  return getFormattedPrice(+eth.currency?.priceUsd);
});

// eth grow percent
const ethGrow = computed(() => {
  const oldPrice = +eth.history?.[0]?.priceUsd;
  const newPrice = +eth.currency?.priceUsd;
  return getGrow(oldPrice, newPrice);
});

/**
 * return peprcent of price change
 * @param oldPrice - basic price
 * @param newPrice - current price
 */
function getGrow(oldPrice: number, newPrice: number) {
  const res = Number((newPrice - oldPrice) / (oldPrice / 100));
  return res > 0 ? `+${res.toFixed(1)}%` : `${res.toFixed(1)}%`;
}

/**
 * returns formatted USD price
 * @param price - price number
 */
function getFormattedPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

onMounted(() => {
  /* Load chart script global, because it doesn't work on heroku using import */
  const script = document.createElement("script");
  script.onload = () => {
    isChartReady.value = true;
  };
  script.src = "/assets/scripts/chart.min.js";
  document.body.append(script);
});
</script>

<template>
  <div class="p-dashboard">
    <div class="p-dashboard__inner p-4">
      <DashboardRatesGraph
        class="p-dashboard__graph1"
        :history="btc.history"
        :is-loading="isBtcLoaded && isChartReady.value"
        name="Bitcoin"
        icon="/assets/icons/currencies/BTC.svg"
        :price="btcPrice"
        :grow="btcGrow"
      />
      <DashboardRatesGraph
        class="p-dashboard__graph2"
        :history="eth.history"
        :is-loading="isEthLoaded && isChartReady.value"
        name="Ethereum"
        icon="/assets/icons/currencies/ETH.svg"
        :price="ethPrice"
        :grow="ethGrow"
      />
      <DashboardRatesTable class="p-dashboard__table" />
    </div>
  </div>
</template>

<style lang="scss">
.p-dashboard {
  &__inner {
    display: grid;
    grid-template-columns: 25fr 25fr 25fr 25fr;
    gap: em(15px);
  }
  &__graph1 {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  &__graph2 {
    grid-column-start: 3;
    grid-column-end: 5;
  }
  &__table {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
  }
}
</style>
