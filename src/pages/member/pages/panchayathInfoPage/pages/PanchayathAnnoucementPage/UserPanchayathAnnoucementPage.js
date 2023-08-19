import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { AnnoucementSection } from './AnoucementDiv'

export function MemberPanchayathAnnoucementPage() {
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <AnnoucementSection/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
