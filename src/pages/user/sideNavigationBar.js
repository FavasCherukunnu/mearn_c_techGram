import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import './sideNavigationBar.css'
import {SideNavLink} from './components';
import { MyContext } from './userHomePage';
import { logoutUser } from '../../staticFiles/functions';

function SideNavigationBar(props) {

    const shrinkNavbar = useContext(MyContext)

    const buildTopNav = ()=>{
        shrinkNavbar(false)
    }
    
    return (
        <div className='user_sideNavigationBar' style={{ width: '100%',paddingTop:'50px' }} onClick={buildTopNav}>
            <SideNavLink onClick={props.onClick} path='wardInfo'>Ward Info</SideNavLink>
            <SideNavLink onClick={props.onClick} path='panchayathInfo'>Panchayath Info</SideNavLink>
            <SideNavLink onClick={props.onClick} path='locate'>Locate</SideNavLink>
            <SideNavLink onClick={props.onClick} path='survay'>Survey</SideNavLink>
            <SideNavLink onClick={()=>{logoutUser();props.onClick();}} path='/login'>Logout</SideNavLink>
        </div>
    )
}

export default SideNavigationBar