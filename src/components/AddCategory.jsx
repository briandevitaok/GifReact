import React, { useState } from 'react'



//Componente especializado para manejar un input / Formulario
export const  AddCategory = ({onNewCategory}) => {

    //Este input se encarga de obtener lo que escriba el usuario
    const [inputValue, setInputValue] = useState([])


    //La funcion onInputChange obtiene el valor del input y se lo manda al setInputValue para que 
    //Actualice inputValue
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }


    //La funcion onSubmitChange obtiene el evento del formulario y lo cancela.
    const onSubmitChange = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim()
        if (newInputValue <= 1)return; // Si el input esta vacio y se presiona enter no se guarda el 
        //espacio en blanco
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(newInputValue)
        setInputValue('');
    }   

  return (
 
    ///El formulario tiene un evento el cual se lo mandamos como parametro a nuestra funcion onSubmitChange
    <form onSubmit={(event) => onSubmitChange(event)} >
    <input type="text" 
    placeholder='Buscar Gif..'
    value={inputValue} //Value tiene el valor de el input, sin el onchange no cambiaria seria solo lectura
    onChange={(event) => onInputChange(event)}  //La funcion onchange recibe un evento en e lcual dentro
    //tenemos el target.value que es lo que nosotros escribimos
    />
    </form>
  )
}


export default AddCategory