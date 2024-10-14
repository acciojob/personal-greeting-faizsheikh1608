import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const handleOnchange = function (e) {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <h1>Enter your name:</h1>
      <input type="text" onChange={(e) => handleOnchange(e)}></input>
      <h1>{userInput !== "" && `Hello ${userInput}!`}</h1>
    </div>
  );
};

export default App;
