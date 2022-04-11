<script setup lang="ts">
import FormInput from "~/components/input/FormInput";
import UserIcon from "@heroicons/vue/outline/UserIcon";
import LockClosedIcon from "@heroicons/vue/outline/LockClosedIcon";
const pass = ref("dDJ4n#js3Fj");
</script>

<template>
  <div class="form-signup">
    <p>Create an account</p>
    <FormInput
      id="login-name"
      label="Username"
      placeholder="SuperCryptoNinja"
      class="form-signup__input mb-4"
      :post-icon="UserIcon"
    />
    {{ pass }}
    <FormInput
      id="login-pass"
      v-model="pass"
      label="Password"
      placeholder="**********"
      class="form-signup__input mb-6"
      :post-icon="LockClosedIcon"
    />
    <BaseUiBtn title="Sign up" />
  </div>
</template>

<style lang="scss">
.form-signup {
}
</style>
