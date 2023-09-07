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

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  const buttonStyles = formIsValid ? "form-actions" : "form-disabled";

  return (
    <form onSubmit={basicFormSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
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

        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
        </div>
        {lastNameHasError && (
          <p className="error-text-right">Last name must not be empty.</p>
        )}
      </div>

      <div className="form-control">
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
