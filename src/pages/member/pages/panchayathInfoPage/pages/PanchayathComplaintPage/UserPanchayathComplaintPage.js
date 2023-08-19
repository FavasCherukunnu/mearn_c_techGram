import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { DropdownTop } from './component'
import { ComplaintSection } from './ComplaintDiv'

export function MemberPanchayathComplaintPage() {
  return (
    <UnderNavigationOuterDiv>
      <DropdownTop/>
      <DivScrollableWithGeasture height='calc(100% - 50px)'>
        <ComplaintSection />
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
