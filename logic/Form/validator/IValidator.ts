export default interface IValidator {
  message: string;
  isValid(): boolean;
}