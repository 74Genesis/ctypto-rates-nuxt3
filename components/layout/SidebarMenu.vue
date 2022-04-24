<script setup lang="ts">
import {
  HomeIcon,
  LogoutIcon,
  StarIcon,
  SwitchHorizontalIcon,
} from "@heroicons/vue/outline";
const route = useRoute();
function isMenuActive(name: string) {
  return name === route.name;
}
</script>

<template>
  <menu class="side-menu pb-16 w-full h-full text-gray-200 flex flex-col">
    <li
      class="side-menu__item mb-2"
      :class="{ is_active: isMenuActive('dashboard') }"
    >
      <NuxtLink to="/" class="px-4 h-10 flex items-center block">
        <HomeIcon class="h-4 w-4 mr-2" />
        <span class="side-menu__label">Home</span>
      </NuxtLink>
    </li>
    <li
      class="side-menu__item mb-2 grow-0"
      :class="{ is_active: isMenuActive('about') }"
    >
      <NuxtLink to="/about" class="px-4 h-10 flex items-center block">
        <StarIcon class="h-4 w-4 mr-2" />
        <span class="side-menu__label">Favorites</span>
      </NuxtLink>
    </li>
    <li class="side-menu__item mb-2 grow-0" :class="{ is_active: 0 }">
      <NuxtLink to="/dashboard" class="px-4 h-10 flex items-center block">
        <SwitchHorizontalIcon class="h-4 w-4 mr-2" />
        <span class="side-menu__label">Comparison</span>
      </NuxtLink>
    </li>
    <span class="grow"></span>
    <li class="side-menu__item mb-2 grow-0" :class="{ is_active: 0 }">
      <NuxtLink to="/dashboard" class="px-4 h-10 flex items-center block">
        <LogoutIcon class="h-4 w-4 mr-2" />
        <span class="side-menu__label">Logout</span>
      </NuxtLink>
    </li>
  </menu>
</template>

<style lang="scss">
.side-menu {
  font-size: em(15px);
  &__label {
    position: relative;
  }
  &__item {
    border-radius: 5px;
    transition: 0.2s background-color;
    &.is_active,
    &:hover {
      background: #212121;
      color: white;
    }
  }
}
</style>
