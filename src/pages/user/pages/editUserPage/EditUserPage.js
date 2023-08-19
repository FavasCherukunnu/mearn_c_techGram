import React, { useEffect, useState } from 'react'
import './EditUserPage.css'
import axios from 'axios';
import { RectangleButton } from '../../../../components/buttonRectangle';
import { useNavigate } from 'react-router-dom';
import { SERVER_ADDRESS } from '../../../../staticFiles/constants';
import { getUserToken } from '../../../../staticFiles/functions';
import { AvatarImage, AvatarImage1 } from '../../../../components/imageLoading';

export function EditUserPage() {

  const [userData, setUserData] = useState({
    fullName: '',
    address: '',
    phoneNo: '',
    email: '',
    fatherName: '',
    motherName: '',
    district: '',
    taluk: '',
    panchayath: '',
    wardNo: '',
    pinCode: '',
    dob: { day: '', month: '', year: '' },
    adharNo: '',
    dataTimeNow: '',
    image: { data: { data: '' }, contentType: '' }
  });
  const navigate = useNavigate();
  useEffect(
    () => {
      axios.get(`${SERVER_ADDRESS}/user/getUserInfo`, { headers: { 'u-auth-token': getUserToken() } }).then((res) => {
        // console.log(res.data.user.image.data.data);
        const dat = { ...res.data.user };
        setUserData(dat);
      }).catch((err) => {
        console.log(err);
      })
    }, []
  )

  return (
    <div className='EditUserPage_outerDiv'>
      <div>
      <AvatarImage1 id={userData.image1} height='200px' width='200px'/>
      </div>
      <div className='EditUserPage_formDiv'>
        <p className='profile_profileName'>{userData.fullName}</p>
        <div className='EditUserPage_gridDiv'>
          <table className='EditUserPage_contentTable'>
            <tr>
              <td className='first_element'>Name</td>
              <td className='second_element'>{userData.fullName}</td>
            </tr>
            <tr>
              <td className='first_element'>Address</td>
              <td className='second_element'>{userData.address}</td>
            </tr>
            <tr>
              <td className='first_element'>Father</td>
              <td className='second_element'>{userData.fatherName}</td>
            </tr>
            <tr>
              <td className='first_element'>Mother</td>
              <td className='second_element'>{userData.motherName}</td>
            </tr>
            <tr>
              <td className='first_element'>Phone No</td>
              <td className='second_element'>{userData.phoneNo}</td>
            </tr>
            <tr>
              <td className='first_element'>Email</td>
              <td className='second_element'>{userData.email}</td>
            </tr>
          </table>
          <table className='EditUserPage_contentTable'>
            <tr>
              <td className='first_element'>District</td>
              <td className='second_element'>{userData.district}</td>
            </tr>
            <tr>
              <td className='first_element'>Block</td>
              <td className='second_element'>{userData.block}</td>
            </tr>
            <tr>
              <td className='first_element'>Panchayath</td>
              <td className='second_element'>{userData.panchayath}</td>
            </tr>
            <tr>
              <td className='first_element'>Ward</td>
              <td className='second_element'>{userData.wardNo}</td>
            </tr>
            <tr>
              <td className='first_element'>pinCode</td>
              <td className='second_element'>{userData.pinCode}</td>
            </tr>
            <tr>
              <td className='first_element'>Date of Birth</td>
              <td className='second_element'>{`${new Date(userData.dob).getDate()}-${new Date(userData.dob).getMonth()+1}-${new Date(userData.dob).getFullYear()}`}</td>
            </tr>
            <tr>
              <td className='first_element'>Adhar No</td>
              <td className='second_element'>{userData.adharNo}</td>
            </tr>
          </table>
          
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%',marginTop:'10px'}}>
          <RectangleButton height='40px' onClick={()=>{navigate('../editProfile')}}>Edit</RectangleButton>
          <div style={{width:'30px'}}></div>
          <RectangleButton onClick={()=>{navigate('../home')}} height='40px'>Ok</RectangleButton>
        </div>
      </div>
    </div>
  )
}
