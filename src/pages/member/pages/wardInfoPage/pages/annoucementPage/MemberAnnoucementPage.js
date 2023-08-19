import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv, UnderNavigationOuterDivScrollable } from '../../../../../../components/divisions'
import { AnnouncementTemplate } from './component'
import { AnnoucementSection } from './AnoucementDiv'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1'
import { AiOutlinePlus } from 'react-icons/ai'
import { ShowAddAnnoucementModel } from './Model'

export function MemberAnnoucementPage() {
  const [showAddAnnoucementModel , setShowAddAnnoucementModel] = useState(false);

  function showAddAnnoucementModelFun(){
    setShowAddAnnoucementModel(true);
  }
  function closeAddAnnoucementModelFun(){
    setShowAddAnnoucementModel(false);
  }

  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <AnnoucementSection/>
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showAddAnnoucementModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowAddAnnoucementModel show={showAddAnnoucementModel} onClose={closeAddAnnoucementModelFun}/>
    </UnderNavigationOuterDiv>
  )
}
