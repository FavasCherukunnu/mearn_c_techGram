
import React, { useEffect, useState } from 'react'
import './component.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


export function TopNavLink(props) {



    return (
        <NavLink end={props.end} to={props.path} style={{ textDecoration: 'none' }}>
            <div className='user_topNavLink' onClick={props.onClick ? () => props.onClick(props.path, props.children) : null}>
                <span className='user_topNavText'>
                    {props.children}
                </span>
            </div>
        </NavLink>
    )
}

export function MobileTopNavLink(props) {



    return (
        <NavLink end={props.end} to={props.path} style={{ textDecoration: 'none' }} >
            <div className='user_mobileTopNavLink' onClick={props.onClick ? () => props.onClick(props.path, props.children) : null}>
                <span className='user_topNavText'>
                    {props.children}
                </span>
            </div>
        </NavLink>
    )
}

export function UserPanchayathInfoTopNavBar() {

    const navigate = useNavigate();
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [path, setPath] = useState('panchayath')
    const [childText, setchildText] = useState('Panchayath Info');
    let path = decodeURIComponent(location.pathname)
    let childText1 = path.substring(path.lastIndexOf('/') + 1)

    useEffect(
        () => {
            setWindowWidth(window.innerWidth)
        }
        , []
    )
    useEffect(
        () => {
            const handleResize = () => { setWindowWidth(window.innerWidth) }
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }

    );

    const onTopNavPress = (e, child) => {
        setExpanded(false)
        // setchildText(child);
        // setPath(e);
    }

    const isMobile = windowWidth <= 1280;

    if (isMobile) {
        return (
            <Navbar expand={false} expanded={expanded} className='user_panchayathInfo_TopDropDownDiv'>
                <Container fluid>
                    <Navbar.Brand href="#" className='user_topNavText' style={{ color: 'white' }} >{childText1}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={()=>{setExpanded(!expanded)}}/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-1 my-lg-0"
                            navbarScroll
                        >
                            <TopNavLink path={'Panchayath Info'} onClick={onTopNavPress}>Panchayath Info</TopNavLink>
                            <TopNavLink path={'Discussion'} onClick={onTopNavPress}>Discussion</TopNavLink>
                            <TopNavLink path={'Project'} onClick={onTopNavPress}>Project</TopNavLink>
                            <TopNavLink path={'Announcement'} onClick={onTopNavPress}>Announcement</TopNavLink>
                            <TopNavLink path={'Complaint'} onClick={onTopNavPress}>Complaint</TopNavLink>
                            <TopNavLink path={'Survay'} onClick={onTopNavPress}>Survay</TopNavLink>
                            <TopNavLink path={'Institutes'} onClick={onTopNavPress}>Institutes</TopNavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        return (
            <div className='user_wardinfo_TopNavouterDiv'>
                <Nav>
                    <TopNavLink path={'Panchayath Info'} onClick={onTopNavPress}>Panchayath Info</TopNavLink>
                    <TopNavLink path={'Discussion'} onClick={onTopNavPress}>Discussion</TopNavLink>
                    <TopNavLink path={'Project'} onClick={onTopNavPress}>Project</TopNavLink>
                    <TopNavLink path={'Announcement'} onClick={onTopNavPress}>Announcement</TopNavLink>
                    <TopNavLink path={'Complaint'} onClick={onTopNavPress}>Complaint</TopNavLink>
                    <TopNavLink path={'Survay'} onClick={onTopNavPress}>Survay</TopNavLink>
                    <TopNavLink path={'Institutes'} onClick={onTopNavPress}>Institutes</TopNavLink>
                </Nav>
            </div>
        );
    }



}
