export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("color", () => "pink");

export function useA() {
  return "a";
}

function useB() {
  return "b";
}

function _useC() {
  return "c";
}

export const useD = () => {
  return "d";
};

export { useB, _useC as useC };
