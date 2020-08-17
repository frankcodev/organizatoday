import React, { useState, useEffect, Fragment } from 'react';
import AreaForm from './components/AreaForm';
import AreaTarget from './components/AreaTarget';

function App() {

  //ALMACENAR AREAS Y TAREAS
  let areasIniciales = JSON.parse(localStorage.getItem('areas'));
  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
 if (!areasIniciales) {
   areasIniciales = []
 }
 if (!tareasIniciales) {
  tareasIniciales = []
}
 const [areas, setAreas] = useState(areasIniciales)
 const [tareas, setTareas] = useState(tareasIniciales)

 useEffect(() =>{
   if (areasIniciales) {
     localStorage.setItem('areas', JSON.stringify(areas))
   }else{
    localStorage.setItem('areas', JSON.stringify([]))
   }

 }, [areas])
 useEffect(() =>{
  if (tareasIniciales) {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }else{
   localStorage.setItem('tareas', JSON.stringify([]))
  }

}, [tareas])


 //FUNCIONES
 const handleOpenFormArea = () =>{
   console.log("open form")
 }
 const handleCreateArea = area =>{
   setAreas([ area,...areas])
   console.log(areas)
 }
 const handleDeleteArea = id =>{
    const newAreas = areas.filter(area => area.id !== id)
    setAreas(newAreas)
 }
 
  return (
    <div className="App full">
      <div className="titulo width f2">
        <h1>OrganizaToday</h1>
      </div>

     <div className="f4 p2">
     {areas.length > 0 ? 
      <div className="areasDisponibles">
        <span>Areas disponibles</span>
        <select>
          {areas.map(area =>(
            <option value={area.id} key={area.id}>{area.name}</option>
          ))}
        </select>
      </div>
      :
      <span>Comienza agregando areas..</span>
      }
      <div className="agregarAreas">
        <button onClick={handleOpenFormArea}>+</button>
        <AreaForm handleCreateArea = {handleCreateArea}/>
      </div>
     </div>
      {/* <p>Para inciar te sugerimos algunas areas, puedes eliminarlas o crear nuevas.</p> */}
      <div className="contentAreas wrap full f2 p2">
      {areas.length === 0 ?
      <span>No hay areas disponibles</span> 
      :
        <Fragment>
          {areas.map(area =>(
          <AreaTarget key={area.id} area = {area} handleDeleteArea = {handleDeleteArea} tareas = {tareas} setTareas={setTareas}/>
        ))}
        </Fragment>
    }
      </div>
    </div>
  );
}

export default App;
