<script setup lang="ts">
const someVar = ref(0);
const plusVar = () => {
  someVar.value++;
};
</script>

<template>
  <div class="index">
    {{someVar}}
    <button @click="plusVar()">plus</button>
  </div>
</template>