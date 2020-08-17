import React from 'react';

const AddButton = ({handleOpenFormArea}) => {
    return (  
        <div onClick={handleOpenFormArea} className="pointer">
        <svg xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true" focusable="false" 
        width="3em" height="4em"  
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20">
          <g fill="#275d8b">
            <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5zm6-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5zm3 6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1z"/>
            </g>
          </svg>
        </div>
    );
}
 
export default AddButton;