import React, {useState} from "react";
import "./Form.css"

const Form = ({ add }) => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    url: "",
    age: 0
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(values)
    add(values);
  }

  return <div>

    <form onSubmit={handleSubmit} className="form-card">
      <h3>Introduce tus datos</h3>
      
      <label htmlFor="name">Nombre:</label>
      <input type="text" name="name" onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" onChange={handleChange}/>

      <label htmlFor="photo">URL foto:</label>
      <input type="url" name="url" onChange={handleChange}/>

      <label htmlFor="age">Edad:</label>
      <input type="number" name="age" onChange={handleChange}/>
      

      {values.name && values.email && values.url && values.age > 0 ?
       <button type="submit">Enviar formulario</button> :
       <b>Rellena todos los campos para poder enviar</b>
       }
    </form>

  </div>;
};

export default Form;
