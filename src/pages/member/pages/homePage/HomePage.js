import React, { useContext, useEffect, useState } from 'react'
import './HomePage.css'
import { PostTemplate, RoundedIconButton } from './component'
import { AiOutlinePlus } from 'react-icons/ai';
// import { MyContext } from '../../userHomePage';
import ChatSection from './ChatSection';
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../components/divisions';
import {ShowFormmodel} from './Model';



export function HomeMember() {

  // callback(true);

  return (

    <div style={{width:'100%',height:'100%',position:"relative"}}>

      <UnderNavigationOuterDiv height='100%'>
      <DivScrollableWithGeasture>
        <ChatSection />
      </DivScrollableWithGeasture>
      </UnderNavigationOuterDiv>
    </div>




  )
}
