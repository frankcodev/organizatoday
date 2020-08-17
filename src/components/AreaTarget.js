import React, { useState, useEffect } from 'react';
import TareaForm from './TareaForm';
import Tarea from './Tarea';

const AreaTarget = ({area, handleDeleteArea, tareas, setTareas}) => {

    let currentTareas = tareas.filter(tarea=> tarea.area_id === area.id);

    const handleCreateTarea = tarea =>{
        tarea.area_id = area.id
        setTareas([tarea, ...tareas])
    }

    const handleDeleteTarea = id =>{
        const newtareas = tareas.filter(tarea => tarea.id !== id)
        setTareas(newtareas)
    }

    return ( 
        <div className="targetPhone f4 column">
            <div className = "targetHeader">
                 <h1>{area.name}</h1>
            </div>
            <TareaForm handleCreateTarea = {handleCreateTarea} area = {area}/>
            <div className="targetContent">
               {currentTareas.length === 0 ? 
               <span>Agrega tareas</span>
               :
              currentTareas.map(tarea =>(
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