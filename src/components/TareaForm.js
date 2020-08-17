import React, { useState, Fragment } from 'react';
import { v4 as uuid } from 'uuid';

const TareaForm = ({handleCreateTarea, area}) => {
    const [tarea,  setTarea] = useState({
        description: '',
    })
    const [error,  setError] = useState(false)
    const handleUpdateState = e =>{
        setTarea({
            ...tarea,
            description: e.target.value
        })
        setError(false)
    }
    const handleSubmit = e =>{
        e.preventDefault();
       // Validando el form
       if (tarea.description.trim() === '') {
           setError(true)
           return;
       }

       tarea.id = uuid()
       handleCreateTarea(tarea)

       setTarea({description: ''})
    }
    return (  
      <Fragment>
        {error? <span>Escribe algo..</span> : null}
       <form onSubmit={handleSubmit}>
       <input 
       type="text" 
       value={tarea.description}
       onChange={handleUpdateState}
       />
       <button>Agregar</button>
      </form>
      </Fragment>
    );
}
 
export default TareaForm;