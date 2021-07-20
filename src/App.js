import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UserList from "./components/UserList/UserList";
import Wrapper from "./components/Helpers/Wrapper";

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
  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const addUserHandler = (userData) => {
    setUsersList((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(userData);
      return updatedUsers;
    });
    console.log("Updated Users")
  };

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (usersList.length > 0) {
    content = <UserList users={usersList} />;
  }

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <section id="users">{content}</section>
    </Wrapper>
  );
}

export default App;
