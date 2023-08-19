import './component.css'
import { AiOutlineLike } from 'react-icons/ai'
import { useState } from 'react';
import { IconButton } from '../../../../../../components/iconButton';
import React from 'react'
import { Button } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import { ShowComplaintDiscussionmodel } from './Model';
import { AvatarImageCompressed, PostImage } from '../../../../../../components/imageLoading';
import { ShowDiscussionmodel } from '../../../homePage/Model';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';


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


export function ComplaintTemplate2(props) {
  const [showDiscussionModel, setShowDiscussionModel] = useState(false);
  const [complaint, setcomplaint] = useState(false);
  const thisComplaint = complaint === false ? props.value : complaint;
  function showDiscussionModelfunc() {
    setShowDiscussionModel(true);
  }
  function closeDiscussionModelfunc() {
    setShowDiscussionModel(false)
  }
  const closeComplaint = async () => {
    try {
      const res = await axios.post(`${SERVER_ADDRESS}/user/closeComplaint/${props.value._id}`, { key: '' }, { headers: { 'u-auth-token': getUserToken() } });
      setcomplaint(res.data.complaint);
    } catch (err) {
      console.log(err);
      checkLoggedIn(err);
    }
  }
  const time = new Date(thisComplaint.createdAt);
  console.log('rererererere');
  return (
    <div className='user_ComplaintTemplate_outerDiv'>
      <div className='user_ComplaintTemplate_innerDiv'>
        <div style={{ backgroundColor: thisComplaint.isSolved === 'true' ? '#81F14D' : '#FF3232' }} className='user_ComplaintTemplate_autherDiv'>
          <AvatarImageCompressed dId={`discussion${props.index}${thisComplaint.owner._id}`} id={thisComplaint.owner._id} height='50px' width='50px' />
          <div className='user_postTemplate_autherDiv_text'>{thisComplaint.owner.fullName}</div>
        </div>
        <div className='user_ComplaintTemplate_contenDiv'>
          {thisComplaint.images ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className='user_ComplaintTemplate_imageSpace'>
              {thisComplaint.images.map((image, index) => <PostImage key={index} id={image} dId={`Annoucement-${image}`} />)}
            </div>
          </div> : <div></div>}
          <p className='heading'>{thisComplaint.title}</p>
          <p className='body'>{thisComplaint.description}</p>
          <div className='intractionDiv2'>
            {thisComplaint.isSolved === 'true' ? <div>Solved on {new Date(thisComplaint.solvedDate).toLocaleString()}</div> : <div></div>}
            <div className='interactionOnly'>
              <PlaneButton1 width={'100px'} onClick={showDiscussionModelfunc}>Discussion</PlaneButton1>
              <div style={{ width: '10px' }}></div>
              {thisComplaint.isSolved === 'true' ? <RectangleButton >Closed</RectangleButton> : <RectangleButton danger onClick={closeComplaint}>Not Closed</RectangleButton>}
            </div>

          </div>
          <div className='complaintDateDiv'>
            <p className='time'>{time.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <ShowDiscussionmodel value={thisComplaint} show={showDiscussionModel} onClose={closeDiscussionModelfunc} />
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

export function DropdownTop(props) {
  return (
    <div className='user_complaintPage_complaintDiv_dropDownDiv'>
      <div className='dropdownText'>List Only </div>
      <select className='admin_customDropDownToggle' onChange={(event) => props.onListDropdownChange(event.target.value)}>
        <option key={-1} value={-1}>All</option>
        <option key={-1} value={1}>My Complaint</option>
        <option key={-1} value={2}>UnSolved</option>
        <option key={-1} value={3}>Solved</option>
      </select>
    </div>
  )
}