<script setup>
const name = "BaseName";
</script>

<template>
  <div class="l-main">
    <div class="l-main__bg"></div>
    <header class="l-main__header">
      <BaseContainer> Some logo </BaseContainer>
    </header>
    <slot />
  </div>
</template>

<style lang="scss">
.l-main {
  background: red;
  min-height: 100vh;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/bg/bg1.jpg");
    background-size: cover;
    background-position: center;
    z-index: 10;
  }

  &__header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 20;
  }
}
</style>
