import React from 'react'
import { PostTemplate } from '../../../homePage/component'

function PostDiv() {
    const message = {
        owner: 'Mohammed Favas',
        id: '12345',
        images: ['https://cdn2.advanceinfotech.org/kozhikode.directory/1200x675/business/1149/kozhikode-district-panchayath-01-1643971673.webp', 'https://www.entemalappuram.com/wp-content/uploads/2019/06/edavanna-panchayath-office-number.jpg'],
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

export const PostSection = React.memo(PostDiv);
