import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../components/inputs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { TiTick, TiTimes } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import './Model.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../../../staticFiles/functions";
import { ClipLoader } from "react-spinners";
import { AvatarImage } from "../../../../components/imageLoading";


export function UserRegistrationModel(props) {


    const { selectedUserId } = props;
    const [user, setUser] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
    const [showApproveModel, setShowApproveModel] = useState(false)
    const [showRejectModel, setShowRejectModel] = useState(false);
    const dateofBirth = new Date(user.dob)
    // const uint8Array = new Uint8Array(user.image?.data.data);
    // let base64img = btoa(new Uint8Array(uint8Array).reduce(function (data, byte) {
    //     return data + String.fromCharCode(byte);
    // }, ''));
    const userLoad = async () => {

        setIsLoaded(false);
        if (selectedUserId) {
            try {
                const res = await axios.get(`${SERVER_ADDRESS}/user/getUserById/${selectedUserId}`, { headers: { 'u-auth-token': getUserToken() } })
                setUser(res.data.user);
            } catch (err) {
                console.log(err);
                checkLoggedIn(err);
            }
        }
        setIsLoaded(true)

    }

    const approveUser = async () => {
        try {
            const res = await axios.post(`${SERVER_ADDRESS}/user/approveUserById`, { id: user._id }, { headers: { 'u-auth-token': getUserToken() } })
        } catch (err) {
            console.log(err);
            let res = checkLoggedIn(err);
            if (res !== false) {
                alert(res);
                setShowApproveModel(false);
            }
            return;
        }
        props.changeUi();
        props.onClose();
        setShowApproveModel(false);
    }

    const rejectUser = async () => {
        try {
            const res = await axios.post(`${SERVER_ADDRESS}/user/rejectUserById`, { id: user._id }, { headers: { 'u-auth-token': getUserToken() } })
        } catch (err) {
            console.log(err);
            let res = checkLoggedIn(err);
            if (res !== false) {
                alert(res);
                setShowApproveModel(false);
            }
            return;
        }
        props.changeUi();
        props.onClose();
        setShowRejectModel(false);
    }

    // if (props.show === true) {

        return (
            <>
                <Modal onExited={() => setIsLoaded(false)} onShow={() => userLoad()} show={props.show} onHide={() => { props.onClose(); }} aria-labelledby="example-custom-modal-styling-title" centered>
                    {
                        isLoaded === false ? <div style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ClipLoader color="#81F14D" />
                        </div>
                            :
                            <>
                                <Modal.Header closeButton>
                                    <Modal.Title>{user.fullName}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div style={{ width: '100%', maxHeight: '400px', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {/* <div className='member_userRegistration_userDetails_model_AvatarOuter' style={{
                                            backgroundImage: `url(data:${user.image?.contentType};base64,${btoa(new Uint8Array(new Uint8Array(user.image?.data.data)).reduce(function (data, byte) {
                                                return data + String.fromCharCode(byte);
                                            }, ''))})`
                                        }}>
                                            <img src={`data:${user.image?.contentType};base64,${base64img}`} />
                                        </div> */}
                                        <AvatarImage height='200px' width='200px' id={user._id}/>
                                        <table className='member_userRegistration_userDetails_model_Table'>
                                            <tr>
                                                <td className='first'>Name</td>
                                                <td>{user.fullName}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Address</td>
                                                <td>{user.address}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Father Name</td>
                                                <td className='second'>{user.fatherName}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Mother Name</td>
                                                <td className='second'>{user.motherName}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Phone No</td>
                                                <td className='second'>{user.phoneNo}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Email</td>
                                                <td className='second'>{user.email}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>District</td>
                                                <td className='second'>{user.district}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>block</td>
                                                <td className='second'>{user.block}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Panchayath</td>
                                                <td className='second'>{user.panchayath}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Ward No</td>
                                                <td className='second'>{user.wardNo}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>PinCode</td>
                                                <td className='second'>{user.pinCode}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Date of Birth</td>
                                                <td className='second'>{`${dateofBirth.getDay()}-${dateofBirth.getMonth() + 1}-${dateofBirth.getFullYear()}`}</td>
                                            </tr>
                                            <tr>
                                                <td className='first'>Adhar No</td>
                                                <td className='second'>{user.adharNo}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <RectangleButton danger onClick={() => setShowRejectModel(true)} height='40px'>
                                        <div className="member_userRegistration_userDetails_model_footerButton_insideDiv">

                                            <TiTimes />
                                            <div className="gap"></div>
                                            <div>Reject</div>
                                        </div>
                                    </RectangleButton>
                                    {user.isApproved === true ? null : <RectangleButton onClick={() => { setShowApproveModel(true) }} height='40px'>
                                        <div className="member_userRegistration_userDetails_model_footerButton_insideDiv">

                                            <TiTick />
                                            <div className="gap"></div>
                                            <div>Approve</div>
                                        </div>
                                    </RectangleButton>}
                                </Modal.Footer>
                            </>}
                </Modal>
                {/* APPROVE MODE */}
                <Modal show={showApproveModel} className="model_userApprove1234" onHide={() => setShowApproveModel(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sure?</Modal.Body>
                    <Modal.Footer>
                        <RectangleButton height='45px' danger onClick={() => { setShowApproveModel(false) }}>No</RectangleButton>
                        <RectangleButton height='45px' onClick={approveUser}>Yes</RectangleButton>
                    </Modal.Footer>
                </Modal>
                {/* REJECT MODEL */}
                <Modal show={showRejectModel} className="model_userApprove1234" onHide={() => setShowRejectModel(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sure?</Modal.Body>
                    <Modal.Footer>
                        <RectangleButton height='45px' danger onClick={() => { setShowApproveModel(false) }}>No</RectangleButton>
                        <RectangleButton height='45px' onClick={rejectUser}>Yes</RectangleButton>
                    </Modal.Footer>
                </Modal>
            </>
        );
    // } else {
    //     return <></>
    // }

}