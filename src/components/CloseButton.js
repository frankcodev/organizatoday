import React from 'react';

const CloseButton = ({handleClose}) => {
    return (  
        <div onClick={handleClose} className="pointer">
        <svg xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true" focusable="false" 
        width="3em" height="3em"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
          <path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="#626262"/>
        </svg>
        </div>
    );
}
 
export default CloseButton;