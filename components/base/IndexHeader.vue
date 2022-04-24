<script setup lang="ts">
import { mdiAccount } from "@mdi/js";
const icon = mdiAccount;
const comoponentName = "IndexHeader";
</script>

<template>
  <header class="index-header">
    <BaseContainer class="index-header__container">
      <div class="index-header__inner">
        <div class="index-header__logo">
          <span class="index-header__logo-icon"></span>
          <span class="index-header__logo-text">Crypto rates</span>
        </div>
        <LayoutMainMenu class="index-header__menu" />
      </div>
    </BaseContainer>
  </header>
</template>

<style lang="scss">
.index-header {
  color: white;
  border-bottom: 1px solid rgba(146, 110, 110, 0.3);
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: em(60px);
  }
  &__logo {
    display: flex;
    align-items: center;
  }
  &__logo-icon {
    @extend %crypto-icon;
    height: em(35px);
    width: em(35px);
    margin-right: em(15px);
  }
  &__logo-text {
    font-family: "nunito", monospace;
    font-weight: 500;
    font-size: em(24px);
  }
}
</style>
