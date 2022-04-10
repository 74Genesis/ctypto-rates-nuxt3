<script setup lang="ts">
import FormInput from "~/components/input/FormInput";
const name = "input";
</script>

<template>
  <div class="form-login">
    <FormInput
      id="login-name"
      label="Username"
      placeholder="SuperCryptoNinja"
      class="mb-3"
    />
    <FormInput
      id="login-name"
      label="Password"
      placeholder="**********"
      class="mb-5"
    />
    <BaseUiBtn title="Login" />
  </div>
</template>

<style lang="scss"></style>
