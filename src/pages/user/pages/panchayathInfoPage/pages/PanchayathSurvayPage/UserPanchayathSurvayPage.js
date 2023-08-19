import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import  { SurvayList,TopBar } from './Component'

export function UserPanchayathSurvayPage() {
  const [sortValue,setSortValue] = useState('1');

  const onSortChange = (value)=>{
    setSortValue(value);
  }
  return (
    <UnderNavigationOuterDiv>

      <DivScrollableWithGeasture isNotStyleChangable paddingTop='15px'>
        <div style={{ height: '100%' }}>
          <TopBar onSortChange={onSortChange} sortValue={sortValue}/>
          <SurvayList sortValue={sortValue}/>
        </div>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
