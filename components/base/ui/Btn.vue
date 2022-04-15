<script setup lang="ts">
interface Props {
  title?: string;
  isLoading?: boolean;
  prevIcon?: string;
  postIcon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  isLoading: false,
  prevIcon: "",
  postIcon: "",
  theme: "blue",
});

const themeClass = computed(() => {
  if (props.theme === "white") {
    return "is_white";
  }
  if (props.theme === "blue") {
    return "is_blue";
  }
});
</script>

<template>
  <div
    class="btn bg-blue-700 hover:bg-blue-500 block rounded-lg text-center flex items-center justify-center px-5"
    :class="themeClass"
  >
    <component
      :is="prevIcon"
      v-if="prevIcon"
      class="btn__prev-icon h-5 w-5 mr-3"
    />
    <span v-if="props.isLoading" class="btn__loading"></span>
    <span v-else>{{ title }}</span>
    <component
      :is="postIcon"
      v-if="postIcon"
      class="btn__prev-icon h-5 w-5 ml-3"
    />
  </div>
</template>

<style lang="scss">
.btn {
  cursor: pointer;
  height: em($input-height);
  &__loading {
    @extend %load-w-icon;
    display: block;
    height: em(30px);
    width: em(30px);
  }
  &:hover {
    opacity: 90%;
  }
  &.is_white {
    background: white;
    color: #011a24;
  }
  &.is_blue {
    background: $blue;
  }
}
</style>
