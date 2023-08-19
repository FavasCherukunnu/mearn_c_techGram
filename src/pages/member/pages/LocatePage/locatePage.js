import React from 'react'
import { DivScrollableWithGeasture, DivScrollableWithGeastureP0, UnderNavigationOuterDiv } from '../../../../components/divisions'
import './locatePage.css'
import { PitInput } from '../../../../components/inputs'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconButton } from '../../../../components/iconButton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { SurvayList } from './component'
export function MemberLocatePage() {
  return (
    <UnderNavigationOuterDiv height='100%'>
      <div className='user_locatePage_TopSection'>
        <div className='user_locatePage_TopSection_firstInputDiv'>
          <PitInput placeholder='Search for panchayath' height='45px' width='250px' />
          <IconButton><AiOutlineSearch size={25} /></IconButton>
        </div>
        <div className='user_locatePage_TopSection_dropDownDiv'>
          <div style={{ fontWeight: '700', paddingRight: '10px' }}>Sort By</div>
          <DropdownButton variant="light" id="dropdown-basic-button" title="Select District">
            <Dropdown.Item href="#/action-1">Rating</Dropdown.Item>
            <Dropdown.Item href="#/acction-2">Complaint Close Rate</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <DivScrollableWithGeastureP0 height='calc(100% - 100px)' isNotStyleChangable>
        <SurvayList/>
      </DivScrollableWithGeastureP0>
    </UnderNavigationOuterDiv>
  )
}

