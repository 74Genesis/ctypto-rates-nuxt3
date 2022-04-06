<script setup></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  max-width: $container-width;
  position: relative;
  display: block;
  margin: auto;
}
</style>
