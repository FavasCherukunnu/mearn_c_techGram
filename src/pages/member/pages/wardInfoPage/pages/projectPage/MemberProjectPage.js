import React, { useState } from 'react'
import './MemberProjectPage.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { PostTemplate } from './component'
import { UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { DivScrollableWithGeasture } from '../../../../../../components/divisions'
import { ProjectSection } from './ProjectDiv'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1'
import {ShowAddProjectModel} from './Model.js'



export function MemberProjectPage() {
  const [showAddProjectModel , setShowAddProjectModel] = useState(false);

  function showAddProjectModelFun(){
    setShowAddProjectModel(true);
  }
  function closeAddProjectModelFun(){
    setShowAddProjectModel(false);
  }
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <ProjectSection/>
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showAddProjectModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowAddProjectModel show={showAddProjectModel} onClose={closeAddProjectModelFun} />
    </UnderNavigationOuterDiv>
  )
}
