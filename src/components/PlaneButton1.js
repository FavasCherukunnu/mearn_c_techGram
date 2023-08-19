import { Button } from "react-bootstrap";
import { useState } from "react";

export function RoundedIconButton(props) {
    return (
        <div className='RoundedIconBUtton_outer' {...props}>
            {props.children}
        </div>
    )
}

export function PlaneButton1(props) {

    //props
    //width - width of button
    const [isHoverded, setHover] = useState(false);
    const buttonStyle = { style: { background: isHoverded === false ? '#ffffff' : 'rgba(232, 232, 232, 1)', padding: '10px', borderStyle: "none", minWidth: '100px', "width": props.width, fontFamily: "'Alumni Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "21px", color: "#000000", textShadow: "6px 4px 8px rgba(0, 0, 0, 0.08)", lineHeight: '0.5', border: '1px solid rgba(0, 0, 0, 0.3)' } }

    function mouseOverEvent() {
        setHover(true);
    }

    function mouseLeaveEvent() {
        setHover(false);
    }

    return (
        <Button style={buttonStyle.style} onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} onClick={props.onClick}>{props.children}</Button>
    );
}

