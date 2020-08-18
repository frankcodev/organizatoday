import React, { useState, useEffect, Fragment, useRef } from 'react';
import AreaForm from './components/AreaForm';
import AreaTarget from './components/AreaTarget';
import AddButton from './components/AddButtonArea';
import CloseButton from './components/CloseButton';
import Welcome from './components/Welcome';
import AlertMessgae from './components/AlertMessage';

function App() {

  const contentArea = useRef()
  const windowClick = e =>{
    if (contentArea.current) {
      if (e.target === document.body || e.target === contentArea.current) {
        handleCloseFormArea();
      }
    }
    
  }
  useEffect(()=>{
    window.addEventListener('click', windowClick);
  }, [])

  //ALMACENAR AREAS Y TAREAS
  
  let areasIniciales = JSON.parse(localStorage.getItem('areas'));
  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  let userName = localStorage.getItem('username');
 if (!areasIniciales) {
   areasIniciales = []
 }
 if (!tareasIniciales) {
  tareasIniciales = []
}
if (!userName) {
  userName = false;
}
 const [areas, setAreas] = useState(areasIniciales)
 const [tareas, setTareas] = useState(tareasIniciales)
 const [session, setSession] = useState(userName)
 const [AlertMensaje, setAlertMensaje] = useState('')
 const [openForm, setOpenForm] = useState(false)

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
    document.body.style.overflowY = "auto"
}
 const handleCreateArea = area =>{
   setAreas([ area,...areas])
 }
 const handleDeleteArea = id =>{
  let areatareas = tareas.filter(tarea=> tarea.area_id === id);
  if (areatareas.length > 0) {
    setAlertMensaje('Esta área tiene tareas registrtadas, asegurate qué harás con ellas;)')
    return;
  }
    const newAreas = areas.filter(area => area.id !== id)
    setAreas(newAreas)
  }
  return (
    <div className="App full">
      {!session? 
        <Welcome setSession={setSession}/>
          :
   <Fragment>
     {AlertMensaje ? 
        <AlertMessgae AlertMensaje={AlertMensaje} setAlertMensaje={setAlertMensaje} />
       :null
    }
      <div className="organize-header width f2 column b3 relative">
        <h1 className="tOtd"><span className="c1">Organiza</span>Today</h1>
        <span className="user-name absolute bold">{localStorage.getItem('username')}</span>
      </div>

     <div className="header-Area b3 f4 f2y">
     <div className="areasDisponibles m2r"> 
      {areas.length > 0 ? 
        <span className="simple-title c3">Áreas de tu vida</span>
      :
      <span className="c3">Agrega áreas de tu vida, ejemplo: personal, casa, trabajo..</span>
      }</div>
      <div className="addContentArea f ">
        {openForm?<AreaForm handleCreateArea = {handleCreateArea}/>
        :
        null
        }
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
      <div className="contentAreas wrap full f2 p2x p2b p1t" ref={contentArea}>
      {areas.length === 0 ?
      <span className="simple-title">No hay áreas disponibles</span> 
      :
        <Fragment>
          {areas.map(area =>(
          <AreaTarget key={area.id} area = {area} handleDeleteArea = {handleDeleteArea} tareas = {tareas} setTareas={setTareas}/>
        ))}
        </Fragment>
    }
      </div>
      </Fragment> }
    </div>
  );
}

export default App;
