import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { GramSabhaTemplateSection } from './TemplateDiv'

export function UserGramSabhaPage() {
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <GramSabhaTemplateSection/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
