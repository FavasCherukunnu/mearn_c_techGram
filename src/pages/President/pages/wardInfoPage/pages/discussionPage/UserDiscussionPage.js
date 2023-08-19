import React, { useContext, useMemo, useState } from 'react'
import { PostTemplate, RoundedIconButton } from '../../../homePage/component'
import { AiOutlinePlus } from 'react-icons/ai'
import './UserDiscussionPage.css'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { PostSection } from './postDiv'
import { ImageModel, ShowDiscussionModel } from './Model'
import { UserContext } from '../../../../../user/userHomePage'

export function PresidentDiscussionPage() {
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
          <PostSection user={user} updateUi={updateUi}/>
      </DivScrollableWithGeasture>
        <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showDiscussionModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
        <ShowDiscussionModel show={showDiscussionModel} onClose={closeDiscuusionModelFun} changeUi={()=>setUpdateUi(!updateUi)}/>
        {/* <PostTemplate/> */}
    </UnderNavigationOuterDiv>
  )
}
