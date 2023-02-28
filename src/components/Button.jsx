import { useState } from "react";

function Button({text, operation, style="primary"}){

    let [clickNumber, setClickNumber] = useState(0);

    function countClickNumber(){
        setClickNumber(clickNumber + 1);
    };

    function handlerClickedButton(){
        countClickNumber();
        operation();
    };

    return (
        <button className={
            "btn " +
            ( style === "primary" ? "btn-primary" : "") +
            ( style === "secondary" ? "btn-secondary" : "") +
            ( style === "success" ? "btn-success" : "") +
            ( style === "danger" ? "btn-danger" : "") +
            ( style === "warning" ? "btn-warning" : "") +
            ( style === "info" ? "btn-info" : "") +
            ( style === "ligth" ? "btn-ligth" : "") +
            ( style === "dark" ? "btn-dark" : "")
        }
        onClick={handlerClickedButton}
        >
        {text}
            <span className="badge badge-light">{clickNumber}</span>
        </button>
    );

};

export default Button;