
function InputValue({interval}) {

    function handlerInsertInterval(event){
        const valueInputed = parseInt(event.target.value);
        if (isNaN(valueInputed) === true)
         {
          event.target.value = "";
        } else 
          interval(valueInputed);
      };

    
        return(
            <label>Intervalo de Auto: 
                <input type="text" maxLength={2} placeholder="Nº entre 1 y 99" onInput={handlerInsertInterval}>
                </input>
            </label>
        )

};

export default InputValue;