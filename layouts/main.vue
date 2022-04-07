<script setup lang="ts">
const componentName = "BaseName";
</script>

<template>
  <div class="l-main">
    <div class="l-main__bg"></div>
    <div class="l-main__over"></div>
    <BaseIndexHeader class="l-main__header" />
    <slot />
  </div>
</template>

<style lang="scss">
.l-main {
  background: $blue-dark;
  min-height: 100vh;
  overflow: hidden;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/bg/bg1.jpg");
    background-size: cover;
    background-position: center;
    z-index: 10;
    filter: blur(4px);
  }

  &__over {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $blue-dark;
    z-index: 20;
    opacity: 0.7;
  }

  &__header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
  }
}
</style>
