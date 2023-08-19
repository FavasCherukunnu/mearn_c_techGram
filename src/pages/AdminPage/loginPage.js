import React, { useEffect, useState } from 'react';
import './loginPage.css';
import { FormInput } from './component';
import { RectangleButton } from '../../components/buttonRectangle';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../staticFiles/constants';
import { getAdminToken } from '../../staticFiles/functions';
import { IconButton } from '../../components/iconButton';
import { HiOutlineHome } from 'react-icons/hi';


export const AdminPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: 'favas',
    password: '1234',
  });
  const [loginFailedMessage,setLoginFailedMessage] = useState(null);

  const handleOnChange = (event) => {
    const name = event.target['name'];
    formData[name] = event.target.value;

    setFormData({ ...formData });
  };

  useEffect(
    ()=>{
      if(getAdminToken()){
        navigate('home')
      }
    },[]
  )

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
        let res = await axios.post(`${SERVER_ADDRESS}/admin/login`,formData)
        let token = res.headers['x-auth-token'];
        localStorage.setItem("x-auth-token", token);
        if(res.data.message==='ok'){
          navigate('home')
        }
    } catch (err) {
      setLoginFailedMessage(err.response?err.response.data.message:'Somthing Went Wrong')
      console.log(err);
    }
    // navigate('/home');
    // Perform signup logic here
    // For example, you can make an API request to register the user

    // Reset form inputs
  };

  return (
    <div className="rootDiv">
      <div className='admin_loginPage_topBar'>
        <div></div>
        <div style={{ display: 'flex' }}>
          <IconButton onClick={()=>navigate('/')}><HiOutlineHome size={28} /></IconButton>
        </div>
      </div>
      <div className='topFlexiv'>
        <div style={{ overflowY: 'auto', padding: '20px' }}>
          <h1 className="hero_title">LOGIN</h1>
          <form>
            <div className="gridDiv">
              <div className='loginPage_gridItem'>
                <FormInput inputTitle='Email' onChange={handleOnChange} width='100%' name='userName' value={formData.userName} placeholder="Email" />
                <FormInput inputTitle='Password' width='100%' onChange={handleOnChange} name='password' value={formData.password} placeholder="Password" />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '22px',alignItems:'center' }}>
                  <div style={{ maxWidth:'200px',color:'#F14D4D',}}>
                    <div style={{fontWeight:'700',fontSize:'21px'}}>{loginFailedMessage?`${loginFailedMessage}!!!`:''}</div>
                  </div>
                  <RectangleButton width='150px' onClick={handleSubmit}>LOGIN</RectangleButton>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

