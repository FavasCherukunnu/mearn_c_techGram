import React, { useEffect, useState } from 'react'
import './CreatePanchayath.css'
import './component.css'
import { FormInput } from './component';
import { Link, useNavigate } from 'react-router-dom';
import { RectangleButton } from '../../../../components/buttonRectangle';
import data from '../../../../staticFiles/districts.json'
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../staticFiles/constants';
import { isLogedIn, logoutAdmin } from '../../../../staticFiles/functions';
import { IconButton, IconButtonWIthText } from '../../../../components/iconButton';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ModelSelectPresidentPage } from './pages/Model';
import { PresidentSelectedSection } from './pages/Components';

export function CreatePanchayath() {
  const [panchayahtDetails, setPanchayathDetails] = useState(
    {
      title: '',
      districtId: -1,
      blockId: -1,
      panchayathId: -1,
      president: null
    }
  );
  const [loginFailedMessage, setLoginFailedMessage] = useState(null);
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false)

  const handleOnchange = (event) => {
    panchayahtDetails[event.target.name] = event.target.value;
    setPanchayathDetails(
      {
        ...panchayahtDetails,
      }
    )
  }

  const onPresidentSelect = (e) => {
    panchayahtDetails.president = e;
    setPanchayathDetails({ ...panchayahtDetails });
    setShowModel(false)
  }
  const onPresidentDeselect = ()=>{
    panchayahtDetails.president=null;
    setPanchayathDetails({...panchayahtDetails})
  }

  const buildDistrict = () => {
    if (panchayahtDetails.districtId <= 0) {
      panchayahtDetails.panchayathId = -1;
      panchayahtDetails.blockId = -1;
    }
    return data.districts.map(
      (element) => {
        return (<option key={element.id} value={element.id} >{element.name}</option>)
      }
    )
  }

  const builBlock = () => {
    let districtId = panchayahtDetails.districtId;
    var arr = [];
    arr.push(<option key={-1} value={-1}>select</option>)
    if (districtId > 0) {
      const district = data.districts[districtId - 1];
      if (district.block_panchayats !== undefined) {

        arr.push(district.block_panchayats.map(
          (block) => {
            return (<option key={block.id} value={block.id} >{block.name}</option>)
          }
        ))
      } else if (panchayahtDetails.blockId > 0) {
        panchayahtDetails.blockId = -1;
        panchayahtDetails.panchayathId = -1;
        setPanchayathDetails({ ...panchayahtDetails })
      }
    }
    return arr
  }

  const builPanchayath = () => {
    let districtId = panchayahtDetails.districtId;
    let blockId = panchayahtDetails.blockId;
    var arr = [];
    arr.push(<option key={-1} value={-1}>select</option>)
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
        } else {
          panchayahtDetails.blockId = -1;
          panchayahtDetails.panchayathId = -1;
          setPanchayathDetails({ ...panchayahtDetails })
        }
      } else if (panchayahtDetails.panchayathId > 0) {
        panchayahtDetails.blockId = -1;
        panchayahtDetails.panchayathId = -1;
        setPanchayathDetails({ ...panchayahtDetails })
      }
    }
    return arr;
  }

  const handleOnSubmit = async () => {
    let { districtId, blockId, panchayathId, title } = panchayahtDetails;

    if (districtId > 0 && blockId > 0 && panchayathId > 0 && title !== '') {
      let res = {
        district: data.districts[districtId - 1].name,
        block: data.districts[districtId - 1].block_panchayats[blockId - 1].name,
        panchayath: data.districts[districtId - 1].block_panchayats[blockId - 1].panchayats[panchayathId - 1].name,
        id: `${districtId}${blockId}${panchayathId}`,
        ...panchayahtDetails,
        president:panchayahtDetails.president?._id,
      }
      try {
        const token = localStorage.getItem('x-auth-token');
        await axios.post(`${SERVER_ADDRESS}/admin/createPanchayath`, { panchayath: res }, { headers: { 'x-auth-token': token } })
        navigate('../')
      } catch (err) {

        console.log(err);
        let loggedIn = isLogedIn(err);
        if (loggedIn === false) {
          logoutAdmin();
          navigate('/Admin')
          //navigate to login page
        } else if (loggedIn === null) {
          setLoginFailedMessage('Somthing Went Wrong');
        } else {
          setLoginFailedMessage(err.response.data.message);
        }
      }
    } else {
      console.log('please select value');
    }
  }



  return (
    <div className="createPanchayath_rootDiv">
      <div className='createPanchayath_backButtonDiv'>
        <IconButton onClick={() => { navigate('../') }}><IoMdArrowRoundBack size={28} /></IconButton>
      </div>
      <div className='topFlexiv'>
        <div style={{ overflowY: 'auto', padding: '20px' }}>
          <h1 className="hero_title">CREATE PANCHAAYTH</h1>
          <form>
            <div className="gridDiv">
              <div className='gridItem'>
                <FormInput onChange={handleOnchange} inputTitle='Panchayath Title Name' width='100%' name='title' placeholder="Panchayath Name" value={panchayahtDetails.title} />

                <div className='DropDownOutDiv'>
                  <p className="DropDowninputTitleFont">Select District</p>
                  <select name='districtId' value={panchayahtDetails.districtId} onChange={handleOnchange} className='admin_customDropDownToggle'>
                    <option key={-1} value={-1} >select</option>
                    {
                      buildDistrict()
                    }
                  </select>
                </div>

                <div n className='DropDownOutDiv'>
                  <p className="DropDowninputTitleFont">Select block</p>
                  <select name='blockId' value={panchayahtDetails.blockId} className='admin_customDropDownToggle' onChange={handleOnchange}>
                    {
                      builBlock()
                    }
                  </select>
                </div>

                <div className='DropDownOutDiv'>
                  <p className="DropDowninputTitleFont">Select Panchayath</p>
                  <select name='panchayathId' value={panchayahtDetails.panchayathId} className='admin_customDropDownToggle' onChange={handleOnchange}>
                    {builPanchayath()}
                  </select>
                </div>

                {panchayahtDetails.president?<PresidentSelectedSection user={panchayahtDetails.president}/>:null}

                <div style={{ padding: '10px' }}>
                  <IconButtonWIthText text='Select President' onClick={
                    () => {
                      if (panchayahtDetails.panchayathId > 0) {
                        setShowModel(true);
                      }
                    }
                  } />
                </div>

                <div className='admin_createPanchayath_buttonDiv'>
                  <div>
                    <div className='admin_createPanchayath_err_text'>
                      {loginFailedMessage ? `${loginFailedMessage}!!!` : ''}
                    </div>
                  </div>
                  <RectangleButton onClick={handleOnSubmit}>Create</RectangleButton>
                </div>

              </div>

            </div>

          </form>
        </div>
      </div>
      <ModelSelectPresidentPage onUnsetButtonClick={onPresidentDeselect} selectedPresident={panchayahtDetails.president} onSet={onPresidentSelect} show={showModel} onHide={() => setShowModel(false)} panchayathOId={`${panchayahtDetails.districtId}${panchayahtDetails.blockId}${panchayahtDetails.panchayathId}`} />
    </div>
  );
}
