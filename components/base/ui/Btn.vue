<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div
    class="btn bg-blue-700 hover:bg-blue-500 block px-5 pt-3 pb-3.5 rounded-lg text-center"
  >
    {{ title }}
  </div>
</template>

<style lang="scss">
.btn {
  cursor: pointer;
}
</style>
