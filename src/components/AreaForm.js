import React, { useState, Fragment, useEffect, useRef } from 'react';
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
    const myInput = useRef();
    useEffect(() =>{
        if (myInput.current) {
            myInput.current.focus();
        }
    }, [])
    const handleSubmit = e =>{
        e.preventDefault();
       // Validando el form
       if (area.name.trim() === '') {
           setError(true)
           myInput.current.focus();
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
            ref = {myInput}
            type="text" 
            placeholder="Nombre del área"
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