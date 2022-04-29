<script setup lang="ts">
import Input from "~/components/base/ui/from/Input";
import UserIcon from "@heroicons/vue/outline/UserIcon.js";
import LockClosedIcon from "@heroicons/vue/outline/LockClosedIcon.js";
import { userStore } from "~/stores/user";
import { ref } from "vue";
import Field from "~/logic/Form/Field";
import RequireValidator from "~/logic/Form/validator/RequireValidator";
import EmailValidator from "~/logic/Form/validator/EmailValidator";
import PasswordValidator from "~/logic/Form/validator/PasswordValidator";
import Form from "~/logic/Form/Form";

const user = userStore();
const cookieToken = useCookie("token");
const formError = ref("");

const name = new Field({
  name: "email",
  ref: ref("public@user.net"),
  validators: [new RequireValidator("email"), new EmailValidator("email")],
});

const pass = new Field({
  name: "password",
  ref: ref("j4Fdsf323Gjf"),
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
    if (data && data.success && data.token) {
      user.login(data.token);
    }
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
  <div class="hacker-login">
    <Input
      id="login-name"
      v-model="name.value"
      label="Username"
      placeholder="SuperCryptoNinja"
      class="hacker-login__input mb-4"
      :post-icon="UserIcon"
      :is-warn="true"
      :is-disable="true"
    />
    <Input
      id="login-pass"
      v-model="pass.value"
      label="Password"
      placeholder="**********"
      class="hacker-login__input mb-2"
      :post-icon="LockClosedIcon"
      :is-warn="true"
      :is-disable="true"
    />
    <p class="hacker-login__label mb-5">Use public account.</p>
    <BaseUiBtn title="Login" :is-loading="form.loading" @click="submit" />
  </div>
</template>

<style lang="scss"></style>
