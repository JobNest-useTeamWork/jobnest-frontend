import { useState, useCallback } from "react";

type UseInputReturn = [
  string,
  (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void,
  () => void
];

function useInput(initialValue: string = ""): UseInputReturn {
  const [value, setValue] = useState<string>(initialValue);

  // Handles input changes
  const handleChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setValue(event.target.value);
    },
    []
  );

  // Resets the input value to the initial value
  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, handleChange, reset];
}

export default useInput;
