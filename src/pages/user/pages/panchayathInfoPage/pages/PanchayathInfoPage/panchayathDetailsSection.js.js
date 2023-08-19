import React from 'react';
import { PlaneButton } from '../../../../../../components/planeButton';
import './panchayathDetailsSection.css'
import { ExpandListHeader, NotificatonTemplate, PanchayathDetailsTable, WardDetailsTable } from './component';
import { ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../../../userHomePage';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { getUserToken } from '../../../../../../staticFiles/functions';
import { AvatarImage } from '../../../../../../components/imageLoading';
import ShowUsermodel from '../../../wardInfoPage/pages/wardInfoPage/Model';

export function PanchayathDetailsSection() {
  const userCont = useContext(UserContext);
  const [showModel, setShowModal] = useState(false);
  const user = userCont.user;
  const [panchayathDetails, setPanchayathDetails] = useState({})
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [wards, setWards] = useState([])

  function onViewPress(userId) {
    setSelectedUserId(userId);
    setShowModal(true);
  }
  function onCloseModel() {
    setShowModal(false);
  }

  useEffect(
    () => {
      const loadWard = async () => {

        try {
          const res = await axios.get(
            `${SERVER_ADDRESS}/user/getPanchayathByPanchayathOId/${user.panchayathOId}`, { headers: { 'u-auth-token': getUserToken() } }
          );
          setPanchayathDetails(res.data.panchayath);
          const res1 = await axios.get(`${SERVER_ADDRESS}/user/searchWard`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '', panchayathOId: user.panchayathOId } })
          setWards(res1.data?.wards)
        } catch (err) {
          console.log(err);
        }
      }
      loadWard();
    }, [user.wardOId]
  )

  return (
    <div className='user_PanchayathInfo_PanchayathDetails_outerDiv'>
      <div className='user_wardInfo_avatar'>
        <AvatarImage id={panchayathDetails?.president?._id} dId={'thisissaample'} height='100%' width='100%' />
      </div>
      <p className='user_PanchayathInfo_PanchayathDetails_memberName'>{panchayathDetails?.president?.fullName}</p>
      <PlaneButton onClick={() => { onViewPress(panchayathDetails.president?._id) }}>Show more</PlaneButton>
      <PanchayathDetailsTable details={panchayathDetails} />
      <div className='user_panchayathDetails_panchayathInfo_detailsSection'>
        <ExpandListHeader title="Members">
          {
            wards.map(
              (ward) => {
                return (
                  <ListGroup>
                    <ListGroup.Item action variant="light">
                      <div className='userPanchayathInstitute_listOuter'>
                        <div>
                          {ward.member.fullName}
                        </div>
                        <div className='innerWardText'>
                          {ward.wardNo}
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>)
              }
            )
          }

        </ExpandListHeader>

      </div>
      {/* <NotificatonTemplate /> */}
      <ShowUsermodel selectedUserId={selectedUserId} show={showModel} onClose={onCloseModel} />

    </div>
  )
}

// const NotificationSection = React.memo(NotificationExample)
