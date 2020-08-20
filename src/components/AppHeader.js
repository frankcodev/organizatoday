import React from 'react';

const AppHeader = () => {
    return ( 
      <div className="organize-header width f2 column b3 relative">
        <h1 className="tOtd"><span className="c1">Organiza</span>Today</h1>
        <span className="user-name absolute bold">{localStorage.getItem('username')}</span>
      </div>
     );
}
 
export default AppHeader;