import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import './Model.css'
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import { AvatarImage } from '../../../../../../components/imageLoading';
import { ClipLoader } from 'react-spinners';
export default function ShowUsermodel(props) {

    const { selectedUserId } = props;
    const [user, setUser] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
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

    return (
        <>
            <Modal onExited={() => setIsLoaded(false)} onShow={() => userLoad()} show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>

                {isLoaded === false ? <div style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ClipLoader color="#81F14D" />
                </div>
                    :
                    <><Modal.Header closeButton>
                        <Modal.Title>{user.fullName}</Modal.Title>
                    </Modal.Header>

                        <Modal.Body>
                            <div style={{ width: '100%', maxHeight: '400px', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                <AvatarImage height='200px' width='200px' id={user._id} />
                                <table className='user_wardInfo_userPage_model_Table'>
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
                            <RectangleButton onClick={props.onClose} height='40px'>
                                Close
                            </RectangleButton>
                        </Modal.Footer></>
                }
            </Modal>
        </>
    );
}
