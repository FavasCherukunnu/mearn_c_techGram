import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ComplaintSection } from './ComplaintDiv'
import { ShowAddComplaintModel } from './Model'
import { useState } from 'react'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1'
import { AiOutlinePlus } from 'react-icons/ai'
import { DropdownTop } from '../../../wardInfoPage/pages/complaintPage/component'
import { useContext } from 'react'
import { UserContext } from '../../../../userHomePage'

export function UserPanchayathComplaintPage() {
  const [showAddProjectModel, setShowAddProjectModel] = useState(false);
  const [updateUi, setUpdateUi] = useState(false);
  const usercont = useContext(UserContext).user;

  const [listValue, setListValue] = useState(-1);
  function showAddProjectModelFun() {
    setShowAddProjectModel(true);
  }
  function closeAddProjectModelFun() {
    setShowAddProjectModel(false);
  }
  const onListDropdownChange = (val) => {
    setListValue(val);
  }
  return (
    <UnderNavigationOuterDiv>
      <DropdownTop onListDropdownChange={onListDropdownChange} />

      <DivScrollableWithGeasture height='calc(100% - 45px)'>
        <ComplaintSection updateUi={updateUi} listValue={listValue} />
      </DivScrollableWithGeasture>
      {usercont.inspect === true
        ? null
        :
        <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showAddProjectModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      }
      <ShowAddComplaintModel changeUi={() => setUpdateUi(!updateUi)} show={showAddProjectModel} onClose={closeAddProjectModelFun} />
    </UnderNavigationOuterDiv>
  )
}
