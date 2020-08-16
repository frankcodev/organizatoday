import React from 'react';

const Tarea = ({tarea, handleDeleteTarea}) => {
    return (  
        <div className="tarea">
            <p>{tarea.description}</p>
             <button onClick={() => handleDeleteTarea(tarea.id)}>X</button>
        </div>
    );
}
 
export default Tarea;