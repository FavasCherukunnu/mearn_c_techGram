import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../components/divisions'
import { DropdownTop } from './component'
import { ComplaintSection } from './ComplaintDiv'

export function MemberOnlyComplaintPage() {
  return (
    <UnderNavigationOuterDiv height='100%'>
      <DropdownTop/>
      <DivScrollableWithGeasture height='calc(100% - 45px)'>
        <ComplaintSection />
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
