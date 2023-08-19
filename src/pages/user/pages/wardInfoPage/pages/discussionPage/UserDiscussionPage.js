import React, { useContext, useState } from 'react'
import { PostTemplate, RoundedIconButton } from '../../../homePage/component'
import { AiOutlinePlus } from 'react-icons/ai'
import './UserDiscussionPage.css'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { PostSection } from './postDiv'
import { ShowDiscussionModel } from './Model'
import { UserContext } from '../../../../userHomePage'
import { useMemo } from 'react'

export function UserDiscussionPage() {
  const [showDiscussionModel, setShowDiscussionModel] = useState(false);
  const usercont = useContext(UserContext).user;
  const [updateUi,setUpdateUi] = useState(false);

  const user = useMemo(
    () => { return { ...usercont } },
    [usercont.wardOId]
  )


  function showDiscussionModelFun() {
    setShowDiscussionModel(true);
  }
  function closeDiscuusionModelFun() {
    setShowDiscussionModel(false);
  }
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <PostSection updateUi={updateUi} user={user} />
      </DivScrollableWithGeasture>
      {usercont.inspect === true
        ? null
        : <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showDiscussionModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      }
      <ShowDiscussionModel show={showDiscussionModel} onClose={closeDiscuusionModelFun} changeUi={()=>setUpdateUi(!updateUi)} />
      {/* <PostTemplate/> */}
    </UnderNavigationOuterDiv>
  )
}
