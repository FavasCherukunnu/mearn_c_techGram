import React from 'react'
import { ComplaintTemplate } from './component'

function ComplaintDiv() {
    const message = [
        {
            owner: 'Mohammed Favas',
            id: '12345',
            images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYS-k-JQ89KtOpNSN1a2XydTIXRX_tMtUI0A&usqp=CAU', 'https://fscl01.fonpit.de/userfiles/7446224/image/apple-iphone-14-pro-max-sample-photos/nextpit_apple_iphone_14_pro_max_review_day_1.1.JPEG'],
            title: 'This is title',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
            isSolved: false
        }, {
            owner: 'saleel mhd',
            id: '12345',
            images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYS-k-JQ89KtOpNSN1a2XydTIXRX_tMtUI0A&usqp=CAU', 'https://fscl01.fonpit.de/userfiles/7446224/image/apple-iphone-14-pro-max-sample-photos/nextpit_apple_iphone_14_pro_max_review_day_1.1.JPEG'],
            title: 'This is title',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
            isSolved: true
        }
    ]
    return (
        <div style={{ width: '100%' }}>
            
            <ComplaintTemplate value={message[0]} />
            <ComplaintTemplate value={message[1]} />
        </div>
    );
}


export const ComplaintSection = React.memo(ComplaintDiv)