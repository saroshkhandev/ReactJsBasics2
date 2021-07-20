import { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangehandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangehandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid Input',
            message: ' Please enter a valid name and age (non-empty values).'
        });
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid age (> 0).'
        });
      return;
    }
    const userData = {
      id: Math.random(),
      username: enteredUsername,
      age: enteredAge,
    };
    console.log(userData);
    props.onAddUser(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
      setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            onChange={usernameChangehandler}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredAge}
            onChange={ageChangehandler}
            id="age"
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
