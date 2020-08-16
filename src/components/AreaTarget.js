import React, { useState } from 'react';
import TareaForm from './TareaForm';
import Tarea from './Tarea';

const AreaTarget = ({area, handleDeleteArea}) => {

    const [tareas, setTareas] = useState([])
    const handleCreateTarea = tarea =>{
        setTareas([tarea, ...tareas])
    }
    const handleDeleteTarea = id =>{
        const newtareas = tareas.filter(tarea => tarea.id !== id)
        setTareas(newtareas)
    }  
    return ( 
        <div className="targetPhone">
            <div className = "targetHeader">
                 <h1>{area.name}</h1>
            </div>
            <TareaForm handleCreateTarea = {handleCreateTarea} area = {area}/>
            <div className="targetContent">
               {tareas.length === 0 ? 
               <span>Agrega tareas</span>
               :
               tareas.map(tarea =>(
                <Tarea key={tarea.id} tarea = {tarea} handleDeleteTarea={handleDeleteTarea}/>
            ))
               }
            </div>
            <div className="targetFooter">
                <button onClick={() => handleDeleteArea(area.id)}>Eliminar</button>
            </div>
        </div>
     );
}
 
export default AreaTarget;