<script setup lang="ts">
import Input from "~/components/base/ui/from/Input";
import InputPassword from "~/components/base/ui/from/InputPwd";
import UserIcon from "@heroicons/vue/outline/UserIcon";
import LockClosedIcon from "@heroicons/vue/outline/LockClosedIcon";
import { ref } from "vue";
import Form from "~/logic/Form/Form";
import Field from "~/logic/Form/Field";
import RequireValidator from "~/logic/Form/validator/RequireValidator";

const isPassInteract = ref(true);
const passInput = ref(null);
const formError = ref("");

const config = useRuntimeConfig();
const test = ref(config.apiUrl);

const name = new Field({
  name: "username",
  ref: ref(""),
  validators: [new RequireValidator("username")],
});

const pass = new Field({
  name: "password",
  ref: ref(generatePassword()),
  validators: [new RequireValidator("password")],
});

const form = new Form({
  url: "/authentication",
  method: "POST",
  fields: [name, pass],
});

/**
 * Generates password
 */
function generatePassword() {
  return window.crypto.getRandomValues(new BigUint64Array(1))[0].toString(36);
}

/**
 * Copy password
 */
function copyPass() {
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
}

/**
 * Submit form
 */
function submit() {
  formError.value = "";
  if (!form.isValid()) {
    formError.value = form.getErrors()[0];
  } else {
    form.submit();
  }
}
</script>

<template>
  <div class="form-signup">
    tess: {{ test }}
    <Input
      id="login-name"
      v-model="name.value"
      label="Username"
      placeholder="SuperCryptoNinja"
      class="form-signup__input mb-4"
      :post-icon="UserIcon"
    />
    <div class="form-signup__pass flex items-end mb-2">
      <InputPassword
        id="form-signup-pass"
        ref="passInput"
        v-model="pass.value"
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
    <p class="form-signup__error mb-5">{{ formError }}</p>
    <BaseUiBtn title="Sign up" :is-loading="form.loading" @click="submit()" />
  </div>
</template>

<style lang="scss">
.form-signup {
}
</style>
