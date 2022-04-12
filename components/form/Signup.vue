<script setup lang="ts">
import Input from "~/components/base/ui/from/Input";
import InputPassword from "~/components/base/ui/from/InputPwd";
import UserIcon from "@heroicons/vue/outline/UserIcon";
import LockClosedIcon from "@heroicons/vue/outline/LockClosedIcon";
import { ref } from "vue";

const generatePassword = function () {
  return window.crypto.getRandomValues(new BigUint64Array(1))[0].toString(36);
};

const pass = ref(generatePassword());
const isPassInteract = ref(true);
const passInput = ref(null);

const copyPass = function () {
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pass.value).then(
        () => {
          console.log("Copied to clipboard successfully.");
        },
        (err) => {
          console.log("Failed to copy the text to clipboard.", err);
        }
      );
    } else if (window && window.clipboardData) {
      window.clipboardData.setData("Text", pass.value);
    }
  } catch (e) {
    console.warn(e);
  }
};
</script>

<template>
  <div class="form-signup">
    <Input
      id="login-name"
      label="Username"
      placeholder="SuperCryptoNinja"
      class="form-signup__input mb-4"
      :post-icon="UserIcon"
    />

    <div class="form-signup__pass flex items-end mb-2">
      <InputPassword
        id="form-signup-pass"
        ref="passInput"
        v-model="pass"
        label="Password"
        placeholder="**********"
        class="form-signup__input grow"
        :is-warn="isPassInteract"
        @click="isPassInteract = false"
      />
      <BaseUiBtn title="Copy" class="ml-3" theme="white" @click="copyPass()" />
    </div>
    <p class="form-signup__input mb-6">
      We've created a password for you. Cool, isn't it ?
    </p>
    <BaseUiBtn title="Sign up" />
  </div>
</template>

<style lang="scss">
.form-signup {
}
</style>
