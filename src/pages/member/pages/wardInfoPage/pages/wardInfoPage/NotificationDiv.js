import React from 'react';
import { PlaneButton } from '../../../../../../components/planeButton';
import './WardInfoPageHome.css'
import { NotificatonTemplate, WardDetailsTable } from './component';

function NotificationSection() {
  return (
    <div className='user_wardInfo_innerContent'>
      <div className='user_wardInfo_avatar'>
        <img src="https://malayalam.cdn.zeenews.com/malayalam/sites/default/files/styles/zm_700x400/public/2022/02/21/137849-member-rameshan.jpg?itok=sXj-Go2O" alt="user" className='user_wardInfo_memberAvatar' />
      </div>
      <p className='user_wardInfo_memberName'>Member Name</p>
      <PlaneButton>Show more</PlaneButton>
      <WardDetailsTable />
      <p className='user_wardInfo_notification'>Notification</p>
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      {/* <NotificatonTemplate /> */}

    </div>);
}

// const NotificationSection = React.memo(NotificationExample)

export { NotificationSection }