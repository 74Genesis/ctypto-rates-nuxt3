<script setup lang="ts">
import { useDetailBtc } from "~/stores/detailbtc";
let btc = useDetailBtc();
btc.loadCurrency();

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <div class="p-dashboard">
    <div class="p-dashboard__inner p-4">
      <DashboardRatesGraph class="p-dashboard__graph1" />
      <DashboardRatesGraph class="p-dashboard__graph2" />
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
