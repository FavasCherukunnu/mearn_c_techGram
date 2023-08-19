import React from 'react'
import './panchayathInfoPage.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet } from 'react-router-dom';
import { UserPanchayathInfoTopNavBar} from './components';
import { SwipeGeastureDiv } from '../../../../components/divisions';

export function MemberPanchayathInfo() {
  return (
    <div style={{height:'100%',width:'100%',overflow:'hidden'}}>
      <SwipeGeastureDiv><UserPanchayathInfoTopNavBar/></SwipeGeastureDiv>
        <Outlet/>
    </div>
  )
}

