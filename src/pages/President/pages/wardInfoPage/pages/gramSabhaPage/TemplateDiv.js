import React, { useContext, useEffect, useState } from 'react'
import { GramSabhaTemplate } from './components'
import { UserContext } from '../../../../../user/userHomePage';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';

export function GramSabhaTemplateSection(props) {
  const [data, setData] = useState([]);
  const userCont = useContext(UserContext);
  const user = userCont.user;
  const [isLoaded, setIsLoaded] = useState(false);

  
  

    useEffect(
      () => {
        const onLoad = async () => {
          if(user.wardOId){
            try {
              if (user.wardOId) {
                setIsLoaded(false)
                const res = await axios.get(`${SERVER_ADDRESS}/user/getGramSabhaByWard/${user.wardOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
                setData(res.data.data);
                setIsLoaded(true)
              }
            } catch (err) {
              console.log(err);
              const msg = checkLoggedIn(err);
              if (msg) {
                alert(msg)
              }
    
            }
          }
        }
        onLoad();
      }
      , [user.wardOId,props.updateUi]
    )
  return (
    <>
      {
        isLoaded?
          data.length === 0 ?
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: 'gray', fontWeight: '700' }}>
              No GramSabha Meeting Yet
            </div> :
            <div>
              {
                data.map(
                  (GramSabha) => {
                    return <GramSabhaTemplate value={GramSabha} />
                  }
                )
              }
            </div>
        :
        <SimpleLoadingScreen/>
      }
    </>
  )
}

// export const GramSabhaTemplateSection = React.memo(TemplateDiv)
