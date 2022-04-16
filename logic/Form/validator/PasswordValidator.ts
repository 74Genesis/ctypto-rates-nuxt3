import IValidator from "~/logic/Form/validator/IValidator";

export default class PasswordValidator implements IValidator {
  private _name = "";
  constructor(name = "") {
    this._name = name;
  }
  public isValid = (value: string) => {
    const reg = new RegExp(/^[\d\w!@#$%^&*()-_.\{\}\[\]~]{5,}$/);
    return reg.test(value);
  };
  get message() {
    return `Password is wrong, perhaps you are using some restricted characters or it doesn't have at least 6 characters. `;
  }
}
