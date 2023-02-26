import { useState } from "react";

const useInput = (validateInput) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(input);
  const hasError = !inputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setInput("");
    setIsTouched(false);
  };

  return {
    value: input,
    isValid: inputIsValid,
    hasError: hasError,
    inputChangeHandler: inputChangeHandler,
    inputBlurHandler: inputBlurHandler,
    resetInput: resetInput,
  };
};

export default useInput;
