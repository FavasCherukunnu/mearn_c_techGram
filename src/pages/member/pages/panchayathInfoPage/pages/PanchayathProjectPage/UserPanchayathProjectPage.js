import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ProjectSection } from './ProjectDiv'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1'
import { AiOutlinePlus } from 'react-icons/ai'

export function MemberPanchayathProjectPage() {
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <ProjectSection/>
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton ><AiOutlinePlus size={25} /></RoundedIconButton></div>
    </UnderNavigationOuterDiv>
  )
}
