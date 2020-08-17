import React from 'react';

const DeleteButtonTarea = ({tarea, handleDeleteTarea}) => {
    return (  
        <div className="pointer" onClick={() => handleDeleteTarea(tarea.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true" focusable="false" 
        width="1.5em" height="1.5em" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 24 24">
            <path d="M16 16h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1zm0-8h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM13 5h-2l-.71-.71c-.18-.18-.44-.29-.7-.29H6.41c-.26 0-.52.11-.7.29L5 5H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z" fill="#626262"/>
       </svg>
        </div>
    );
}
 
export default DeleteButtonTarea;