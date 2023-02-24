import { useEffect, useState } from "react";
import styles from "./App.css"
import Button from "./components/Button";

function App(){
  let [currentValue, setCurrentValue] = useState(0);
  let [auto, setAuto] = useState(false); //para controlar q el useEfect no se inice al inicio

  function addition(){
    setCurrentValue(currentValue + 1);
  };

  function substraction(){
    setCurrentValue(currentValue - 1);
  };

  function autoCount(){ //handler de auto, cambia el valor a True. La ejecutaremos al pulsar el boton
    if (auto) {         //Si auto es true, lo cambia a false
      setAuto (false);
    } else {            //De lo contrario, lo cambia a true. Asi el boton Auto activa y descativa el useEffect
      setAuto (true);
    }
  };

  function reset(){
    setCurrentValue(0);
    setAuto (false);    //Reset también pone auto en false, para detener la ejecución del useEffect
  };

 

  useEffect (
    ()=>{
      let codeClearTimeout;      //Variable para almacenar el codigo del clearTimeout para poder usarlo
      auto && (codeClearTimeout = setTimeout(addition, 1000));  // Si auto es true se ejecuta la funcion SetTimeout
      return ()=> clearTimeout (codeClearTimeout); //Detenemos el temporizador al destruirse el componente
    },
    [auto, currentValue]        //Cuando estes valores cambien, el useEffect actuara ejecutando la funcion flecha
  )

  return(
    <div className="counter">
      <h1>Megacontador</h1>
      <p>{currentValue}</p>
      <Button text="+" operation={addition}></Button>
      <Button text="-" operation={substraction}></Button>
      <Button text="Auto" operation={autoCount}></Button>
      <Button text="Reset" operation={reset}></Button>
    </div>
  );

};

export default App;