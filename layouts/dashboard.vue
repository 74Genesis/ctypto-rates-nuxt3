<script setup lang="ts"></script>

<template>
  <div class="l-dashboard w-full h-full flex items-stretch">
    <div class="l-dashboard__sidebar bg-black-900 text-white flex flex-col">
      <div class="l-dashboard__header flex items-center mx-4">
        <div class="l-dashboard__logo px-4">
          <span class="l-dashboard__logo-icon"></span>
          <span class="l-dashboard__logo-text">Crypto rates</span>
        </div>
      </div>
      <div class="l-dashboard__menu px-4 pt-5 grow">
        <LayoutSidebarMenu />
      </div>
    </div>
    <div class="l-dashboard__main flex-grow flex flex-col">
      <div class="l-dashboard__main-header">
        <LayoutDashboardHeader class="l-dashboard__header-dashboard h-full" />
      </div>
      <div class="l-dashboard__content grow">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.l-dashboard {
  height: 100vh;
  overflow: hidden;

  &__sidebar {
    min-width: em(250px);
  }
  &__header {
    border-bottom: 1px solid #1f1f1f;
    height: em($main-header-height);
  }
  &__header-dashboard {
    height: inherit;
  }
  &__main-header {
    height: em($main-header-height);
  }
  &__logo {
    display: flex;
    align-items: center;
  }
  &__logo-icon {
    @extend %crypto-icon;
    height: em(30px);
    width: em(30px);
    margin-right: em(10px);
  }
  &__logo-text {
    font-family: "nunito", monospace;
    font-weight: 500;
    font-size: em(20px);
  }
  &__main {
    position: relative;
    overflow-y: auto;
  }
  &__content {
    background-color: #f8f8f8;
  }
}
</style>
