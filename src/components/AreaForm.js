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
             <div className="addForm column">
         {error? <span className="msg">Escribe algo..</span> : null}
        <form onSubmit={handleSubmit}>
            <div className="column">     
            <input 
            type="text" 
            placeholder="Escribe el nombre del area"
            value={area.name}
            onChange={handleUpdateState}
            />
          <button>Agregar</button>
         
        </div>
       </form>
       </div>
       </Fragment>
    );
}
 
export default Formulario;