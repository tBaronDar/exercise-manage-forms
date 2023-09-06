import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: enteredNameIsValid,
    inputBlurHandler: nameInputBlurHandler,
    inputChangeHandler: nameInputChangeHandler,
    reset: resetName,
  } = useInput((ponos) => ponos.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailInputBlurHandler,
    inputChangeHandler: emailInputChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);

    resetName();
    resetEmail();
  };

  const nameInputStyles = !nameHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputStyles = !emailHasError
    ? "form-control"
    : "form-control invalid";

  const buttonStyle = formIsValid ? "form-actions" : "form-disabled";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailInputStyles}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">
            Email must not be empty and it must contain "@"
          </p>
        )}
      </div>

      <div className={buttonStyle}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
