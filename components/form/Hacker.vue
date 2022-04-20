<script setup lang="ts">
import Input from "~/components/base/ui/from/Input";
import UserIcon from "@heroicons/vue/outline/UserIcon.js";
import LockClosedIcon from "@heroicons/vue/outline/LockClosedIcon.js";

const name = ref("public@user.net");
const pass = ref("j4Fdsf323Gjf");
</script>

<template>
  <div class="hacker-login">
    <Input
      id="login-name"
      v-model="name"
      label="Username"
      placeholder="SuperCryptoNinja"
      class="hacker-login__input mb-4"
      :post-icon="UserIcon"
      :is-warn="true"
      :is-disable="true"
    />
    <Input
      id="login-pass"
      v-model="pass"
      label="Password"
      placeholder="**********"
      class="hacker-login__input mb-2"
      :post-icon="LockClosedIcon"
      :is-warn="true"
      :is-disable="true"
    />
    <p class="hacker-login__label mb-5">Use public account.</p>
    <BaseUiBtn title="Login" />
  </div>
</template>

<style lang="scss"></style>
