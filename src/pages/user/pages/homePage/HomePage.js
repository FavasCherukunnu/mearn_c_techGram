import React, { useContext, useEffect, useState } from 'react'
import './HomePage.css'
import { PostTemplate, RoundedIconButton } from './component'
import { AiOutlinePlus } from 'react-icons/ai';
import { MyContext } from '../../userHomePage';
import ChatSection from './ChatSection';
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../components/divisions';
import {ShowFormmodel} from './Model';



export function UserHomePage() {

  const [showFormModel , setShowFormModel] = useState(false);

    function showFormModelFun(){
      setShowFormModel(true);
    }
    function closeFormModelFun(){
      setShowFormModel(false)
    }

  // callback(true);

  return (

    <div style={{width:'100%',height:'100%',position:"relative"}}>

      <UnderNavigationOuterDiv height='100%'>
      <DivScrollableWithGeasture>
        <ChatSection />
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '35px', right: '15px' }}><RoundedIconButton onClick={showFormModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowFormmodel show={showFormModel} onClose={closeFormModelFun}/>
      </UnderNavigationOuterDiv>
    </div>




  )
}
