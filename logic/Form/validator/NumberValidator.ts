import IValidator from "~/logic/Form/validator/IValidator";

export default class NumberValidator implements IValidator {
  public message = `The value is not a number`;
  isValid(value: string): boolean {
    const reg = new RegExp("^[0-9]+$");
    return reg.test(value);
  }
}
