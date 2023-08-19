import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import TopBar, { SurvayList } from './Component'

export function PresidentPanchayathSurvayPage() {
  return (
    <UnderNavigationOuterDiv>

      <DivScrollableWithGeasture isNotStyleChangable paddingTop='15px'>
        <div style={{ height: '100%' }}>
          <TopBar />
          <SurvayList />
        </div>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
