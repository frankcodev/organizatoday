import React from 'react';

const DeleteButtonArea = ({area, handleDeleteArea}) => {
    return (  
        <div className="pointer" onClick={() => handleDeleteArea(area.id)}>
        <svg xmlns="http://www.w3.org/2000/svg"  
        aria-hidden="true" focusable="false" 
        width="2em" height="2em" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 24 24">
            <path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14l-2.13-2.12M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" fill="#626262"/>
            </svg>
        </div>
    );
}
 
export default DeleteButtonArea;