import React, { useContext, useEffect, useState } from 'react';
import { PlaneButton } from '../../../../../../components/planeButton';
import './WardInfoPageHome.css'
import { NotificatonTemplate, WardDetailsTable } from './component';
import { UserContext } from '../../../../../user/userHomePage';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { getUserToken } from '../../../../../../staticFiles/functions';
import { AvatarImage } from '../../../../../../components/imageLoading';
import ShowUsermodel from './Model';

export function NotificationSection() {

  const userCont = useContext(UserContext);
  const [showModel, setShowModal] = useState(false);
  const user = userCont.user;
  const [wardDetails,setWardDetails] = useState({});
  const [annoucement, setAnnoucement] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null)
  function onViewPress(userId) {
    setSelectedUserId(userId);
    setShowModal(true);
  }
  function onCloseModel() {
    setShowModal(false);
  }
  useEffect(
    ()=>{
      const loadWard = async ()=>{

        try{
          const res = await axios.get(
            `${SERVER_ADDRESS}/user/getWardBywardOId/${user.wardOId}`,{headers:{'u-auth-token':getUserToken()}}
          );
          const res2 = await axios.get(
            `${SERVER_ADDRESS}/user/getAnnouncementsByWard/${user.wardOId}`,{headers:{'u-auth-token':getUserToken()}}
          );
          setWardDetails(res.data.ward);
          setAnnoucement(res2.data.announcements);
        }catch(err){
          console.log(err);
        }
      }
      loadWard();
    },[user.wardOId]
  )

  return (
    <div className='user_wardInfo_innerContent'>
      <div className='user_wardInfo_avatar'>
        <AvatarImage id={wardDetails?.member?._id} dId={'samapamdsfdfsl'} height='100%' width='100%' />
      </div>
      <p className='user_wardInfo_memberName'>{wardDetails?.member?.fullName}</p>
      <PlaneButton onClick={()=>{onViewPress(wardDetails.member?._id)}}>Show more</PlaneButton>
      <WardDetailsTable details={wardDetails}/>
      <p className='user_wardInfo_notification'>Notification</p>
      {
        annoucement.length>0?
        annoucement.map(
          (annoucement)=>{
            return <NotificatonTemplate data={annoucement} />
          }
        ):
        <div></div>
      }
      {/* <NotificatonTemplate /> */}
      <ShowUsermodel selectedUserId={selectedUserId} show={showModel} onClose={onCloseModel} />


    </div>);
}

// const NotificationSection = React.memo(NotificationExample)

