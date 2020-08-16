import React, { useState } from 'react';
import AreaForm from './components/AreaForm';
import AreaTarget from './components/AreaTarget';

function App() {
 const [areas, setAreas] = useState([])

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
    <div className="App">
      <h1>OrganizaToday</h1>
      {areas.length > 0 ? 
      <div className="areasDisponibles">
        <span>Areas disponibles</span>
        <select>
          {areas.map(area =>(
            <option value={area.id} key={area.id}>{area.name}</option>
          ))}
        </select>
      </div>
      :<span>Comienza agregando areas..</span>}
      <button onClick={handleOpenFormArea}>+</button>
      <AreaForm handleCreateArea = {handleCreateArea}/>
      <p>Para inciar te sugerimos algunas areas, puedes eliminarlas o crear nuevas.</p>
      {areas.length === 0 ?
      <span>No hay areas disponibles</span> 
      :
      <div className="row">
        {areas.map(area =>(
          <AreaTarget key={area.id} area = {area} handleDeleteArea = {handleDeleteArea}/>
        ))}
      </div> 
    }
    </div>
  );
}

export default App;
