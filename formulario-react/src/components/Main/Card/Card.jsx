import React from "react";
import "./Card.css"

const Card = ({ user }) => {

  const {name, email, url, age} = user;

  return <div className="card">
    <h3>Datos del formulario:</h3>
    <p>Nombre: <b>{name}</b></p>
    <p>Email: <b>{email}</b></p>
    <img src={url || null} className="foto"></img>
    <p>Edad: <b>{age}</b></p>
  </div>;
};

export default Card;
