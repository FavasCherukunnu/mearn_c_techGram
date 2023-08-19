import React, { useContext, useEffect, useState } from 'react'
import { PostTemplate } from '../../../homePage/component'
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { UserContext } from '../../../../../user/userHomePage';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';
import { PostTemplateWithCarousel } from '../../../../../user/pages/homePage/component';

export function ChatDiv1(props) {

  const [posts, setPosts] = useState([]);
  const user = props.user;
  console.log('rebuilding chat div');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(
    () => {
      const onLoad = async () => {
        try {
          setIsLoaded(false)
          const res = await axios.get(`${SERVER_ADDRESS}/user/getGallaryPostsByWard`, { headers: { 'u-auth-token': getUserToken() }, params: { wardOId: user.wardOId, panchayathOId: user.panchayathOId } })
          setPosts(res.data.posts);
          setIsLoaded(true)
        } catch (err) {
          console.log(err);
          checkLoggedIn(err);
        }
      }
      onLoad();
    }
    , [user.wardOId,props.updateUi]
  )

  return (
    <>
      {
        isLoaded ?
          posts.length === 0 ?
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: 'gray', fontWeight: '700' }}>
              No Posts Yet
            </div> :
            <div style={{ height: '100%', width: '100%' }}>
              {
                posts.map(
                  (post, index) => {
                    return <PostTemplateWithCarousel index={index} key={index} value={post} />
                  }
                )
              }
            </div>
          :
          < SimpleLoadingScreen />
      }
    </>
  )
}


const ChatSection = React.memo(ChatDiv1)

export { ChatSection }