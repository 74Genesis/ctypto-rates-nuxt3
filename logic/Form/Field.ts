import IValidator from "~/logic/Form/validator/IValidator";

export default class Field {
  public name: string;
  public value = "";
  public validators: IValidator[];

  /**
   * returns true if all validators passes successfully
   */
  isValid() {
    for (v in this.validators) {
      if (!v.isValid(this.value)) return false;
    }
    return true;
  }

  /**
   * Get errors of all validators not passed
   */
  getErrors() {
    const errors: string[] = [];
    for (const v in this.validators) {
      if (!v.isValid(this.value)) errors.push(v.message);
    }
    return errors;
  }
}
