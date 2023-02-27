import { useState } from "react";

function Button({text, operation}){

    let [clickNumber, setClickNumber] = useState(0);

    function countClickNumber(){
        setClickNumber(clickNumber + 1);
    };

    function handlerClickedButton(){
        countClickNumber();
        operation();
    };

    return (
        <button onClick={handlerClickedButton}>{text} <span class="badge badge-light">{clickNumber}</span></button>
    );

};

export default Button;