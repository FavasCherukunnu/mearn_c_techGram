import React, { useState } from 'react';
import './SignupPage.css';
import { FormInput } from './component';
import { RectangleButton } from '../../components/buttonRectangle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import data from '../../staticFiles/districts.json'
import _ from 'lodash';
import { getUserToken } from '../../staticFiles/functions';
import { SERVER_ADDRESS } from '../../staticFiles/constants';
import { IconButton } from '../../components/iconButton';
import { HiOutlineHome } from 'react-icons/hi';

const SignupPage = () => {

  let navigate = useNavigate();
  const methods = useForm();
  const errors = methods.formState.errors;
  const [districtId, setDistrictId] = useState();
  const [blockId, setBlockId] = useState();
  const [panchayathId, setPanchayathId] = useState();
  const [errorMsg, setErrorMsg] = useState('');
  const selectValidateFn = (value) => {
    if (value > 0) {
      return true;
    } else {
      return "Select Value"
    }
  }
  const registerDistrict = methods.register('districtId', { validate: { required: selectValidateFn } })
  const registerBlock = methods.register('blockId', { validate: { required: selectValidateFn } })
  const registerPanchayath = methods.register('panchayathId', { validate: { required: selectValidateFn } })
  const districtOnChange = (event) => {
    registerDistrict.onChange(event)
    setDistrictId(event.target.value);
  }
  const blockOnChange = (event) => {
    registerBlock.onChange(event)
    setBlockId(event.target.value);
  }
  const panchayathOnChange = (event) => {
    registerPanchayath.onChange(event)
    setPanchayathId(event.target.value);
  }

  const onSubmit = async (data1) => {

    let district = data.districts[data1.districtId - 1];
    let block  = district.block_panchayats[data1.blockId - 1];
    let panchayath = block.panchayats[data1.panchayathId-1]

    const form = new FormData();
    form.append('data1', JSON.stringify(
      {
        ...data1,
        district: district.name,
        block: block.name,
        panchayath: panchayath.name,
        blockOId:`${district.id}${block.id}`,
        panchayathOId:`${district.id}${block.id}${panchayath.id}`,
        wardOId:`${district.id}${block.id}${panchayath.id}${data1.wardNo}`
      }
    ))
    form.append('image', data1.image[0]);

    // formData.dataTimeNow = 
    try {
      await axios.post(`${SERVER_ADDRESS}/user/dev/register`, form).then((res) => {
        // localStorage.setItem('u-auth-token', res.data.token);
        navigate('/login');
      })
    } catch (err) {
      console.log(err);
      if (err.response?.status === 409) {
        return setErrorMsg('User Already Registered. Please Login or wait for approve your requist by admin')
      }
      setErrorMsg('something went wrong');
    }

  }

  const buildDistrict = () => {
    return data.districts.map(
      (element) => {
        return (<option key={element.id} value={element.id} >{element.name}</option>)
      }
    )
  }

  const builBlock = () => {
    var arr = [];
    if (districtId > 0) {
      const district = data.districts[districtId - 1];
      if (district.block_panchayats !== undefined) {

        arr.push(district.block_panchayats.map(
          (block) => {
            return (<option key={block.id} value={block.id} >{block.name}</option>)
          }
        ))
      } else {
        methods.setValue('blockId', -1)
      }
    }
    return arr
  }

  const builPanchayath = () => {
    var arr = [];
    if (districtId > 0 && blockId > 0) {
      const district = data.districts[districtId - 1];
      if (district.block_panchayats !== undefined && district.block_panchayats[blockId - 1] !== undefined) {
        const block = data.districts[districtId - 1].block_panchayats[blockId - 1];
        if (block.panchayats !== undefined) {

          arr.push(block.panchayats.map(
            (panchayath) => {
              return (<option key={panchayath.id} value={panchayath.id} >{panchayath.name}</option>)
            }
          ));
        }
      } else {
        methods.setValue('panchayathId', -1)
      }
    }
    return arr;
  }

  return (
    <FormProvider {...methods}>
      <div className='user_registerPage_base'>

        <div className='topBarFixed'>
          <div></div>
          <div style={{ display: 'flex' }}>
            <IconButton onClick={() => navigate('/')}><HiOutlineHome size={28} /></IconButton>
          </div>
        </div>
        <div className="rootDiv">
          <div className='topFlexiv'>
            <div style={{ overflowY: 'auto', padding: '20px' }}>
              <h1 className="hero_title">SIGN UP</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="gridDiv">
                  <div className='gridItem'>
                    <FormInput inputTitle='Full Name' width='100%' name='fullName' placeholder="Full Name" />
                    <FormInput inputTitle='Address' width='100%' name='address' placeholder="Address" />
                    <FormInput inputTitle='Father Name' width='100%' name='fatherName' placeholder="Father Name" />
                    <FormInput inputTitle='Mother Name' width='100%' name='motherName' placeholder="Mother Name" />
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                      <FormInput inputTitle='Phone No' width='48%' name='phoneNo' placeholder="Phone No" />
                      <FormInput inputTitle='Email' width='48%' name='email' placeholder="Email" />
                    </div>
                    <FormInput inputTitle='Profile image' type='file' name='image' />
                  </div>
                  <div className='gridItem'>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                      <div className='user_signUp_DropDownOutDiv' style={{ width: '48%' }}>
                        <p className="user_signUp_DropDowninputTitleFont">Select District</p>
                        <select name='districtId' className='user_signUp_customDropDownToggle' ref={registerDistrict.ref} onChange={districtOnChange} >
                          <option key={-1} value={-1} >select</option>
                          {
                            buildDistrict()
                          }
                        </select>
                        <p className="user_signupPage_form_errorText">{_.get(errors, 'districtId')?.message}</p>
                      </div>
                      <div className='user_signUp_DropDownOutDiv' style={{ width: '48%' }}>
                        <p className="user_signUp_DropDowninputTitleFont">Select Block</p>
                        <select name='blockId' className='user_signUp_customDropDownToggle' ref={registerBlock.ref} onChange={blockOnChange} >
                          <option key={-1} value={-1} >select</option>
                          {
                            builBlock()
                          }
                        </select>
                        <p className="user_signupPage_form_errorText">{_.get(errors, 'blockId')?.message}</p>
                      </div>

                    </div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                      <div className='user_signUp_DropDownOutDiv' style={{ width: '48%' }}>
                        <p className="user_signUp_DropDowninputTitleFont">Select Panchayath</p>
                        <select name='panchayathId' className='user_signUp_customDropDownToggle' ref={registerPanchayath.ref} onChange={panchayathOnChange} >
                          <option key={-1} value={-1} >select</option>
                          {
                            builPanchayath()
                          }
                        </select>
                        <p className="user_signupPage_form_errorText">{_.get(errors, 'panchayathId')?.message}</p>
                      </div>
                      <FormInput inputTitle='Ward No' width='48%' name='wardNo' placeholder="Ward No" />
                    </div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                      <FormInput inputTitle='Pin Code' width='48%' name='pinCode' placeholder="Pin Code" />
                      <div style={{ width: '48%', display: 'flex', justifyContent: 'space-between' }}>
                        <FormInput type='number' inputTitle='Day' width='30%' name='dob.day' placeholder="Day" />
                        <FormInput type='number' inputTitle='Month' width='30%' name='dob.month' placeholder="Month" />
                        <FormInput type='number' inputTitle='Year' width='30%' name='dob.year' placeholder="Year" />
                      </div>
                    </div>
                    <FormInput inputTitle='Adhar No' width='100%' name='adharNo' placeholder="Adhar No" />
                    <FormInput inputTitle='Password' width='100%' name='password' placeholder="Password" type='password' />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '22px' }}>
                      <div style={{ height: '60px', lineHeight: '0.6' }}>

                        <Link to={'/login'}><p className='linkText'>Already User? Login</p></Link>
                      </div>
                      <RectangleButton width='150px' onClick={methods.handleSubmit(onSubmit)}>SIGNUP</RectangleButton>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div className='user_signUp_errormsgDiv'>
                    {errorMsg !== '' ? `${errorMsg}!!!` : ''}
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default SignupPage;
