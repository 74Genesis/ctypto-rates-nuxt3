import IValidator from "~/logic/Form/validator/IValidator";
import { Ref } from "vue";

export default class Field {
  public name: string;
  public ref: Ref;
  public validators: IValidator[];
  public readonly = false;

  constructor(data: Partial<Field>) {
    Object.assign(this, data);
  }

  /**
   * returns true if all validators passes successfully
   */
  public isValid(): boolean {
    for (let i = 0; i < this.validators.length; i++) {
      if (!this.validators[i].isValid(this.value)) return false;
    }
    return true;
  }

  /**
   * Get errors of all validators not passed
   */
  getErrors() {
    const errors: string[] = [];
    for (let i = 0; i < this.validators.length; i++) {
      if (!this.validators[i].isValid(this.ref.value))
        errors.push(this.validators[i].message);
    }
    return errors;
  }

  get value() {
    return this.ref.value;
  }
  set value(val: string) {
    if (this.readonly) return;
    this.ref.value = val;
  }
}
