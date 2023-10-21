
import React, { useState } from "react";
import './../styles/App.css';
import Male from "./Male";
import Female from "./Female";

const App = () => {
  const [gender, setGender] = useState("");
  console.log(gender)
  return (
    <div>
      <div>
        <h2>Select your gender: </h2>
        <input type="radio" value="male" onChange={(e) => setGender(e.target.value)} name="gender" />
        <label for="male">Male</label>
        <input type="radio" value="female" onChange={(e) => setGender(e.target.value)} name="gender" />
        <label for="female">Female</label>
      </div>
      {
        gender === "male" ? <Male /> : ""
      
      }
      {
        gender === "female" ? <Female /> :""
      }
    </div>
  )
}

export default App
