import { defineComponent, h } from "vue";

/**
 * The basic component of Input, can by extended.
 */

interface Styles {
  [key: string]: string;
}
export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "light",
      validator: (value: string) => ["light", "dark"].includes(value),
    },
    isError: {
      type: String,
      default: "light",
    },
    errorMsg: {
      type: String,
      default: "",
    },
    class: {
      type: String,
      default: "",
    },
    prevIcon: {
      type: [String, Function],
      default: "",
    },
    postIcon: {
      type: [String, Function],
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    isLabel() {
      return !!this.label;
    },
  },
  methods: {
    labelBlock() {
      const style: Styles = {};
      if (this.mode === "light") {
      }
      return (
        <label
          for={this.id}
          style={style}
          class="form-input__label block w-full text-md opacity-90 mb-2"
        >
          {this.label}
        </label>
      );
    },
    renderPrevIcon() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return h(this.prevIcon, { class: "w-5 h-5 mr-3.5 opacity-70" });
    },
    renderPostIcon() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return h(this.postIcon, { class: "w-5 h-5 ml-3.5 opacity-70" });
    },
    inputWrap() {
      const style: Styles = {
        height: "2.6666666667em",
      };
      if (this.mode === "light") {
        style["background-color"] = this.isError ? "#ffffff14" : "#ffffff14";
      }
      return (
        <div
          class="form-input__wrap rounded-lg flex items-center px-5"
          style={style}
        >
          {this.renderPrevIcon()}
          {this.input()}
          {this.renderPostIcon()}
        </div>
      );
    },
    input() {
      return (
        <input
          type="text"
          id={this.id}
          class="form-input__input outline-0 bg-transparent block w-full h-full grow"
          placeholder={this.placeholder}
          value={this.modelValue}
          onInput={this.onInput}
        />
      );
    },
    onInput(event: any) {
      this.$emit("update:modelValue", event.target.value);
    },
    errorBlock() {
      return <div class="form-input__error">{this.errorMsg}</div>;
    },
    field() {
      return (
        <div class={["form-input w-full", this.class]}>
          {this.isLabel && this.labelBlock()}
          {this.inputWrap()}
          {!!this.errorMsg && this.errorBlock()}
        </div>
      );
    },
  },
  render() {
    return this.field();
  },
});
