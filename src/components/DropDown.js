import React from 'react'
import './DropDown.css'
export   const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div style={{display:'inline-block'}}>
      <div className='admin_customDropDownToggle' onClick={(e) => {
      // e.preventDefault();
      onClick(e);}
    }>
      {children}
      &#x25bc;
    </div>
    </div>
  ));
