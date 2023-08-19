import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ProjectSection } from './ProjectDiv'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1'
import { AiOutlinePlus } from 'react-icons/ai'
import { ShowAddProjectModel } from './Model'

export function PresidentPanchayathProjectPage() {

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
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showAddProjectModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowAddProjectModel show={showAddProjectModel} onClose={closeAddProjectModelFun} changeUi={()=>setUpdateUi(!updateUi)} />
    </UnderNavigationOuterDiv>
  )
}
