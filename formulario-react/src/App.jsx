import React, { useState } from 'react'
import './App.css'
import Main from "./components/Main"


function App() {
  const [form, setForm] = useState([]);

  const addData = (new_data) => [
    setForm([...form, new_data])
  ]

  return (
    <>
      <Main />
    </>
  )
}

export default App
