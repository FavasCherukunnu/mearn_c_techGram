import React, { useContext, useEffect, useState } from 'react'
import { DivScrollableWithGeasture, DivScrollableWithGeastureP0, UnderNavigationOuterDiv } from '../../../../components/divisions'
import './memberUserRegistration.css'
import { SurvayList } from './component'
import { RoundedIconButton } from '../../../../components/PlaneButton1'
import { AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SERVER_ADDRESS } from '../../../../staticFiles/constants'
import { checkLoggedIn, getUserToken, isLogedIn } from '../../../../staticFiles/functions'
import { UserContext } from '../../../user/userHomePage'
import { Modal } from 'react-bootstrap'
import { RectangleButton } from '../../../../components/buttonRectangle'
export function PresidentMemberRegistration() {
    const navigate = useNavigate()
    const [searchString, setSearchString] = useState('');
    const [loginFailedMessage, setLoginFailedMessage] = useState(null);
    const [changeInitState, setchangeInitState] = useState(false)
    const [deleteModel,setDeleteModel] = useState(false)
    const [wards, setWards] = useState([])
    const [delWard,setDelWard] = useState({})

    const context = useContext(UserContext)

    const { panchayathOId, userId } = context.user
    console.log(panchayathOId);
    const onSeachWard = async () => {

        try {
            const res = await axios.get(`${SERVER_ADDRESS}/user/searchWard`, { headers: { 'u-auth-token': getUserToken() }, params: { key: searchString, panchayathOId: panchayathOId } })
            setWards(res.data?.wards)
        } catch (err) {
            console.log(err)
            let loggedIn = isLogedIn(err);
            if (loggedIn === true) {
                setLoginFailedMessage(err.response.data.message);
            } else if (loggedIn === null) {
                setLoginFailedMessage('Somthing Went Wrong');
            } else {
                console.log('nont logged in');
                navigate('/login')
                //navigate to login page
            }
        }
    }

    async function deleteWard() {
        try {
            const res = await axios.post(`${SERVER_ADDRESS}/user/deleteWard`, { wardId: delWard._id, panchayathOId: delWard.panchayathOId, key: searchString }, { headers: { 'u-auth-token': getUserToken() } });
            setchangeInitState(!changeInitState)
        } catch (err) {
            console.log(err);
            const res = checkLoggedIn(err);
            if (res === false) {
                return;
            } else {
                alert(res);
            }
        }
        setDeleteModel(false);
    }
    

    useEffect(
        () => {
            onSeachWard();
        }, [searchString, panchayathOId, changeInitState]
    )

    return (
        <UnderNavigationOuterDiv isNotStyleChangable height='100%'>
            <div className='member_memberRegistrationPage_topHeadDiv'>
                <div className='title'>Member Registration</div>
            </div>
            <DivScrollableWithGeastureP0 height='calc(100% - 45px)' isNotStyleChangable>
                <SurvayList wards={wards} onDeleteButtonClick={(ward)=>{setDelWard(ward);setDeleteModel(true)}} />
                <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={() => { navigate('createWard') }}><AiOutlinePlus size={25} /></RoundedIconButton></div>
            </DivScrollableWithGeastureP0>
            {/* model */}
            <Modal show={deleteModel} onHide={()=>{setDeleteModel(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do You Want to Delete Ward?</Modal.Body>
                <Modal.Footer>
                    <RectangleButton height='45px' danger onClick={()=>{setDeleteModel(false)}}>No</RectangleButton>
                    <RectangleButton height='45px' onClick={deleteWard}>Yes</RectangleButton>
                </Modal.Footer>
            </Modal>
        </UnderNavigationOuterDiv>
    )
}
