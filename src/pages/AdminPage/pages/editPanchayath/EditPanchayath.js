import React, { useEffect, useState } from 'react'
import './EditPanchayath.css'
import './component.css'
import { FormInput } from './component';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RectangleButton } from '../../../../components/buttonRectangle';
import data from '../../../../staticFiles/districts.json'
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../staticFiles/constants';
import { getAdminToken, isLogedIn, logoutAdmin } from '../../../../staticFiles/functions';
import { Button, Modal } from 'react-bootstrap';
import { IconButton, IconButtonWIthText } from '../../../../components/iconButton';
import {IoMdArrowRoundBack} from 'react-icons/io'
import { PresidentSelectedSection } from '../createPanchayath/pages/Components';
import { ModelSelectPresidentPage } from '../createPanchayath/pages/Model';

export function EditPanchayath() {
  const [panchayahtDetails, setPanchayathDetails] = useState(
    {
      title: '',
      districtId: -1,
      blockId: -1,
      panchayathId: -1,
    }
  );
  const [loginFailedMessage, setLoginFailedMessage] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const [showModel, setShowModel] = useState(false)
  const [showModelPresidentList, setShowModelPresidentList] = useState(false)


  const handleOnchange = (event) => {
    panchayahtDetails[event.target.name] = event.target.value;
    console.log(panchayahtDetails);
    setPanchayathDetails(
      {
        ...panchayahtDetails,
      }
    )
  }

  const onPresidentSelect = (e) => {
    panchayahtDetails.president = e;
    setPanchayathDetails({ ...panchayahtDetails });
    setShowModelPresidentList(false)
  }
  const onPresidentDeselect = ()=>{
    panchayahtDetails.president=null;
    setPanchayathDetails({...panchayahtDetails})
  }

  const modelHandleOnClose = () => {
    setShowModel(false)
  }
  const modelHandleOnOpen = () => {
    const {districtId,blockId,panchayathId,title} = panchayahtDetails;
    if (districtId > 0 && blockId > 0 && panchayathId > 0 && title !== '') {
      setShowModel(true)
    }
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
        }
      } else {
        console.log(blockId);
      }
    }
    return arr;
  }

  const handleOnSave = async () => {
    let { districtId, blockId, panchayathId } = panchayahtDetails;

      let res = {
        ...panchayahtDetails,
        district: data.districts[districtId - 1].name,
        block: data.districts[districtId - 1].block_panchayats[blockId - 1].name,
        panchayath: data.districts[districtId - 1].block_panchayats[blockId - 1].panchayats[panchayathId - 1].name,
        id: `${districtId}${blockId}${panchayathId}`,
        president:panchayahtDetails.president?panchayahtDetails.president._id:null,
      }

      console.log(res);
      try {
        const token = localStorage.getItem('x-auth-token');
        await axios.post(`${SERVER_ADDRESS}/admin/updatePanchayath/${panchayahtDetails._id}`, { panchayath: res }, { headers: { 'x-auth-token': token } })
        modelHandleOnClose();
        return navigate(-1);
    
      } catch (err) {

        console.log(err);
        let loggedIn = isLogedIn(err);
        if (loggedIn === true) {
          setLoginFailedMessage(err.response.data.message);
        } else if (loggedIn === null) {
          setLoginFailedMessage('Somthing Went Wrong');
        } else {
          navigate('/Admin')
          //navigate to login page
        }
      }
      modelHandleOnClose();
    
  }

  useEffect(
    () => {

      const loadPanchayath = async () => {
        try {
          let panchayathId = params.id;
          let res = await axios.get(`${SERVER_ADDRESS}/admin/getPanchayathById/${panchayathId}`, { headers: { 'x-auth-token': getAdminToken() } });
          let panchayath = res.data.panchayath;
          setPanchayathDetails(panchayath)
        } catch (err) {
          if (isLogedIn(err) === false) {
            logoutAdmin();
            navigate('/Admin')
          }
        }
      }
      loadPanchayath();
    }, []
  )

  return (
    <div className="editPanchayath_rootDiv">
      <div className='editPanchayath_backButtonDiv'>
        <IconButton onClick={()=>{navigate('../viewPanchayath')}}><IoMdArrowRoundBack size={28}/></IconButton>
      </div>
      <div className='topFlexiv'>
        <div style={{ overflowY: 'auto', padding: '20px' }}>
          <h1 className="hero_title">EDIT PANCHAAYTH</h1>
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
                {panchayahtDetails.president&&panchayahtDetails.president!==null?<PresidentSelectedSection user={panchayahtDetails.president}/>:null}
                
                <div style={{ padding: '10px' }}>
                  <IconButtonWIthText text='Select President' onClick={
                    () => {
                      if (panchayahtDetails.panchayathId > 0) {
                        setShowModelPresidentList(true);
                      }
                    }
                  } />
                </div>

                <div className='admin_editPanchayath_buttonDiv'>
                  <div>
                    <div className='admin_editPanchayath_err_text'>
                      {loginFailedMessage ? `${loginFailedMessage}!!!` : ''}
                    </div>
                  </div>
                  <RectangleButton height='40px' onClick={modelHandleOnOpen}>Save</RectangleButton>
                </div>

              </div>

            </div>

          </form>
        </div>
      </div>
      <Modal show={showModel} onHide={modelHandleOnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You want to Edit Panchayath Details?</Modal.Body>
        <Modal.Footer>
          <RectangleButton height='45px' danger onClick={modelHandleOnClose}>No</RectangleButton>
          <RectangleButton height='45px' onClick={handleOnSave}>Yes</RectangleButton>
        </Modal.Footer>
      </Modal>

      <ModelSelectPresidentPage onUnsetButtonClick={onPresidentDeselect} selectedPresident={panchayahtDetails.president} onSet={onPresidentSelect} show={showModelPresidentList} onHide={() => setShowModelPresidentList(false)} panchayathOId={`${panchayahtDetails.districtId}${panchayahtDetails.blockId}${panchayahtDetails.panchayathId}`} />

    </div>
  );
}
