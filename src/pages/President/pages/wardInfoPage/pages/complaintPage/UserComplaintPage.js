import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
// import { ComplaintSection } from './ComplaintDiv'
// import { DropdownTop } from './component'
import { useState } from 'react';
import { ComplaintSection } from '../../../../../user/pages/wardInfoPage/pages/complaintPage/ComplaintDiv';
import { DropdownTop } from '../../../../../user/pages/wardInfoPage/pages/complaintPage/component';

export function PresidentComplaintPage() {
  const [showAddProjectModel , setShowAddProjectModel] = useState(false);
  const [updateUi,setUpdateUi] = useState(false);
  const [listValue,setListValue] = useState(-1)
  function showAddProjectModelFun(){
    setShowAddProjectModel(true);
  }
  function closeAddProjectModelFun(){
    setShowAddProjectModel(false);
  }
  const onListDropdownChange = (val)=>{
    setListValue(val);
  }
  return (
    <UnderNavigationOuterDiv>
      <DropdownTop onListDropdownChange={onListDropdownChange}/>
      <DivScrollableWithGeasture height='calc(100% - 45px)'>
        <ComplaintSection updateUi = {updateUi} listValue={listValue}/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
