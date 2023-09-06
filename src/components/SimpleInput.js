import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [nameInputIsTouched, setNameInputIsTouched] = useState(false);
  const [emailInputIsTouched, setEmailInputIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && nameInputIsTouched;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && emailInputIsTouched;

  let formIsValid = false;

  if (nameInputIsTouched || emailInputIsTouched) {
    formIsValid = !emailInputIsInvalid && !nameInputIsInvalid ? true : false;
  }

  console.log(formIsValid);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    //setNameInputIsTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    //setEmailInputIsTouched(true);
  };

  const nameInputBlurHandler = () => {
    setNameInputIsTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEmailInputIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setNameInputIsTouched(true);
    setEmailInputIsTouched(true);

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName("");
    setEnteredEmail("");
    setNameInputIsTouched(false);
    setEmailInputIsTouched(false);
  };

  console.log(enteredNameIsValid + "1");
  console.log(nameInputIsTouched + "2");
  console.log(nameInputIsInvalid);

  const nameInputStyles = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const emailInputStyles = !emailInputIsInvalid
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
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
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
        {emailInputIsInvalid && (
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
