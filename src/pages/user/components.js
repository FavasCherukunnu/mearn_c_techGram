
import React, { useState } from 'react'
import './component.css'
import { NavLink, useNavigate } from 'react-router-dom';

export function SideNavLink(props) {

    // const navigate = useNavigate();
    // const [userSideNavLink, setuserSideNavLink] = useState({ "height": "50px", "width": "100%", "display": "flex", "alignItems": "center", "paddingLeft": "20px", boxShadow: '6px 4px 8px -2px rgba(0, 0, 0, 0.00)', background: 'rgba(0, 0, 0, 0.00)' });


    // function onMouseEnter() {
    //     setuserSideNavLink({ "height": "50px", "width": "100%", "display": "flex", "alignItems": "center", "paddingLeft": "20px", boxShadow: '6px 4px 8px -2px rgba(0, 0, 0, 0.00)', background: '#CEEEBF' });

    // }

    // function onMouseLeave() {
    //     setuserSideNavLink({ "height": "50px", "width": "100%", "display": "flex", "alignItems": "center", "paddingLeft": "20px", boxShadow: '6px 4px 8px -2px rgba(0, 0, 0, 0.00)', background: 'rgba(0, 0, 0, 0.00)' });
    // }

    // const onClick = () => {
    //     return navigate(props.path);
    // }



    return (
        <NavLink to={props.path} style={{textDecoration:'none'}} onClick={props.onClick}>
            <div className='user_sideNavLink'>
                <span className='user_sideNavText'>
                    {props.children}
                </span>
            </div>
        </NavLink>
    )
}
