import React from 'react'
import { PostTemplate } from '../../../homePage/component'
import { GramSabhaTemplate } from './components'

export function GramSabhaTemplateSection() {
    const message = {
        owner: 'Mohammed Favas',
        id: '12345',
        title: 'This is title',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
    }
  return (
    <div style={{width:'100%',height:'100%'}}>
        <GramSabhaTemplate value={message}/>
        <GramSabhaTemplate value={message}/>
        <GramSabhaTemplate value={message}/>
        <GramSabhaTemplate value={message}/>
    </div>
  )
}

// export const GramSabhaTemplateSection = React.memo(TemplateDiv)
