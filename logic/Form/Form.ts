import Field from "~/logic/Form/Field";
import { $fetch } from "ohmyfetch";

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

  beforeSubmit() {
    return;
  }

  /**
   * Submit form
   */
  async submit() {
    if (!this.isValid()) return false;
    this.beforeSubmit();
    const r = await $fetch(this.url, {
      method: this.method,
      headers: {
        "Content-Type": "application/json",
        ...this.headers,
      },
      body: { some: "json" },
      baseURL: "/",
    });
    console.log("SUBMIT", r);
    this.afterSubmit();
  }

  afterSubmit() {
    return;
  }
}
