import React from "react";

import { Calculator } from "./Calculator";
// import classes from "./App.module.css";
import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="wrapper">
      <Calculator />
      <Button>hola!</Button>
      <Button disable>hola!</Button>
    </div>
  );
}

export default App;
