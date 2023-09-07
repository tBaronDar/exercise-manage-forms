import { useReducer } from "react";

const initialState = { value: "", isTouched: false };

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { ...state, value: action.value };
  }
  if (action.type === "BLUR") {
    return { ...state, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialState;
};

const useBasicInput = (validation) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET", value: "", isTouched: false });
  };

  const inputIsValid = validation(inputState.value);

  const hasError = !inputIsValid && inputState.isTouched;

  return {
    inputChangeHandler,
    inputBlurHandler,
    enteredValue: inputState.value,
    hasError,
    inputIsValid,
    reset,
  };
};

export default useBasicInput;
