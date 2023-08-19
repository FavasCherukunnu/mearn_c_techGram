import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv, UnderNavigationOuterDivScrollable } from '../../../../../../components/divisions'
import { AnnouncementTemplate } from './component'
import { AnnoucementSection } from './AnoucementDiv'
import { useLocation } from 'react-router-dom';

export function UserAnnoucementPage() {
  const location = useLocation();
  const state = location.state;
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture id={'notificationDiv'}>
        <AnnoucementSection  pointingId={state?.id}/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
