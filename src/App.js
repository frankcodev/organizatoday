import React, { useState } from 'react';
import AreaForm from './components/AreaForm';

function App() {
 const [areas, setAreas] = useState([])

 const handleOpenFormArea = () =>{
   console.log("open form")
 }

 const handleCreateArea = area =>{
   setAreas([
     ...areas,
     area
   ])
   console.log(areas)
 }
  return (
    <div className="App">
      <h1>OrganizaToday</h1>
      <span>Areas disponibles</span>
      <button onClick={handleOpenFormArea}>+</button>
      <AreaForm handleCreateArea = {handleCreateArea}/>
      <p>Para inciar te sugerimos algunas areas, puedes eliminarlas o crear nuevas.</p>
    </div>
  );
}

export default App;
