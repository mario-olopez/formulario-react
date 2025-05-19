import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
import Head from "../Header/Head";
import Form from "./Form";
import Card from "./Card";

const Main = () => {

  /*const [users, setUsers] = useState([])

  const addData = (new_user) => {
    setUsers([...users, new_user])
  } */

  const [user, setUser] = useState({
    name: "",
    email: "",
    url: "",
    age: "",
  })

  const addData = (new_user) => {
    setUser(new_user)
  }

  return (
    <>
      <UserContext.Provider value={user.email}>
        <Head/>
      </UserContext.Provider>
      <Form add={addData}/> {/* Sibling 1 */}
      <Card user={user}/> {/* Sibling 2 */}
    </>
  );
};

export default Main;
