import './component.css'
import { AiOutlineLike } from 'react-icons/ai'
import { useState } from 'react';

import React from 'react'
import { Button } from 'react-bootstrap';
import { IconButton } from '../../../../../../components/iconButton';


export function RoundedIconButton(props) {
    return (
        <div className='RoundedIconBUtton_outer'>
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


export function AnnouncementTemplate(props) {
    return (
        <div className='user_AnnouncementTemplate_outerDiv'>
            <div className='user_AnnouncementTemplate_innerDiv'>
                <div className='user_AnnouncementTemplate_autherDiv'>
                    <p>{props.value.owner}</p>
                </div>
                <div className='user_AnnouncementTemplate_contenDiv'>
                    <p className='heading'>{props.value.title}</p>
                    <p className='body'>{props.value.description}</p>
                    <div className='fullDiv'>
                        <div className='intractionDiv'>
                            <IconButton ><AiOutlineLike size={30} /></IconButton>
                            <div style={{ width: '20px' }}></div>
                            <PlaneButton1 width={'100px'}>Discussion</PlaneButton1>
                        </div>
                        <p className='time'>Time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
