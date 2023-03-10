import { useEffect, useState } from "react";

import "./App.css";

import Button from "./components/Button";
import InputValue from "./components/InputValue";

function App(){
  let [currentValue, setCurrentValue] = useState(0);
  let [autoInc, setAutoInc] = useState(false); //para controlar q el useEfect no se inice al inicio
  let [autoDec, setAutoDec] = useState(false); //para controlar q el useEfect no se inice al inicio
  let [autoValue, setAutoValue] = useState(1);
  let [autoValueInterval, setAutoValueInterval] = useState(1); //para controlar el valor del intervalo del auto

  function addition(){
    setCurrentValue(currentValue + 1);
  };

  function substraction(){
    setCurrentValue(currentValue - 1);
  };

  function autoIncrement(){ //Handler del autoInc.
    setAutoDec(false); //Cambio el autoDec a false, para detener la cuenta automatica negativa
    setAutoInc(!autoInc); //Cambia el valor de autoInc, para activarlo si esta detenido y viceversa
    setAutoValue(autoValueInterval);  //Cambia el valor de autoValue a 1 para sumarlo en la funcion autoCount
  };

  function autoDecrement(){ //Handler de autoDec.
    setAutoInc(false); //Cambio el autoInc a false, para detener la cuenta automatica
    setAutoDec(!autoDec); //Cambia el valor de autoDec, para activarlo si esta detenido y viceversa
    setAutoValue(-autoValueInterval); //Cambia el valor de autoValue a -1 para sumarlo en la funcion autoCount
  };

  function autoCount(){ //Funcion que se ejecutara con el useEffect
    setCurrentValue(currentValue + autoValue);
  };

  function reset(){ //Resetea los contadores de click y detiene ambos autos
    setCurrentValue(0);
    setAutoInc (false);    
    setAutoDec (false);
  };

  useEffect (
    ()=>{
      let codeClearTimeout;      //Variable para almacenar el codigo del clearTimeout para poder usarlo
      (autoInc || autoDec) && (codeClearTimeout = setTimeout(autoCount, 1000));  // Si auto es true se ejecuta la funcion SetTimeout
      return ()=> clearTimeout (codeClearTimeout); //Detenemos el temporizador al destruirse el componente
    },
    [autoInc, autoDec, currentValue]        //Cuando estes valores cambien, el useEffect actuara ejecutando la funcion flecha
  )

  return(
    <div className="counter">
        <h1>Megacontador</h1>
        <p>{currentValue}</p>
            <div className="row">
                <div className="col">
                  <div className="row">
                    <Button text="+ " operation={addition} style="success"></Button>
                  </div>
                  <div className="row">
                    <Button text="Auto + " operation={autoIncrement} style="success"></Button>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <Button text="- " operation={substraction} style="danger"></Button>
                  </div>
                  <div className="row">
                    <Button text="Auto - " operation={autoDecrement} style="danger"></Button>
                  </div>
                </div>
            </div>
            <div className="row">
                <Button text="Reset " operation={reset}></Button>
            </div>
            <div className="row">
                <InputValue interval={setAutoValueInterval}/>
            </div>
    </div>
  );

};

export default App;