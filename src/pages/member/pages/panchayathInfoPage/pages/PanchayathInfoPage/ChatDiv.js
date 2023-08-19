import React from 'react'
import { PostTemplate } from '../../../homePage/component'

export function ChatDiv1() {
  console.log('rebuilding notificaton div');

    const message = {
        owner: 'Mohammed Favas',
        id: '12345',
        images: ['https://assets.simpleviewinc.com/simpleview/image/upload/crm/bloomington/Sample-Gates_4478802b-5056-a36a-06180ee91f953fc5.jpg', 'https://fscl01.fonpit.de/userfiles/7446224/image/apple-iphone-14-pro-max-sample-photos/nextpit_apple_iphone_14_pro_max_review_day_1.1.JPEG'],
        title: 'This is title',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
      }

  return (
    <div style={{height:'100%',width:'100%'}}>
        <PostTemplate value={message} />
        <PostTemplate value={message} />
        <PostTemplate value={message} />
    </div>
  )
}


const ChatSection = React.memo(ChatDiv1)

export {ChatSection}