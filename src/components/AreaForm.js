import React, { useState, Fragment, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { ChromePicker } from 'react-color';
import CloseButton from './CloseButton';

const Formulario = ({handleCreateArea}) => {
    const [area,  setArea] = useState({
        name: '',
        color: '#4e22ee'
    })

    const [OpenColorPicker, setOpenColorPicker] = useState(false)
    const [error,  setError] = useState(false)
    const handleUpdateState = e =>{
        setArea({
            ...area,
            [e.target.name]: e.target.value
        })
        setError(false)
    }
    const myInput = useRef();
    useEffect(() =>{
        if (myInput.current) {
            myInput.current.focus();
        }
    }, [])
    const handleSubmit = e =>{
        e.preventDefault();
       // Validando el form
       if (area.name.trim() === '') {
           setError(true)
           myInput.current.focus();
           return;
       }

       area.id = uuid()
       handleCreateArea(area)

       setArea({name: ''})
    }

    const onChangeColor = c =>{
        setArea({
            ...area,
            color: c.hex
        })
    }

    const handleOpenColorPicker = () =>{
        if (OpenColorPicker) {
            setOpenColorPicker(false)
            document.body.style.overflowY = "auto"
        }else{
            setOpenColorPicker(true)
            document.body.style.overflowY = "hidden"
        }
    }
    return (  
        <Fragment>
             <div className="addFormArea relative column">
         {error? <span className="msg">Escribe algo..</span> : null}
        <form onSubmit={handleSubmit}>
            <div className="column">     
            
            <div className="f2y m1b inputcolor relative">
            
                {OpenColorPicker?
                 <div className="colorPicker">
                  <ChromePicker 
                  color={area.color}
                  onChange={onChangeColor}
                 />
                <span className="closePicker">
                <CloseButton size={1.5} handleClose={handleOpenColorPicker}/>
                </span>
                  </div>
                 :null    
            }
                <div onClick={handleOpenColorPicker}  className="bold pointer" style={{color: `${area.color}`, padding: "2px"}}>
                    <span style={{backgroundColor: `${area.color}`}} className="colorCircle"></span>
                    {area.name? area.name : 'Ponle color - Click aquí'}
            </div>  
            </div>
            <input 
            ref = {myInput}
            type="text" 
            name="name"
            placeholder="Nombre del área"
            className="input"
            value={area.name}
            onChange={handleUpdateState}
            />
          <button>Agregar</button>
         
        </div>
       </form>
       </div>
       </Fragment>
    );
}
 
export default Formulario;