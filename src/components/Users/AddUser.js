import { useState, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";


const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
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
    nameInputRef.current.value = '';
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
      setError(null);
  };

  return (
    <Wrapper>
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
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
