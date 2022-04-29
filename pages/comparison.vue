<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <div class="p-comp">
    <div class="p-comp__inner p-4 flex items-center h-full align-center">
      COMPARISON DEVELOPING
    </div>
  </div>
</template>

<style lang="scss">
.p-comp {
}
</style>
