import React from 'react';

const AddButtonTarea = ({handleOpenFormTarea, size}) => {
    let isize = size ? `${size}em`: "3em";
    return (  
        <div onClick={handleOpenFormTarea} className="pointer">
            <svg xmlns="http://www.w3.org/2000/svg"  
            aria-hidden="true" focusable="false" 
            width={isize} height={isize} 
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm5 8v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z" 
            fill="#626262"/>
            </svg>
        </div>
    );
}
 
export default AddButtonTarea;