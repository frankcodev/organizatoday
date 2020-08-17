import React, { useState, useEffect, Fragment } from 'react';
import AreaForm from './components/AreaForm';
import AreaTarget from './components/AreaTarget';
import AddButton from './components/AddButtonArea';
import CloseButton from './components/CloseButton';

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
 const [openForm, setOpenForm] = useState(false)
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
    setOpenForm(true)
 }
 const handleCloseFormArea = () =>{
    setOpenForm(false)
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
      <div className="headerOtd width f2 column">
        <h1 className="tOtd"><span className="c1">Organiza</span>Today</h1>
        {/* <p className="bold c6 minTitle">tu día, semana, o mes organizado;)</p> */}
      </div>

     <div className="headerArea f4 f2y">
     {areas.length > 0 ? 
      <div className="areasDisponibles m2r">
        <span className="simpleTitle c3">Áreas de tu vida</span>
      </div>
      :
      <span className="bold c3">Agrega áreas de tu vida, ejemplo: personal, casa, trabajo..</span>
      }
      <div className="f addArea">
        {openForm?<AreaForm handleCreateArea = {handleCreateArea}/>:null}
        <div className="f2">
          {openForm? 
            <CloseButton handleClose={handleCloseFormArea} />
          :
            <AddButton handleOpenFormArea = {handleOpenFormArea} />
          }
        </div>
      </div>
     </div>
      {/* <p>Para inciar te sugerimos algunas areas, puedes eliminarlas o crear nuevas.</p> */}
      <div className="contentAreas wrap full f2 p2x p2b p1t">
      {areas.length === 0 ?
      <span className="simpleTitle">No hay áreas disponibles</span> 
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
