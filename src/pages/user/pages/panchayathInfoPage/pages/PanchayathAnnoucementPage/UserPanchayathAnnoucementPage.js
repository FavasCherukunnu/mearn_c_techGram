import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { AnnoucementSection } from './AnoucementDiv'
import { useState } from 'react';

export function UserPanchayathAnnoucementPage() {
  const [updateUi,setUpdateUi] = useState(false);
  
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
      <AnnoucementSection updateUi={updateUi}/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
