import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ProjectSection } from './ProjectDiv'

export function UserPanchayathProjectPage() {
  const [showAddProjectModel, setShowAddProjectModel] = useState(false);
  const [updateUi,setUpdateUi] = useState(false);

  function showAddProjectModelFun() {
    setShowAddProjectModel(true);
  }
  function closeAddProjectModelFun() {
    setShowAddProjectModel(false);
  }
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <ProjectSection updateUi={updateUi}/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
