import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import "./App.css";
import UserList from "./components/UserList/UserList";

const DUMMY_USERS = [
  {
    id: "u1",
    username: "Sarosh",
    age: 21,
  },
  {
    id: "u2",
    username: "Faraz",
    age: 19,
  },
];

function App() {
  const [users, addUsers] = useState(DUMMY_USERS);
  const addUserHandler = (userData) => {
    addUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({id: Math.random().toString(), username: userData.username, age: userData.age})
    });
  };

  return (
    <div>
      <section id="user-form">
        <UserForm onAddUser={addUserHandler} />
        <UserList users={users}  />
      </section>
    </div>
  );
}

export default App;
