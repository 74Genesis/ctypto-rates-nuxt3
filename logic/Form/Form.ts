import Field from "~/logic/Form/Field";
import { $fetch } from "ohmyfetch";
import { ref } from "vue";

// TODO: csrf

/**
 * Form class, can make any http requests, and check validation
 */
export default class Form {
  public url: string;
  public response = {};
  public method = "GET";
  public headers: Record<string, string> = {};
  public fields: Field[] = [];
  public onSuccess: (data: Record<string, any>) => void;
  public onError: (data: Record<string, any>) => void;
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
   * TODO: Type for error format
   */
  async submit() {
    if (!this.isValid()) return false;
    this.beforeSubmit();
    this._loading.value = true;

    const config = useRuntimeConfig();
    const r = await $fetch(this.url, {
      method: this.method,
      headers: {
        "Content-Type": "application/json",
        ...this.headers,
      },
      body: this.getBody(),
      baseURL: config.apiUrl,
    }).catch((error) => {
      this.onError(error.data);
    });

    if (r?.success) {
      this.onSuccess(r);
    } else {
      this.onError(r);
    }

    this._loading.value = false;
    this.afterSubmit();
  }

  /**
   * returns a request body, json or FormData, depending on headers
   * @private
   */
  private getBody() {
    if (this.headers["Content-Type"] === "multipart/form-data") {
      return this.getFormData();
    } else {
      return this.getJsonData();
    }
  }

  /**
   * returns FormData instance collected from fields array
   * @private
   */
  private getFormData() {
    const data = new FormData();
    for (let i = 0; i < this.fields.length; i++) {
      data.append(this.fields[i].name, this.fields[i].value);
    }
    return data;
  }

  /**
   * returns simple object of field's names and values
   * @private
   */
  private getJsonData() {
    const data: Record<string, string> = {};
    for (let i = 0; i < this.fields.length; i++) {
      data[this.fields[i].name] = this.fields[i].value;
    }
    return data;
  }

  afterSubmit() {
    return;
  }

  /**
   * reset form fields
   * TODO: add default values for fields, reset to defaults instead empty
   */
  reset() {
    for (let i = 0; i < this.fields.length; i++) {
      this.fields[i].value = "";
    }
  }
}
