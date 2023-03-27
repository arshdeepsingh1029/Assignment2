import React from "react";
import Calculator from "../Calculator";
import Checklist from "../Checklist";
import "./Styles/Tools.css";

function Tools() {
  return (
    <div className="container">
      <h1 className="tools-heading">Welcome to the Tools Page</h1>
      <br />
      <Checklist />
      <br />
      <div className="calculator">
        <h2 className="calc-heading">Calculator</h2>
        <Calculator />
      </div>
    </div>
  );
}

export default Tools;
