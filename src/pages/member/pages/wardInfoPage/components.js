
import React, { useEffect, useState } from 'react'
import './component.css'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { AiFillCaretDown } from 'react-icons/ai';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

export function TopNavLink(props) {



    return (
        <NavLink end={props.end} to={props.path} style={{ textDecoration: 'none' }} >
            <div className='user_topNavLink' onClick={props.onClick ? () => props.onClick(props.path) : null}>
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
            <div className='user_mobileTopNavLink' onClick={props.onClick ? () => props.onClick(props.path,props.children) : null}>
                <span className='user_topNavText'>
                    {props.children}
                </span>
            </div>
        </NavLink>
    )
}

export function UserWardInfoTopNavBar() {

    const navigate = useNavigate();
    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState();
    const [expanded, setExpanded] = useState(false);
    let path = decodeURIComponent(location.pathname)
    let childText1 = path.substring(path.lastIndexOf('/')+1)

    // console.log(location.pathname.substring(location.pathname.lastIndexOf('/')+1));
    
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


    const onTopNavPress = (e,child) => {
        setExpanded(false)
    }

    const isMobile = windowWidth <= 1280;

    if (isMobile) {
        return (
            <Navbar expand={false} expanded={expanded} className='user_wardinfo_TopDropDownDiv'>
                <Container  fluid>
                    <Navbar.Brand  href="#" className='user_topNavText' style={{color:'white',padding:0,margin:0}} >{childText1}</Navbar.Brand>
                    <Navbar.Toggle  onClick={()=>{setExpanded(!expanded)}} aria-controls="navbarScroll" />
                    <Navbar.Collapse  id="navbarScroll">
                        <Nav
                            className="me-auto my-1 my-lg-0"
                            navbarScroll
                            
                        >
                            <MobileTopNavLink path={'Ward Info'} onClick={onTopNavPress}>Ward Info</MobileTopNavLink>
                            <MobileTopNavLink path={'Discussion'} onClick={onTopNavPress}>Discussion</MobileTopNavLink>
                            <MobileTopNavLink path={'Project'} onClick={onTopNavPress}>Project</MobileTopNavLink>
                            <MobileTopNavLink path={'Announcement'} onClick={onTopNavPress}>Announcement</MobileTopNavLink>
                            <MobileTopNavLink path={'Complaint'} onClick={onTopNavPress}>Complaint</MobileTopNavLink>
                            <MobileTopNavLink path={'Gram Sabha'} onClick={onTopNavPress}>Gram Sabha</MobileTopNavLink>
                            <MobileTopNavLink path={'Institutes'} onClick={onTopNavPress}>Institutes</MobileTopNavLink>
                            <MobileTopNavLink path={'Users'} onClick={onTopNavPress}>Users</MobileTopNavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        return (
            <div className='user_wardinfo_TopNavouterDiv'>
                <Nav>
                    <TopNavLink path={'Ward Info'} onClick={onTopNavPress}>Ward Info</TopNavLink>
                    <TopNavLink path={'Discussion'} onClick={onTopNavPress}>Discussion</TopNavLink>
                    <TopNavLink path={'Project'} onClick={onTopNavPress}>Project</TopNavLink>
                    <TopNavLink path={'Announcement'} onClick={onTopNavPress}>Announcement</TopNavLink>
                    <TopNavLink path={'Complaint'} onClick={onTopNavPress}>Complaint</TopNavLink>
                    <TopNavLink path={'Gram Sabha'} onClick={onTopNavPress}>Gram Sabha</TopNavLink>
                    <TopNavLink path={'Institutes'} onClick={onTopNavPress}>Institutes</TopNavLink>
                    <TopNavLink path={'Users'} onClick={onTopNavPress}>Users</TopNavLink>
                </Nav>
            </div>
        );
    }



}
