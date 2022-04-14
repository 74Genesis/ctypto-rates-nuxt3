import IValidator from "~/logic/Form/validator/IValidator";

export default class RequireValidator implements IValidator {
  public message = `Value is required`;
  public isValid = (value: string) => {
    return !!value;
  };
}
