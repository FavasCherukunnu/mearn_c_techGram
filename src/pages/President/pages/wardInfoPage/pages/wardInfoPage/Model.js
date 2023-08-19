import React, { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap';
import './Model.css'
import { PitTextAreaLabelled, PitInputLabelled } from '../../../../../../components/inputs';
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import { useForm } from 'react-hook-form';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { MyContext, UserContext } from '../../../../../user/userHomePage';
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';
import { ClipLoader } from 'react-spinners';
import { AvatarImage } from '../../../../../../components/imageLoading';


export function ShowFormmodel(props) {
    const [showApproveModel, setShowApproveModel] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userData = useContext(UserContext).user;
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState({});

    const onSubmit = async (data) => {
        setPostData(data);
        setShowApproveModel(true);

    }

    const onConfirm = async () => {

        const form = new FormData();
        form.append('description', postData.description);
        form.append('owner', userData.userId);
        form.append('wardOId', userData.wardOId);
        form.append('panchayathOId', userData.panchayathOId);
        form.append('isGallaryPost', true);
        for (let i = 0; i < postData.images.length; i++) {
            form.append("images", postData.images[i]);
        }
        try {
            setIsLoading(true);
            const res = await axios.post(`${SERVER_ADDRESS}/user/wardInfoPost`, form,{headers:{'u-auth-token':getUserToken()}});
            setIsLoading(false);
            setShowApproveModel(false);
            props.onClose();
            props.changeUi();
        } catch (err) {
            console.log(err);
            let res = checkLoggedIn(err);
            if (res === false) {
                //not logged in
            } else {
                alert(res);
                setShowApproveModel(false);
                setIsLoading(false);
            }

        }

    }

    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Post To Ward Gallary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitTextAreaLabelled name='description' rows={4} inputTitle='Description' placeholder='Enter Description' error={errors['description']} reg={register('description', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })} />
                    <PitInputLabelled accept={'image/png, image/jpeg'} multiple inputTitle='Image' height={'35px'} type='File' name='images' reg={register('images')} ></PitInputLabelled>
                </Modal.Body>
                <Modal.Footer>
                    <RectangleButton danger onClick={props.onClose} height='40px' >
                        Close
                    </RectangleButton>
                    <RectangleButton onClick={handleSubmit(onSubmit)} height='40px' >
                        Post
                    </RectangleButton>
                </Modal.Footer>
            </Modal>
            {/* CONFORM POST */}
            <Modal show={showApproveModel} style={{ background: 'rgba(0, 0, 0, 0.605)' }} onHide={isLoading === false ? () => setShowApproveModel(false) : null}>
                {
                    isLoading === true ?
                        <div style={{ height: '200px' }}>
                            <SimpleLoadingScreen />
                        </div> :
                        <>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Sure?</Modal.Body>
                            <Modal.Footer>
                                <RectangleButton height='45px' danger onClick={() => { setShowApproveModel(false) }}>No</RectangleButton>
                                <RectangleButton height='45px' onClick={onConfirm}>Yes</RectangleButton>
                            </Modal.Footer>
                        </>
                }
            </Modal>

        </>
    );
}


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