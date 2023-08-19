import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { GramSabhaTemplateSection } from './TemplateDiv'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1'
import { AiOutlinePlus } from 'react-icons/ai'
import { ShowAddGramSabhaModel } from './Model'

export function MemberGramSabhaPage() {

  const [showAddGramSabhaModel , setShowAddGramSabhaModel] = useState(false);

  function showAddGramSabhaModelFun(){
    setShowAddGramSabhaModel(true);
  }
  function closeAddGramSabhaModelFun(){
    setShowAddGramSabhaModel(false);
  }
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <GramSabhaTemplateSection/>
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showAddGramSabhaModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowAddGramSabhaModel show={showAddGramSabhaModel} onClose={closeAddGramSabhaModelFun}/>
    </UnderNavigationOuterDiv >
  )
}
