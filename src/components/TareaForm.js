import React, { useState, Fragment } from 'react';
import { v4 as uuid } from 'uuid';
import CloseButton from './CloseButton';

const TareaForm = ({handleCreateTarea, handleClose}) => {
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
        <div className="addFormTarea column">
        {error? <span className="msg">Escribe algo..</span> : null}
       
       <form onSubmit={handleSubmit}>
       <input 
       type="text" 
       placeholder="Describe tu tarea.."
       value={tarea.description}
       onChange={handleUpdateState}
       />
       <div className="f2y">
           <button>Agregar</button>
           <CloseButton handleClose={handleClose} size = {2}/>
       </div>
      </form>
      </div>
      </Fragment>
    );
}
 
export default TareaForm;