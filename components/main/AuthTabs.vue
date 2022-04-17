<script setup lang="ts">
import LoginIcon from "@heroicons/vue/outline/LoginIcon";
import PencilAltIcon from "@heroicons/vue/outline/PencilAltIcon";
import DesktopComputerIcon from "@heroicons/vue/outline/DesktopComputerIcon";

const tab = useState("tab", () => 1);
const tabColor = ref("#ffffff1a");

let d = useD();

const change = () => {
  d = d + "f";
};
</script>

<template>
  <div class="auth-tabs">
    <div class="auth-tabs__header">
      <div class="auth-tabs__tab" :class="{ is_active: tab === 1 }">
        <button
          class="auth-tabs__btn hover:bg-white/5 px-5 py-3 flex items-center"
          @click="tab = 1"
        >
          <LoginIcon class="h-5 w-5 mr-1.5" />
          Login
        </button>
      </div>
      <div class="auth-tabs__tab" :class="{ is_active: tab === 2 }">
        <button
          class="auth-tabs__btn hover:bg-white/5 px-5 py-3 flex items-center"
          @click="tab = 2"
        >
          <PencilAltIcon class="h-5 w-5 mr-1.5" />
          Sign up
        </button>
      </div>
      <div class="auth-tabs__tab" :class="{ is_active: tab === 3 }">
        <button
          class="auth-tabs__btn hover:bg-white/5 px-5 py-3 flex items-center"
          @click="tab = 3"
        >
          <DesktopComputerIcon class="h-5 w-5 mr-1.5" />
          Hacker!
        </button>
      </div>
    </div>
    <div class="auth-tabs__windows">
      <Transition mode="out-in" name="switch-left">
        <div v-if="tab === 1" class="auth-tabs__window">
          <FormLogin class="auth-tabs__login" />
        </div>
        <div v-else-if="tab === 2" class="auth-tabs__window">
          <FormSignup class="auth-tabs__signup" @on-success="tab = 1" />
        </div>
        <div v-else-if="tab === 3" class="auth-tabs__window">
          <FormHacker class="auth-tabs__hacker" />
        </div>
      </Transition>
    </div>
    <!--    <v-icon icon="mdi-account" />-->
  </div>
</template>

<style lang="scss">
.auth-tabs {
  &__header {
    text-decoration: none;
    font-family: "exo";
    display: flex;
  }
  &__btn {
    position: relative;
    &::before {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      margin: auto;
      width: 0;
      opacity: 0;
      transition: opacity 0.3s, width 0.3s;
    }
  }
  &__tab.is_active &__btn::before,
  &__tab:hover &__btn::before {
    opacity: 0.8;
    width: 100%;
  }

  &__windows {
    position: relative;
    display: block;
    margin-right: em(50px);
    margin-top: em(15px);
  }
  &__window {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    top: 0;
    padding: em(20px) em(0px);
  }
}
</style>
