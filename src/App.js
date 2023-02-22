import { useState } from "react";

function App(){
  let [currentValue, setCurrentValue] = useState(0);

  function handlerClickAdd(event){
    setCurrentValue(currentValue + 1);
  }

  function handlerClickSubstract(event){
    setCurrentValue(currentValue - 1);
  }
    
  return(
    <>
    <p>{currentValue}</p>
    <button onClick={handlerClickAdd}>+</button>
    <button onClick={handlerClickSubstract}>-</button>
    </>
  );

};

export default App;