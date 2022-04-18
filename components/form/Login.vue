<script setup lang="ts">
import Input from "~/components/base/ui/from/Input";
import InputPwd from "~/components/base/ui/from/InputPwd";
import UserIcon from "@heroicons/vue/outline/UserIcon";
import LockClosedIcon from "@heroicons/vue/outline/LockClosedIcon";
import Field from "~/logic/Form/Field";
import { ref } from "vue";
import RequireValidator from "~/logic/Form/validator/RequireValidator";
import EmailValidator from "~/logic/Form/validator/EmailValidator";
import PasswordValidator from "~/logic/Form/validator/PasswordValidator";
import Form from "~/logic/Form/Form";

const formError = ref("");

const name = new Field({
  name: "email",
  ref: ref(""),
  validators: [new RequireValidator("email"), new EmailValidator("email")],
});

const pass = new Field({
  name: "password",
  ref: ref(""),
  validators: [
    new RequireValidator("password"),
    new PasswordValidator("password"),
  ],
});

const form = new Form({
  url: "/login",
  method: "POST",
  fields: [name, pass],
  onError: (data) => {
    formError.value = data?.error;
  },
  onSuccess: (data) => {
    return;
  },
});

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
  <div class="form-login">
    token: {{ token }}
    <BaseUiBtn title="Set token" @click="token.value = `adfasjflsdf`" />
    <Input
      id="login-name"
      v-model="name.value"
      label="Username"
      placeholder="SuperCryptoNinja"
      class="mb-4"
      :post-icon="UserIcon"
    />
    <InputPwd
      id="login-pass"
      v-model="pass.value"
      label="Password"
      placeholder="**********"
      class="mb-2"
      :post-icon="LockClosedIcon"
    />
    <p class="form-signup__error mb-5 text-red-600">{{ formError }}</p>
    <BaseUiBtn title="Login" :is-loading="form.isLoading" @click="submit" />
  </div>
</template>

<style lang="scss"></style>
