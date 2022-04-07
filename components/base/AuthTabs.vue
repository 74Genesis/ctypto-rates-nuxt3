<script setup lang="ts">
const tab = useState("tab", () => 0);
</script>

<template>
  <div class="auth-tabs">
    <v-tabs class="auth-tabs__header" v-model="tab" left>
      <v-tab :value="1">Login</v-tab>
      <v-tab :value="2">Sign up</v-tab>
      <v-tab :value="3">Hacker!</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item :value="1">Login</v-window-item>
      <v-window-item :value="2">SIGNUP</v-window-item>
      <v-window-item :value="3">WITHOUT</v-window-item>
    </v-window>
  </div>
</template>

<style lang="scss">
.auth-tabs {
  &__headers {
    text-decoration: none;
    font-family: "exo";
  }
}
</style>
