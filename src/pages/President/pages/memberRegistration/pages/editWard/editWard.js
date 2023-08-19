import React, { useContext, useEffect, useState } from 'react'
import './editWard.css'
import './component.css'
import { FormInput } from './component';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { getUserToken, isLogedIn, logoutAdmin } from '../../../../../../staticFiles/functions';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ModelSelectPresidentPage } from './pages/Model';
import { PresidentSelectedSection } from './pages/Components';
import { IconButton, IconButtonWIthText } from '../../../../../../components/iconButton';
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions';
import { PitInputLabelled } from '../../../../../../components/inputs';
import { UserContext } from '../../../../../user/userHomePage';

export function EditWard() {
  const context = useContext(UserContext)
  const {panchayathOId,userId}  = context.user
  const {id} = useParams();

  const [wardDetails, setWardDetails] = useState(
    {
      title: '',
      wardNo: 0,
      member: null,
      panchayathOId:panchayathOId
    }
  );
  const [loginFailedMessage, setLoginFailedMessage] = useState(null);
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false)
  const handleOnchange = (event) => {
    wardDetails[event.target.name] = event.target.value;
    setWardDetails(
      {
        ...wardDetails,
      }
    )
  }

  const onPresidentSelect = (e) => {
    wardDetails.member = e;
    setWardDetails({ ...wardDetails });
    setShowModel(false)
  }
  const onPresidentDeselect = () => {
    wardDetails.member = null;
    setWardDetails({ ...wardDetails })
  }

  const handleOnSubmit = async () => {
    let { title ,wardNo,member} = wardDetails;
    if(wardNo>0 && member){
      try {
        await axios.post(`${SERVER_ADDRESS}/user/updateWardById/${id}`, { ward: {
          ...wardDetails,
          member:wardDetails.member._id,
          id:`${panchayathOId}${wardNo}`
        } }, { headers: { 'u-auth-token': getUserToken() } })
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
    }else{
      setLoginFailedMessage('please fill the form')
    }
  }

  useEffect(
    ()=>{
      const loadWardDetails =async ()=>{

        try{
          const res = await axios.get(`${SERVER_ADDRESS}/user/getWardById/${id}`,{headers:{'u-auth-token':getUserToken()}})
          setWardDetails(res.data.ward);
        }catch(err){
          console.log(err);
          if(isLogedIn(err)===false){
            navigate('/login')
          }else{
            navigate('../')
            alert('Connection failed')
          }
        }
      }
      loadWardDetails()

    },[]
  )



  return (
    <UnderNavigationOuterDiv height='100%'>
      <div className='createWard_backButtonDiv'>
        <IconButtonWIthText onClick={() => { navigate('../') }} icon={<IoMdArrowRoundBack size={28} />}></IconButtonWIthText>
      </div>
      <DivScrollableWithGeasture isNotStyleChangable height={'calc(100% - 45px)'}>

        <div className="createWard_rootDiv">
          <div className='topFlexiv'>
            <div style={{ overflowY: 'auto', padding: '20px' }}>
              <h1 className="hero_title">EDIT WARD</h1>
              <form>
                <div className="gridDiv">
                  <div className='gridItem'>
                    <PitInputLabelled height='35px' onChange={handleOnchange} inputTitle='Ward Title Name' width='100%' name='title' placeholder="Ward title" value={wardDetails.title} />
                    <PitInputLabelled height='35px' type='number' onChange={handleOnchange} inputTitle='Ward No' width='100%' name='wardNo' placeholder="Ward No" value={wardDetails.wardNo} />



                    {wardDetails.member ? <PresidentSelectedSection user={wardDetails.member} /> : null}

                    <div style={{ padding: '10px' }}>
                      <IconButtonWIthText text='Select Member' onClick={
                        () => {
                          setShowModel(true);
                        }
                      } />
                    </div>

                    <div className='admin_createWard_buttonDiv'>
                      <div>
                        <div className='admin_createWard_err_text'>
                          {loginFailedMessage ? `${loginFailedMessage}!!!` : ''}
                        </div>
                      </div>
                      <RectangleButton onClick={handleOnSubmit}>Save</RectangleButton>
                    </div>

                  </div>

                </div>

              </form>
            </div>
          </div>
          <ModelSelectPresidentPage onUnsetButtonClick={onPresidentDeselect} selectedPresident={wardDetails.member} onSet={onPresidentSelect} show={showModel} onHide={() => setShowModel(false)} />
        </div>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  );
}
