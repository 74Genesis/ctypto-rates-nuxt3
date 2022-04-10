<script setup lang="ts">
const someVar = useState("someVar", () => 0);
const plusVar = () => {
  someVar.value++;
};
</script>

<template>
  <div class="index"></div>
</template>

<style lang="scss">
.index {
  &__login {
    border: 2px solid black;
    height: em(500px);
    width: em(400px);
    text-align: center;
    padding: em(20px);
    margin: auto;
    margin-top: 200px;
    border-radius: 6px;
  }
}
</style>
