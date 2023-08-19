import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv, UnderNavigationOuterDivScrollable } from '../../../../../../components/divisions'
import { AnnouncementTemplate } from './component'
import { AnnoucementSection } from './AnoucementDiv'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1'
import { AiOutlinePlus } from 'react-icons/ai'
import { ShowAddAnnoucementModel } from './Model'
import { useLocation } from 'react-router-dom'

export function PresidentAnnoucementPage() {
  const [showAddAnnoucementModel , setShowAddAnnoucementModel] = useState(false);
  const [updateUi,setUpdateUi] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();
  const state = location.state;
  
  function showAddAnnoucementModelFun(){
    setShowAddAnnoucementModel(true);
  }
  function closeAddAnnoucementModelFun(){
    setShowAddAnnoucementModel(false);
  }



  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture id={'notificationDiv'}>
        <AnnoucementSection updateUi={updateUi} pointingId={state?.id}/>
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showAddAnnoucementModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowAddAnnoucementModel changeUi={()=>{setUpdateUi(!updateUi)}} show={showAddAnnoucementModel} onClose={closeAddAnnoucementModelFun}/>
    </UnderNavigationOuterDiv>
  )
}
