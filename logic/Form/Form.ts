import Field from "~/logic/Form/Field";
import { $fetch } from "ohmyfetch";
import { ref } from "vue";

/**
 * Form class, can make any http requests, and check validation
 */
export default class Form {
  public url: string;
  public isError = false;
  public response = {};
  public method = "GET";
  public headers = {};
  public fields: Field[] = [];
  private _loading = ref(false);

  constructor(data: Partial<Form>) {
    Object.assign(this, data);
  }

  /**
   * returns true if all fields are valid
   */
  public isValid() {
    for (let i = 0; i < this.fields.length; i++) {
      if (!this.fields[i].isValid()) {
        return false;
      }
    }
    return true;
  }

  /**
   * get all errors of validators which is not passed
   */
  getErrors() {
    let errors: string[] = [];
    for (let i = 0; i < this.fields.length; i++) {
      errors = [...errors, ...this.fields[i].getErrors()];
    }
    return errors;
  }

  /**
   * get field by name
   * @param name - field name
   */
  getField(name: string): Field | undefined {
    const field = this.fields.find((field) => field.name === name);
    return field || undefined;
  }

  get loading() {
    return this._loading.value;
  }

  beforeSubmit() {
    return;
  }

  /**
   * Submit form
   */
  async submit() {
    if (!this.isValid()) return false;
    this.beforeSubmit();
    this._loading.value = true;
    try {
      const config = useRuntimeConfig();
      console.log(config);
      console.log(config.baseUrl);
      console.log(config.baseUrl);
      console.log(config.baseUrl);
      const r = await $fetch(this.url, {
        method: this.method,
        headers: {
          "Content-Type": "application/json",
          ...this.headers,
        },
        body: { some: "json" },
        baseURL: config.apiUrl,
      });
      console.log("-------", r);
    } catch (e) {
      console.log(e);
    }

    this._loading.value = false;
    this.afterSubmit();
  }

  afterSubmit() {
    return;
  }
}
