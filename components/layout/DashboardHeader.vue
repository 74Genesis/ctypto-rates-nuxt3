<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/solid/index.js";
import { StarIcon } from "@heroicons/vue/outline/index.js";
const email = ref("public@user.net");
const avaLetter = (email.value[0] || "").toUpperCase();
</script>

<template>
  <header
    class="dashboard-header flex items-center text-black-500 h-full justify-end px-6"
  >
    <div class="dashboard-header__fav flex items-center h-full px-5 mr-2">
      <StarIcon class="w-6 h-6 mr-1" />
      <span>12</span>
    </div>
    <div
      class="dashboard-header__user flex items-center hover:bg-gray-100 h-full px-3"
    >
      <div class="dashboard-header__email mr-3">{{ email }}</div>
      <div
        class="dashboard-header__ava h-10 w-10 flex items-center justify-center"
      >
        {{ avaLetter }}
      </div>
      <ChevronDownIcon class="w-6 h-6 pt-1 ml-1" />
    </div>
  </header>
</template>

<style lang="scss">
.dashboard-header {
  font-size: em(15px);
  &__user {
    cursor: pointer;
    transition: 0.2s background-color;
  }
  &__fav {
    cursor: pointer;
    transition: 0.2s color;
    &:hover {
      color: $orange;
    }
  }
  &__email {
    font-size: em(20px);
  }
  &__ava {
    font-size: em(25px);
    text-align: center;
    border-radius: 100%;
    color: white;
    background: $orange;
  }
}
</style>
