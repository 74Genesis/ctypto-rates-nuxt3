import IValidator from "~/logic/Form/validator/IValidator";

export default class EmailValidator implements IValidator {
  private _name = "";
  constructor(name = "") {
    this._name = name;
  }
  public isValid = (value: string) => {
    const reg = new RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    return reg.test(value);
  };
  get message() {
    return `Field "${this._name}" not match an email`;
  }
}
