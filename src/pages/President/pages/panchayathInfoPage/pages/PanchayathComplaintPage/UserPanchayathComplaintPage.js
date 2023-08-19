import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
// import { DropdownTop } from './component'
import { ComplaintSection } from '../../../../../user/pages/panchayathInfoPage/pages/PanchayathComplaintPage/ComplaintDiv'
import { useState } from 'react';
import { DropdownTop } from '../../../../../user/pages/wardInfoPage/pages/complaintPage/component';
// import { ComplaintSection } from './ComplaintDiv'

export function PresidentPanchayathComplaintPage(props) {
  const [listValue, setListValue] = useState(-1);
  const onListDropdownChange = (val) => {
    setListValue(val);
  }
  return (
    <UnderNavigationOuterDiv height={props.isMain?'100%':null}>
      <DropdownTop onListDropdownChange={onListDropdownChange} />

      <DivScrollableWithGeasture height='calc(100% - 50px)'>
        <ComplaintSection listValue={listValue} />
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
