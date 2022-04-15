import IValidator from "~/logic/Form/validator/IValidator";

export default class RequireValidator implements IValidator {
  private _name = "";
  constructor(name = "") {
    this._name = name;
  }
  public isValid = (value: string) => {
    return !!value;
  };
  get message() {
    return `Field "${this._name}" is required`;
  }
}
