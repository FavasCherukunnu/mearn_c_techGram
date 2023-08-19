import React from 'react'
import './wardInfoPage.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet } from 'react-router-dom';
import { UserWardInfoTopNavBar} from './components';
import { SwipeGeastureDiv } from '../../../../components/divisions';

function MemberWardInfoPage() {
  return (
    <div style={{height:'100%',width:'100%',overflow:'hidden'}}>
      <SwipeGeastureDiv><UserWardInfoTopNavBar/></SwipeGeastureDiv>
      <Outlet/>
    </div>
  )
}

export {MemberWardInfoPage}