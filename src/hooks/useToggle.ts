import { useState } from "react";

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => setValue((v) => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
}
