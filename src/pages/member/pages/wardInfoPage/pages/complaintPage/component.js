import './component.css'
import { AiOutlineLike } from 'react-icons/ai'
import { useState } from 'react';
import { IconButton } from '../../../../../../components/iconButton';
import React from 'react'
import { Button } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import { ShowComplaintDiscussionmodel } from './Model';


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


export function ComplaintTemplate(props) {
  const [showDiscussion,setShowDiscussion] = useState(false);

  function showDiscussionfn(){
    setShowDiscussion(true);
  }

  function closeDiscussionfn(){
    setShowDiscussion(false);
  }

  return (
    <div className='user_ComplaintTemplate_outerDiv'>
      <div className='user_ComplaintTemplate_innerDiv'>
        <div style={{ backgroundColor: props.value.isSolved ? '#81F14D' : '#FF3232' }} className='user_ComplaintTemplate_autherDiv'>
          <p>{props.value.owner}</p>
        </div>
        <div className='user_ComplaintTemplate_contenDiv'>
          {props.value.images ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className='user_ComplaintTemplate_imageSpace'>
              {props.value.images.map((image) => <div className='user_ComplaintTemplate_imageDiv'><img src={image} alt="" className='user_ComplaintTemplate_image' /></div>)}
            </div>
          </div> : <div></div>}
          <p className='heading'>{props.value.title}</p>
          <p className='body'>{props.value.description}</p>
          <div className='intractionDiv'>
            <div className='interactionOnly'>
              <IconButton ><AiOutlineLike size={30} /></IconButton>
              <div style={{ width: '20px' }}></div>
              <PlaneButton1 width={'100px'} onClick={showDiscussionfn}>Discussion</PlaneButton1>
            </div>
            {props.value.isSolved?<RectangleButton >Closed</RectangleButton>:<RectangleButton danger>Not Closed</RectangleButton>}
            
          </div>
        </div>
      </div>
      <ShowComplaintDiscussionmodel show={showDiscussion} onClose={closeDiscussionfn}/>
    </div>
  )
}

export function ComplaintDiscussionTemplate() {
  return (
    <div className='user_homePage_complaintDiscussion_template'>
      <div className='user_homePage_complaintDiscussion_template_userName' >
        UserName
      </div>
      <div className='user_homePage_complaintDiscussion_template_text'>
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
      </div>
      <div className='user_homePage_complaintDiscussion_template_time'>
        00:00
      </div>

    </div>
  )
}

export function DropdownTop() {
  return (
    <div className='user_complaintPage_complaintDiv_dropDownDiv'>
      <div className='dropdownText'>List Only </div>
      <DropdownButton variant="light" id="dropdown-basic-button" title="All">
        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
        <Dropdown.Item href="#/acction-2">Your Complaints</Dropdown.Item>
        <Dropdown.Item href="#/acction-2">Open Complaints</Dropdown.Item>
        <Dropdown.Item href="#/acction-2">Closed Complaints</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}