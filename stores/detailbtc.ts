import { defineStore } from "pinia";
import Currency from "~/logic/currency";
import { useFetchAuth } from "~/composables/UseFetchAuth";

// TODO make dynamic store

export const useDetailBtc = defineStore("useDetailBtc", {
  state: (): Record<string, any> => {
    return { currency: null };
  },
  actions: {
    setCurrency(value: null | Currency) {
      this.currency = value;
    },
    async loadCurrency() {
      const r = await useFetchAuth("/api/currency/bitcoin");
      console.log(r);
    },
  },
});
