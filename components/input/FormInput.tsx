import { defineComponent } from "vue";

/**
 * The basic component of Input, can by extended .
 */
export default defineComponent({
  props: {
    id: {
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
      validator: (value) => ["light", "dark"].includes(value),
    },
    isError: {
      type: String,
      default: "light",
    },
    errorMsg: {
      type: String,
      default: "",
    },
  },
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
      const style = {};
      if (this.mode === "light") {
      }
      return (
        <label
          htmlFor={this.id}
          style={style}
          className="form-input__label block w-full text-md opacity-90 mb-1"
        >
          {this.label}
        </label>
      );
    },
    inputWrap() {
      const style = {};
      if (this.mode === "light") {
        style["background-color"] = this.isError ? "#ffffff14" : "#ffffff14";
      }
      return (
        <div className="form-input__wrap rounded-lg" style={style}>
          {this.input()}
        </div>
      );
    },
    input() {
      return (
        <input
          type="text"
          id={this.id}
          className="form-input__input outline-0 bg-transparent block w-full px-5 pt-3 pb-3.5"
          placeholder={this.placeholder}
        />
      );
    },
    errorBlock() {
      return <div className="form-input__error">{this.errorMsg}</div>;
    },
    field() {
      return (
        <div className="form-input w-full">
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
