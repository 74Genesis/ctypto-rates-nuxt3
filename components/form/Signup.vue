<script setup lang="ts">
import Input from "~/components/base/ui/from/Input";
import InputPassword from "~/components/base/ui/from/InputPwd";
import UserIcon from "@heroicons/vue/outline/UserIcon.js";
import LockClosedIcon from "@heroicons/vue/outline/LockClosedIcon.js";
import { ref } from "vue";
import Form from "~/logic/Form/Form";
import Field from "~/logic/Form/Field";
import RequireValidator from "~/logic/Form/validator/RequireValidator";
import PasswordValidator from "~/logic/Form/validator/PasswordValidator";
import EmailValidator from "~/logic/Form/validator/EmailValidator";

const passInput = ref(null); // Input Element
const isPassInteract = ref(true);
const formError = ref("");

const config = useRuntimeConfig();

const emit = defineEmits(["onSuccess"]);

const name = new Field({
  name: "email",
  ref: ref(""),
  validators: [new RequireValidator("email"), new EmailValidator("email")],
});

const pass = new Field({
  name: "password",
  ref: ref(generatePassword()),
  validators: [
    new RequireValidator("password"),
    new PasswordValidator("password"),
  ],
});

const form = new Form({
  url: "/signup",
  method: "POST",
  fields: [name, pass],
  onError: (data) => {
    formError.value = data?.error;
  },
  onSuccess: (data) => {
    emit("onSuccess");
  },
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
    <form action="" @submit.prevent="submit">
      <Input
        id="login-name"
        v-model="name.value"
        label="Email address"
        placeholder="crypto@ninja.com"
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
        <BaseUiBtn
          title="Copy"
          class="ml-3"
          theme="white"
          @click="copyPass()"
        />
      </div>
      <p class="form-signup__input mb-6">
        We've created a password for you. Cool, isn't it ?
      </p>
      <p class="form-signup__error mb-5 text-red-600">{{ formError }}</p>
      <BaseUiBtn title="Sign up" :is-loading="form.loading" @click="submit()" />
      <input v-show="0" type="submit" />
    </form>
  </div>
</template>
<style lang="scss">
.form-signup {
}
</style>
