import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext"
import "./Head.css"

const Head = () => {

  const email = useContext(UserContext)

  return <div className="email-card">
    <h3>Correo actual:</h3>
    <p>{email}</p> 
    <hr></hr>
  </div>;
};

export default Head;
