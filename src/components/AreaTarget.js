import React from 'react';

const AreaTarget = ({area, handleDeleteArea}) => {
    return ( 
        <div className="targetPhone">
            <div className = "targetHeader">
                 <h1>{area.name}</h1>
            </div>
            <div className="targetContent">
      
            </div>
            <div className="targetFooter">
                <button onClick={() => handleDeleteArea(area.id)}>Eliminar</button>
            </div>
        </div>
     );
}
 
export default AreaTarget;