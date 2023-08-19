import React, { useEffect } from 'react'
import './HomePage.css'
import { RectangleButton } from '../../../../components/buttonRectangle'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SERVER_ADDRESS } from '../../../../staticFiles/constants'
import { getAdminToken, isLogedIn, logoutAdmin } from '../../../../staticFiles/functions'
import { HiOutlineHome, HiOutlineLogout } from 'react-icons/hi'
import { IconButton, IconButtonWIthText } from '../../../../components/iconButton'
export function AdminHomePage() {

  const navigate = useNavigate()


  useEffect(() => {

    const checkLogedIn = async () => {
      try {
        await axios.get(`${SERVER_ADDRESS}/admin/auth`, { headers: { 'x-auth-token': getAdminToken() } })
      } catch (err) {
        console.log(err);
        if (isLogedIn(err)===false) {
          logoutAdmin();
          navigate('/Admin',{replace:true})
        } else{
          return;
        }
      }
    }
    checkLogedIn();

  }, [])
  return (
    <div className='adminHomePage_base'>
      <div className='topBar'>
        <div></div>
        <div style={{ display: 'flex' }}>
          <IconButton onClick={()=>{logoutAdmin();navigate('/Admin')}}><HiOutlineLogout size={28} /></IconButton>
          <IconButton onClick={()=>navigate('/Admin')}><HiOutlineHome size={28} /></IconButton>
        </div>
      </div>
      <div className='contentDivOuter'>
        <div className='contentDivInner'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}
