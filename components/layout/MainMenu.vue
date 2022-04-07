<script setup lang="ts">
const route = useRoute();
const isMenuActive = (name: string) => {
  return name === route.name;
};
</script>

<template>
  <menu class="main-menu">
    <li class="main-menu__item" :class="{ is_active: isMenuActive('index') }">
      <NuxtLink to="/index">
        <span class="main-menu__label">Login</span>
      </NuxtLink>
    </li>
    <li class="main-menu__item" :class="{ is_active: isMenuActive('about') }">
      <NuxtLink to="/about">
        <span class="main-menu__label">About</span>
      </NuxtLink>
    </li>
  </menu>
</template>

<style lang="scss">
.main-menu {
  height: 100%;
  display: flex;
  &__label {
    position: relative;
  }
  &__label::after {
    content: "";
    position: absolute;
    bottom: em(-3px);
    width: 100%;
    left: 0;
    height: 1px;
    background: white;
    opacity: 0;
    transition: opacity 0.3s;
  }
  &__item {
    height: 100%;
    color: white;
    a {
      color: white;
      text-decoration: none;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 em(15px);
    }
    &.is_active .main-menu__label,
    &:hover .main-menu__label {
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
