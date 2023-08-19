import React, { useState } from "react";
import { NavLink, Nav ,Button} from 'react-bootstrap';

export function PlaneButton3(props){

    //props
    //width - width of button
    const [isHoverded, setHover] = useState(false);
    const buttonStyle = {style:{background:isHoverded===false?'black':'rgba(200, 200, 200, 0.5)',borderStyle:"none",minWidth:'100px',"width":props.width,fontFamily:"'Alumni Sans'",fontStyle:"normal",fontWeight:"700",fontSize:"21px",color:"#fff",textShadow:"6px 4px 8px rgba(0, 0, 0, 0.08)",lineHeight:'0.5'}}

    function mouseOverEvent(){
        setHover(true);
    }

    function mouseLeaveEvent(){
        setHover(false);
    }
    
    return (
        <div>

            <Button style={buttonStyle.style} onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} onClick={props.onClick}>{props.children}</Button>
        </div>
    );
}