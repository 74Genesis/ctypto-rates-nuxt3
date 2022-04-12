import Field from "~/logic/Form/Field";

/**
 * Form class
 */
export default class From {
  public url: string;
  public isError = false;
  public response = {};
  public method = "GET";
  public fields: Field[] = [];

  constructor(data: Partial<From>) {
    Object.assign(this, data);
  }

  /**
   * returns true if all fields are valid
   */
  isValid() {
    for (const field in this.fields) {
      if (!field.isValid()) return false;
    }
    return false;
  }

  /**
   * get all fields errors
   */
  getErrors() {
    let errors = [];
    for (const field in this.fields) {
      errors = [...errors, ...field.getErrors()];
    }
    return errors;
  }

  /**
   * Submit form
   */
  submit() {
    if (!this.isValid()) return false;
    console.log("SUBMIT");
  }
}
