import React, { useContext, useMemo, useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { PostSection } from './postDiv'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1';
import { AiOutlinePlus } from 'react-icons/ai';
import { ShowDiscussionModel } from './Model';
import { UserContext } from '../../../../../user/userHomePage';

export function PresidentPanchayathDiscussionPage() {
  const [showDiscussionModel , setShowDiscussionModel] = useState(false);
  const usercont = useContext(UserContext).user;
  const [updateUi,setUpdateUi] = useState(false);
  const user = useMemo(
    ()=> {return {...usercont}},
    [usercont.wardOId]
  )
  function showDiscussionModelFun(){
    setShowDiscussionModel(true);
  }
  function closeDiscuusionModelFun(){
    setShowDiscussionModel(false);
  }
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <PostSection user={user} updateUi={updateUi} />
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showDiscussionModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowDiscussionModel show={showDiscussionModel} onClose={closeDiscuusionModelFun} changeUi={()=>setUpdateUi(!updateUi)}/>
    </UnderNavigationOuterDiv>
  )
}
