import IValidator from "~/logic/Form/validator/IValidator";

export default class NumberValidator implements IValidator {
  private _name = "";
  constructor(name = "") {
    this._name = name;
  }
  public isValid = (value: string) => {
    const reg = new RegExp("^[0-9]+$");
    return reg.test(value);
  };
  get message() {
    return `Field "${this._name}" is not a number`;
  }
}
