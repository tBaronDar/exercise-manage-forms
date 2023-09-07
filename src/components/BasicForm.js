import useBasicInput from "../hooks/use-basic-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    hasError: firstNameHasError,
    //isTouched: firstNameIsTouched,
    inputIsValid: firstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredLastName,
    hasError: lastNameHasError,
    //isTouched: firstNameIsTouched,
    inputIsValid: lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    hasError: emailHasError,
    //isTouched: firstNameIsTouched,
    inputIsValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useBasicInput((value) => value.includes("@"));

  const basicFormSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameStyles = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameStyles = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailStyles = emailHasError ? "form-control invalid" : "form-control";

  const buttonStyles = formIsValid ? "form-actions" : "form-disabled";

  return (
    <form onSubmit={basicFormSubmitHandler}>
      <div className="control-group">
        <div className={firstNameStyles}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="first-name"
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>

        <div className={lastNameStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>

      <div className={emailStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">
            Email must not be empty and it must contain @.
          </p>
        )}
      </div>

      <div className="form-actions">
        <button className={buttonStyles} disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
