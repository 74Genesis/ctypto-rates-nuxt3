import IValidator from "~/logic/Form/validator/IValidator";

export default class RequireValidator implements IValidator {
  public message = `Value is required`;
  isValid(value: string): boolean {
    return !!value;
  }
}
