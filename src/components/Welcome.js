import React, {useState} from 'react'

const Welcome = ({setSession}) => {
    const [name, setName] = useState('');
    const handleSubmitName = e =>{
      e.preventDefault();
      if (name.trim() === '') {
          console.log('mi pana eso esta vacio')
      }
      localStorage.setItem('username', name)
      setSession(name)
   }
   const handleChangeName = e =>{
    setName(e.target.value)     
  }
    return ( 
        <div className="presentacion fixed full f2">
        <div className="borganize bcover f2 column">
          <div className="bienvenida column">
            <h3>Bienvenido a</h3>
            <h1 className="tOtd"><span className="c1">Organiza</span>Today</h1>
             <p className="bold">tu día, semana, o més organizado;)</p>
          </div>
          <div className="m2y p2 column">
          <form onSubmit={handleSubmitName} className="column">
            <input
              type="text"
              className="input"
              placeholder="Escribe tu nombre"
              onChange={handleChangeName}
            />
            <button>Comenzar</button>
          </form>
          </div>
        </div>
      </div>
     );
}
 
export default Welcome;