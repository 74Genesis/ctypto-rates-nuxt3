export default interface IValidator {
  message: string;
  isValid(value: string): boolean;
}
