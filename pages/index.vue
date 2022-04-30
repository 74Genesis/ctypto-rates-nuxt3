<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "main",
});
</script>

<template>
  <div class="p-index">
    <div class="p-index__wrapper">
      <div class="p-index__title"><h1>Nice to meet you!</h1></div>
      <div class="p-index__login">
        <MainAuthTabs class="p-index__auth" />
      </div>
      <div class="p-index__description">
        <p>
          It's a little pet project using vue3/nuxt3 and other relative
          technologies. You can find more detailed description in About section
        </p>
        <p>
          You can find more detailed description in
          <NuxtLink to="/about">About</NuxtLink> section
        </p>
        <p>
          If you want to order the development of your website, contact to me:
        </p>
        <ol>
          <li>Email: itsdev74@gmail.com</li>
          <li>Telegram: <a href="https://t.me/igorishere">@igorishere</a></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.p-index {
  width: 100%;
  min-height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  &__wrapper {
    color: white;
    display: flex;
    max-width: em(800px);
    flex-wrap: wrap;
    align-items: flex-start;
    padding-bottom: em(40px);
  }
  &__title {
    flex-basis: 100%;
    h1 {
      margin-top: em(20px);
      margin-bottom: em(15px);
    }
  }
  &__login {
    flex-basis: 60%;
  }
  &__description {
    flex-basis: 40%;
    line-height: 1.35;
    font-size: em(16px);
    margin-top: em(15px);
    h3 {
      margin-top: 0;
      opacity: 1;
    }
    p {
      opacity: 0.7;
      margin-top: 0;
    }
    a {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
  &__auth {
    min-height: em(400px);
  }
}
</style>
