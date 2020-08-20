import React, { useState, useEffect, Fragment, useRef } from 'react';
import AreaForm from './components/AreaForm';
import AreaTarget from './components/AreaTarget';
import AddButton from './components/AddButtonArea';
import CloseButton from './components/CloseButton';
import Welcome from './components/Welcome';
import AlertMessgae from './components/AlertMessage';
import AppHeader from './components/AppHeader';
import usePagination from './components/usePagination';

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
 const [keyword, setKeyword] = useState('')
 const [data, Pagination] = usePagination(4, areas, keyword);
 const [tareas, setTareas] = useState(tareasIniciales)
 const [session, setSession] = useState(userName)
 const [AlertMensaje, setAlertMensaje] = useState('')
 const [openForm, setOpenForm] = useState(false)

//LOCAL STORAGE DE ÁREAS
 useEffect(() =>{
   if (areasIniciales) {
     localStorage.setItem('areas', JSON.stringify(areas))
   }else{
    localStorage.setItem('areas', JSON.stringify([]))
   }

 }, [areas])

 //LOCAL STORAGE DE TAREAS
 useEffect(() =>{
  if (tareasIniciales) {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }else{
   localStorage.setItem('tareas', JSON.stringify([]))
  }

}, [tareas])


 //ABRIR FORMULARIO DE ÁREA
 const handleOpenFormArea = () =>{
    setOpenForm(true)
 }
//CERRAR FORMULARIO DE ÁREA
 const handleCloseFormArea = () =>{
    setOpenForm(false)
    document.body.style.overflowY = "auto"
}
 //CREAR NUEVA ÁREA
 const handleCreateArea = area =>{
   setAreas([ area,...areas])
 }
  //ELIMINAR ÁREA
 const handleDeleteArea = id =>{
   //VALIDAR SI EL ÁREA TIENE TAREAS RELACIONADAS
  let areatareas = tareas.filter(tarea=> tarea.area_id === id);
  if (areatareas.length > 0) {
    setAlertMensaje('Esta área tiene tareas registradas, asegúrate qué harás con ellas;)')
    return;
  }
   //ELIMINAR TAREA
    const newAreas = areas.filter(area => area.id !== id)
    setAreas(newAreas)
  }
  const handleChangeKeyword = e =>{
    setKeyword(e.target.value)
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
      <AppHeader />
     <div className="header-area b3 f4 f2y">
        <div className="m2r"> 
          {areas.length > 0 ? 
            <span className="simple-title c3">Áreas de tu vida</span>:
            <span className="c3">Agrega áreas de tu vida, ejemplo: personal, casa, trabajo..</span>
          }
        </div>
        <div className="f">
          {openForm?<AreaForm handleCreateArea = {handleCreateArea}/>:null}
          <div className="f2">
            {openForm? 
              <CloseButton handleClose={handleCloseFormArea} />:
              <AddButton handleOpenFormArea = {handleOpenFormArea} />
            }
          </div>
        </div>
     </div>
    <div className="f2 column width p1">
      <span className="f m1b">Página <Pagination /></span>
      <input 
      type="search"
      value = {keyword}
      onChange = {handleChangeKeyword}
      placeholder="Busta tu área.."
      className="sinput" 
      maxLength="30"
      />
    </div>
      <div className="contentAreas wrap full f2 p2x p2b p1t" ref={contentArea}>
      {areas.length === 0 ?
        <span className="simple-title">No hay áreas disponibles</span> 
        :
        <Fragment>
            {data.map(area =>(
            <AreaTarget 
            key={area.id} 
            area = {area} 
            handleDeleteArea = {handleDeleteArea} 
            tareas = {tareas} 
            setTareas={setTareas}
            />
          ))}
        </Fragment>
    }
      </div>
      </Fragment> }
    </div>
  );
}

export default App;
