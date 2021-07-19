import styles from "./UserForm.module.css";
import Button from "../UI/Button/Button";
import { useState } from "react";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const usernameInputChangeHandler = (event) => {
    // if (event.target.value.trim().length > 0) {
    //   setIsUsernameValid(false);
    // }
    setEnteredUsername(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    // if (event.target.value < 0) {
    //   setIsAgeValid(false);
    // }
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    if (enteredUsername.trim().length === 0 || enteredAge < 0) {
      setIsUsernameValid(false);
      setIsAgeValid(false);
      return;
    }
    props.onAddUser(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["user-form"]} `}>
        <label>Username</label>
        <input
          className={`${!isUsernameValid && styles["invalid-username"]}`}
          type="text"
          value={enteredUsername}
          onChange={usernameInputChangeHandler}
        />

        <label>Age (Years)</label>
        <input
          className={`${!isAgeValid && styles["invalid-age"]}`}
          type="text"
          value={enteredAge}
          onChange={ageInputChangeHandler}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
