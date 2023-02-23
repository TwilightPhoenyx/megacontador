import { useState } from "react";
import styles from "./App.css"
import Button from "./components/Button";

function App(){
  let [currentValue, setCurrentValue] = useState(0);

  function addition(){
    setCurrentValue(currentValue + 1);
  };

  function substraction(){
    setCurrentValue(currentValue - 1);
  };

  function reset(){
    setCurrentValue(0);
  };

  return(
    <div className="counter">
      <p>{currentValue}</p>
      <Button text="+" operation={addition}></Button>
      <Button text="-" operation={substraction}></Button>
      <Button text="Reset" operation={reset}></Button>
    </div>
  );

};

export default App;