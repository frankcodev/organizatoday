import React from 'react';
import DeleteButtonTarea from './DeleteButtonTarea';


const Tarea = ({tarea, handleDeleteTarea}) => {
    return (  
        <div className="tarea f f2y f4">
            <p>{tarea.description}</p>
            <DeleteButtonTarea tarea={tarea} handleDeleteTarea={handleDeleteTarea} />
        </div>
    );
}
 
export default Tarea;