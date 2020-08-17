import React, { useState, useEffect, Fragment } from 'react';
import TareaForm from './TareaForm';
import Tarea from './Tarea';
import AddButtonTarea from './AddButtonTarea';
import DeleteButtonArea from './DeleteButtonArea';

const AreaTarget = ({area, handleDeleteArea, tareas, setTareas}) => {

    let currentTareas = tareas.filter(tarea=> tarea.area_id === area.id);

    const [openForm, setOpenForm] = useState(false)

    const handleOpenFormTarea = () =>{
        setOpenForm(true)
    }
    const handleCloseFormTarea = () =>{
        setOpenForm(false)
    }
    const handleCreateTarea = tarea =>{
        tarea.area_id = area.id
        setTareas([tarea, ...tareas])
    }

    const handleDeleteTarea = id =>{
        const newtareas = tareas.filter(tarea => tarea.id !== id)
        setTareas(newtareas)
    }

    return ( 
        <div className="targetPhone relative f4 column">
            <div className = "targetHeader">
                 <h1 style={{color: `${area.color}`}}>{area.name}</h1>
            </div>
            <div className="targetContent f2 wrap">
              {openForm?
                  <TareaForm area={area} handleCreateTarea={handleCreateTarea} handleClose={handleCloseFormTarea}/>   
                  :null 
                }
               {currentTareas.length === 0 ? 
                <div className="column f2">
                    <AddButtonTarea handleOpenFormTarea={handleOpenFormTarea}/>
                    <span>Agrega tareas</span>
                 </div>
               :
          <div className="rowTareas column">
                  {currentTareas.map(tarea =>(
                <Tarea key={tarea.id} tarea = {tarea} handleDeleteTarea={handleDeleteTarea}/>
            ))}
              </div>
               }
            </div>
            <div className="targetFooter f">
                <DeleteButtonArea handleDeleteArea={handleDeleteArea} area={area}/>
                {currentTareas.length > 0 ?
                 <AddButtonTarea handleOpenFormTarea={handleOpenFormTarea} size={2}/>
                 :null    
            }
            </div>
        </div>
     );
}
 
export default AreaTarget;