export const userData = useState("userData", () => null);
export const userToken = useState("userToken", () => "");

export function userSetToken(value: string) {
  userToken.value = value;
}
