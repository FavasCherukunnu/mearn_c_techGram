import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink, Nav ,Button} from 'react-bootstrap';


export function NavText(props) {

    const navtext = { "fontFamily": "'Alumni Sans'", "fontStyle": "normal", "fontWeight": "600", "fontSize": "21px", "color": "#000000", "textShadow": "1px 2px 6px rgba(0, 0, 0, 0.28)" }

    return (
        <Nav.Link href={props.link} style={navtext}>{props.children}</Nav.Link>
    )
}

export function RectangleButton(props){

    //props
    //width - width of button
    const [isHoverded, setHover] = useState(false);
    const buttonStyle = {style:{background:isHoverded===false?'#81F14D':'#76db47',borderStyle:"none",boxShadow:"6px 4px 8px -2px rgba(0, 0, 0, 0.1)",minWidth:'100px',"width":props.width,fontFamily:"'Alumni Sans'",fontStyle:"normal",fontWeight:"600",fontSize:"24px",color:"#FFFFFF",textShadow:"6px 4px 8px rgba(0, 0, 0, 0.08)"}}
    const navigate = useNavigate();

    function mouseOverEvent(){
        setHover(true);
    }

    function mouseLeaveEvent(){
        setHover(false);
    }

    function onButtonPress(){
        navigate(props.path);
    }
    
    return (
        <Button style={buttonStyle.style} onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} onClick={onButtonPress}>{props.children}</Button>
    );
}