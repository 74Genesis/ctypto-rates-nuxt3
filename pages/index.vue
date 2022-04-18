<script setup lang="ts">
const someVar = useState("someVar", () => 0);
const plusVar = () => {
  someVar.value++;
};
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
          My name is Igor, and I worked with Nuxt\Vue 2 long time. This website
          is a small pet project to learn Vue 3, Nuxt 3 and other relative
          technologies.
        </p>
        <p>
          More detailed description about stack used here you can find in the
          section <NuxtLink to="/about">About</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.p-index {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  margin-top: em(60px);
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  &__wrapper {
    color: white;
    display: flex;
    max-width: em(800px);
    flex-wrap: wrap;
    align-items: flex-start;
    padding-bottom: em(40px);
    margin-top: em(-30px);
  }
  &__title {
    flex-basis: 100%;
    h1 {
      margin-top: 0;
      margin-bottom: em(20px);
    }
  }
  &__login {
    flex-basis: 60%;
  }
  &__description {
    flex-basis: 40%;
    line-height: 1.35;
    h3 {
      margin-top: 0;
      opacity: 1;
    }
    p {
      opacity: 0.7;
      margin-top: 0;
      font-size: em(16px);
    }
  }
}
</style>
