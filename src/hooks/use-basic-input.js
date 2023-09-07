import { useState } from "react";

const useBasicInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputIsValid = validation(enteredValue);

  const hasError = !inputIsValid && isTouched;

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    inputChangeHandler,
    inputBlurHandler,
    enteredValue,
    hasError,
    inputIsValid,
    isTouched,
    reset,
  };
};

export default useBasicInput;
