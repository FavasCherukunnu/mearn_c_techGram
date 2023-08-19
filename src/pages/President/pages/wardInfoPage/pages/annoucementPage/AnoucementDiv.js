import React from 'react'
// import { AnnouncementTemplate } from './component';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../user/userHomePage";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../../../../../staticFiles/functions";
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';
import { AnnouncementTemplate } from '../../../../../user/pages/wardInfoPage/pages/annoucementPage/component';

export function AnnoucementSection(props) {

  const [annoucements, setannoucements] = useState([]);
  const userCont = useContext(UserContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = userCont.user;
  const pointingId = props.pointingId;
  useEffect(
    () => {
      const onLoad = async () => {
        try {
          if (user.wardOId) {
            setIsLoaded(false)
            const res = await axios.get(`${SERVER_ADDRESS}/user/getAnnouncementsByWard/${user.wardOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
            setannoucements(res.data.announcements);
            setIsLoaded(true);

          }
        } catch (err) {
          console.log(err);
          const msg = checkLoggedIn(err);
          if (msg) {
            alert(msg)
          }

        }
      }
      onLoad();
    }
    , [user.wardOId, props.updateUi]
  );
  useEffect(
    () => {
      if (isLoaded) {
        if (pointingId) {
          const section = document.getElementById('notificationDiv').querySelector(`#id-${pointingId}`);
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, [isLoaded]
  )
  return (
    <>

      {
        isLoaded ?
          annoucements.length === 0 ?
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: 'gray', fontWeight: '700' }}>
              No Announcement
            </div> : <div style={{ height: '100%', width: '100%' }}>

              {
                annoucements.map(
                  (annoucement,index) => {
                    return <AnnouncementTemplate index={index} value={annoucement} />
                  }
                )
              }
            </div>
          :
          <SimpleLoadingScreen />
      }
    </>
  )
}

// export const AnnoucementSection = React.memo(AnoucementDiv)