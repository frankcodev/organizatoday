import React, { useState, Fragment } from 'react';
import { v4 as uuid } from 'uuid';

const Formulario = ({handleCreateArea}) => {

    const [area,  setArea] = useState({
        name: '',
    })
    const [error,  setError] = useState(false)
    const handleUpdateState = e =>{
        setArea({
            ...area,
            name: e.target.value
        })
        setError(false)
    }
    const handleSubmit = e =>{
        e.preventDefault();
       // Validando el form
       if (area.name.trim() === '') {
           setError(true)
           return;
       }

       area.id = uuid()
       handleCreateArea(area)

       setArea({name: ''})
    }
    return (  
        <Fragment>
         {error? <span>Escribe algo..</span> : null}
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={area.name}
        onChange={handleUpdateState}
        />
        <button>Agregar</button>
       </form>
       </Fragment>
    );
}
 
export default Formulario;