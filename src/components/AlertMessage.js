import React from 'react';

const AlertMessgae = ({AlertMensaje, setAlertMensaje}) => {
    return (  
    <div className="alert-msg full fixed f2 b3">
        <div className="dmessage column">
        {AlertMensaje}
        <button onClick={() => setAlertMensaje('')}>OK</button>
        </div>
      </div> 
    );
}
 
export default AlertMessgae;