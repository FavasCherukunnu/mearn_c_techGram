import React, { useEffect, useState } from 'react'
import { PostTemplate } from '../../../homePage/component'
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import { PostTemplateWithCarousel } from '../../../../../user/pages/homePage/component';

export function ChatDiv1(props) {
  console.log('rebuilding notificaton div');
  const [posts, setPosts] = useState([]);
  const user = props.user;
  useEffect(
    () => {
      const onLoad = async () => {
        try {
          const res = await axios.get(`${SERVER_ADDRESS}/user/getGallaryPostsByPanchayath`, { headers: { 'u-auth-token': getUserToken() }, params: { panchayathOId:user.panchayathOId } })
          setPosts(res.data.posts);
        } catch (err) {
          console.log(err);
          checkLoggedIn(err);
        }
      }
      onLoad();
    }
    , [user.wardOId,props.updateUi]
  )
  // const message = {
  //     owner: 'Mohammed Favas',
  //     id: '12345',
  //     images: [],
  //     title: 'This dsfasdfis title',
  //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  //   }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {
        posts.map(
          (post,index) => {
            return <PostTemplateWithCarousel index={index} key={index} value={post} />
          }
        )
      }
    </div>
  )
}


const ChatSection = React.memo(ChatDiv1)

export { ChatSection }