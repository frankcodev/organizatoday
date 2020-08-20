import React, { useState, Fragment, useEffect, useRef } from 'react';
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
    const myInput = useRef();
    useEffect(() =>{
        if (myInput.current) {
            myInput.current.focus();
        }
    }, [])
    return (  
      <Fragment>
        <div className="dform-tarea width absolute column">
        {error? <span className="imsg absolute">Escribe algo..</span> : null}
       
       <form onSubmit={handleSubmit}>
       <input 
       ref = {myInput}
       type="text" 
       placeholder="Describe tu tarea.."
       className="sinput"
       value={tarea.description}
       onChange={handleUpdateState}
       maxLength="70"
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