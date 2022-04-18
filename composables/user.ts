export const userData = () => useState("userData", () => null);
export const useUserToken = useState("useUserToken", () => "");

export function useUserSetToken(value: string) {
  useUserToken.value = value;
}
