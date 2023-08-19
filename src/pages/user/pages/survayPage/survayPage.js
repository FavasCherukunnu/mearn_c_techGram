import React, { useState } from 'react'
import { DivScrollableWithGeastureP0, UnderNavigationOuterDiv } from '../../../../components/divisions';
import { PitInput } from '../../../../components/inputs';
import { IconButton } from '../../../../components/iconButton';
import { AiOutlineSearch } from 'react-icons/ai';
import { SurvayList } from './component';
import './locatePage.css'

export function UserSurvayPage() {
  
  const [key,setKey] = useState('');

  function onchangeKey(event){
    setKey(event.target.value)
  }

  return (
    <UnderNavigationOuterDiv height='100%'>
      <div className='user_locatePage_TopSection'>
        <div className='user_locatePage_TopSection_firstInputDiv'>
          <PitInput onChange={onchangeKey} placeholder='Search for panchayath' height='45px' width='250px' />
          <IconButton><AiOutlineSearch size={25} /></IconButton>
        </div>
      </div>
      <DivScrollableWithGeastureP0 height='calc(100% - 100px)' isNotStyleChangable>
        <SurvayList key1={key} />
      </DivScrollableWithGeastureP0>
    </UnderNavigationOuterDiv>
  )
}

