import React from 'react';
import { PlaneButton } from '../../../../../../components/planeButton';
import './panchayathDetailsSection.css'
import { ExpandListHeader, NotificatonTemplate, WardDetailsTable } from './component';
import { ListGroup } from 'react-bootstrap';

export function PanchayathDetailsSection() {
  return (
    <div className='user_PanchayathInfo_PanchayathDetails_outerDiv'>
      <div className='user_PanchayathInfo_PanchayathDetails_avatar'>
        <img src="https://malayalam.cdn.zeenews.com/malayalam/sites/default/files/styles/zm_700x400/public/2022/02/21/137849-member-rameshan.jpg?itok=sXj-Go2O" alt="user" className='user_PanchayathInfo_PanchayathDetails_memberAvatar' />
      </div>
      <p className='user_PanchayathInfo_PanchayathDetails_memberName'>President Name</p>
      <PlaneButton>Show more</PlaneButton>
      <div className='user_panchayathDetails_panchayathInfo_detailsSection'>
        <ExpandListHeader title="Members">
          <ListGroup>
            <ListGroup.Item action variant="light">Krishi Bhavan</ListGroup.Item>
          </ListGroup>
        </ExpandListHeader>
        <ExpandListHeader title="Standing Committe">
          <ListGroup>
            <ListGroup.Item action variant="light">Krishi Bhavan</ListGroup.Item>
          </ListGroup>
        </ExpandListHeader>
        <ExpandListHeader title="Govt Employees">
          <ListGroup>
            <ListGroup.Item action variant="light">Krishi Bhavan</ListGroup.Item>
          </ListGroup>
        </ExpandListHeader>
        <ExpandListHeader title="Asha Workers">
          <ListGroup>
            <ListGroup.Item action variant="light">Krishi Bhavan</ListGroup.Item>
          </ListGroup>
        </ExpandListHeader>
      </div>
    </div>
  )
}

// const NotificationSection = React.memo(NotificationExample)
