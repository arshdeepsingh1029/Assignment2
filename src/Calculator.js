import React, { useState, useEffect, useContext } from "react";
import "./Pages/Styles/Calculator.css";

const CalculatorContext = React.createContext();

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    console.log("The input or result state has changed!");
  }, [input, result]);

  const clear = () => {
    setInput("");
    setResult(null);
  };

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <CalculatorContext.Provider value={{ input, setInput, result, setResult }}>
      <div className="calculator-container">
        {result !== null && (
          <p className="calculator-result">Result: {result}</p>
        )}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="calculator-input"
        />
        <br />
        <br />
        <div className="calculator-buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <br />
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <br />
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>x</button>
          <br />
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("/")}>÷</button>
          <br />
          <br />
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default Calculator;
