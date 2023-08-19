import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ComplaintSection } from './ComplaintDiv'
import { DropdownTop } from './component'

export function MemberComplaintPage() {

  return (
    <UnderNavigationOuterDiv>
      <DropdownTop/>
      <DivScrollableWithGeasture height='calc(100% - 45px)'>
        <ComplaintSection />
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
