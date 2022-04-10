<script setup></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  //max-width: em($container-width + 50);
  position: relative;
  display: block;
  margin: auto;
  //padding: 0 em(25px);
}
</style>
