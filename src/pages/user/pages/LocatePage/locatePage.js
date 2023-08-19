import React, { useState } from 'react'
import { DivScrollableWithGeasture, DivScrollableWithGeastureP0, UnderNavigationOuterDiv } from '../../../../components/divisions'
import './locatePage.css'
import { PitInput } from '../../../../components/inputs'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconButton } from '../../../../components/iconButton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { SurvayList } from './component'
import { TopBar } from '../panchayathInfoPage/pages/PanchayathSurvayPage/Component'
export function UserLocatePage() {
  const [sortValue, setSortValue] = useState('1');
  const [searchString,setsearchString] = useState('')
  const onSortChange = (value) => {
    setSortValue(value.target.value);
  }

  function onChangeSearch(value){
    setsearchString(value.target.value)
  }

  return (
    <UnderNavigationOuterDiv height='100%'>
      <div className='user_locatePage_TopSection'>
        <div className='user_locatePage_TopSection_firstInputDiv'>
          <PitInput onChange={onChangeSearch} placeholder='Search for panchayath' height='45px' width='250px' />
          <IconButton><AiOutlineSearch size={25} /></IconButton>
        </div>
        <div className='user_locatePage_TopSection_dropDownDiv'>
          <div style={{ fontWeight: '700', paddingRight: '10px' }}>Sort By</div>
          <select className='admin_customDropDownToggle' onChange={onSortChange}>
            <option key={1} value={'1'}>Rating</option>
            <option key={2} value={'2'}>Complaint Solve Rate</option>
          </select>
        </div>
      </div>
      <DivScrollableWithGeastureP0 height='calc(100% - 100px)' isNotStyleChangable>
        <SurvayList sortValue={sortValue} searchString={searchString} />
      </DivScrollableWithGeastureP0>
    </UnderNavigationOuterDiv>
  )
}

