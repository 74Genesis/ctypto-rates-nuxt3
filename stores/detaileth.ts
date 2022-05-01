import { defineStore } from "pinia";
import ICurrency from "~/logic/ICurrency";
import { useFetchAuth } from "~/composables/UseFetchAuth";

// TODO make dynamic store

export const useDetailEth = defineStore("useDetailEth", {
  state: (): Record<string, any> => {
    return { currency: null, history: [] };
  },
  actions: {
    // set currency info
    setCurrency(value: null | ICurrency) {
      this.currency = value;
    },

    // Get current currency info
    async loadCurrency() {
      const r: any = await useFetchAuth("/api/currency/ethereum");
      this.currency = r.data;
    },

    // Get history by last 30 days
    async loadHistory() {
      const date = new Date();
      const end = date.getTime();
      date.setDate(date.getDate() - 30);
      const start = date.getTime();

      const r: any = await useFetchAuth("/api/currency/ethereum/history", {
        params: { interval: "d1", start, end },
      });

      if (Array.isArray(r.data)) this.history = r.data;
    },
  },
});
