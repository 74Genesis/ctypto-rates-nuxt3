<script setup lang="ts">
const componentName = "BaseName";
</script>

<template>
  <div class="l-main">
    <div class="l-main__bg"></div>
    <div class="l-main__over"></div>
    <BaseIndexHeader class="l-main__header" />

    <div class="l-main__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.l-main {
  background: $blue-dark;
  //min-height: 100vh;
  overflow: hidden;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/bg/bg1.jpg");
    background-size: cover;
    background-position: center;
    z-index: 10;
    filter: blur(5px);
  }

  &__over {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $blue-dark;
    z-index: 20;
    opacity: 0.8;
  }

  &__header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 200;
  }
  &__content {
    position: fixed;
    top: em($main-header-height);
    left: 0;
    height: calc(100vh - #{em($main-header-height)});
    z-index: 100;
    overflow-y: auto;
    width: 100%;
  }
}
</style>
