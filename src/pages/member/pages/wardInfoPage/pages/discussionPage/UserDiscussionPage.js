import React, { useState } from 'react'
import { PostTemplate, RoundedIconButton } from '../../../homePage/component'
import { AiOutlinePlus } from 'react-icons/ai'
import './UserDiscussionPage.css'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { PostSection } from './postDiv'
import { ShowDiscussionModel } from './Model'

export function MemberDiscussionPage() {
  const [showDiscussionModel , setShowDiscussionModel] = useState(false);

  function showDiscussionModelFun(){
    setShowDiscussionModel(true);
  }
  function closeDiscuusionModelFun(){
    setShowDiscussionModel(false);
  }
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
          <PostSection/>
      </DivScrollableWithGeasture>
        <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showDiscussionModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
        <ShowDiscussionModel show={showDiscussionModel} onClose={closeDiscuusionModelFun}/>
        {/* <PostTemplate/> */}
    </UnderNavigationOuterDiv>
  )
}
