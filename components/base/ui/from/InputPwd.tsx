import Input from "./Input";
import { h } from "vue";
import EyeIcon from "@heroicons/vue/outline/EyeIcon";

/**
 * The basic component of Input, can by extended.
 */

export default defineComponent({
  extends: Input,
  data() {
    return {
      showPass: 0,
    };
  },
  computed: {
    postIconInternal() {
      return this.postIcon || EyeIcon;
    },
  },
  methods: {
    renderPostIcon() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return h(this.postIconInternal, {
        class: "w-5 h-5 ml-3.5 opacity-70",
        onClick: this.showClick,
      });
    },
    showClick() {
      this.showPass = 1 - this.showPass;
    },
    input() {
      return (
        <input
          id={this.id}
          type={this.showPass ? "text" : "password"}
          class="form-input__input outline-0 bg-transparent block w-full h-full grow"
          placeholder={this.placeholder}
          value={this.modelValue}
          onInput={this.onInput}
          disabled={this.isDisable}
        />
      );
    },
  },
});
