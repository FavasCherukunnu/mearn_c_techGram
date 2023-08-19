import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { PitInputLabelled, PitSelectLabelled, PitTextAreaLabelled } from '../../../../../../components/inputs';
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import { UserContext } from '../../../../../user/userHomePage';
import { useForm } from 'react-hook-form';

function ShowModal(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const id = props.id;
    const [data, setData] = useState({})

    function notification() {
        return (
            <div className='user_wardInfo_Modal_outerDiv'>
                <div className='text' style={{ width: '100%', padding: "5px 5px 5px 5px" }}>
                    here notification displays. notification is controlled by admin of institutions
                </div>
                <div className='text' style={{ padding: "0px 5px 5px 5px", }}>
                    00:00
                </div>

            </div>
        );
    }

    const loadInstitute = async () => {
        setIsLoaded(false);
        try {
            const res = await axios.get(
                `${SERVER_ADDRESS}/user/getWardInstitutesById/${props.id}`, { headers: { 'u-auth-token': getUserToken() } }
            )
            setData(res.data.institute);
        } catch (err) {

        }
        setIsLoaded(true);

    }

    return (
        <>
            <Modal size='lg' onShow={loadInstitute} show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                {
                    isLoaded ?
                        <>
                            <Modal.Header closeButton>
                                <Modal.Title>{data.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div style={{ width: '100%', maxHeight: '400px', overflow: 'auto' }}>
                                    <p>{data.description}</p>
                                    <div style={{ fontWeight: '700' }}>Contact info</div>
                                    <table>
                                        <thead>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '100px' }}>Email</td>
                                                <td>{data.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Phone No</td>
                                                <td>{data.phoneNo}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <div className='text'>mail</div>
                                    <div className='text'>phone</div> */}
                                    {/* <div style={{ fontWeight: '700', padding: '0px 0px 5px 0px' }}>Notification</div> */}
                                    {/* {notification()}
                        {notification()}
                        {notification()}
                        {notification()}
                        {notification()}
                        {notification()} */}
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <RectangleButton onClick={props.onClose} height='40px'>
                                    Close
                                </RectangleButton>
                            </Modal.Footer>
                        </>
                        :
                        <SimpleLoadingScreen />
                }
            </Modal>
        </>
    );
}
export function AddInstituteModel(props) {

    let arr = ['Agriculture', 'Development', 'Welfare', 'Health', 'Education', 'Fisheries', 'AnimalHusbandry']
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showApproveModel, setShowApproveModel] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState({});
    const userData = useContext(UserContext).user;

    const onSubmit = (data) => {

        setPostData({
            ...data,
            wardOId: data.ward ? `${userData.panchayathOId}${data.ward}` : 'NOT',
            panchayathOId: userData.panchayathOId,
            owner: userData.userId,
        });
        setShowApproveModel(true);

    }

    const onConfirm = async () => {


        try {
            setIsLoading(true);
            const res = await axios.post(`${SERVER_ADDRESS}/user/addWardInstitutes`, { data: postData }, { headers: { 'u-auth-token': getUserToken() } });
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
                    <Modal.Title>Add GramSabha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitInputLabelled inputTitle='Title' height={'35px'} type='text' error={errors['title']} reg={register('title', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })}></PitInputLabelled>
                    <div className='member_InstitutionPage_addInstituteModel_dropDownDiv'>
                        <PitSelectLabelled inputTitle='Catogery' height='35px' error={errors['catogery']} reg={register('catogery', {
                            required: {
                                message: "cannot be empty",
                                value: true
                            },
                            minLength: {
                                value: 3,
                                message: 'Atleast 3 characters'
                            }
                        })}>
                            <option key={-1} value={''}>select</option>
                            {
                                arr.map((val, index) => {
                                    return <option key={index} value={val}>{val}</option>
                                })
                            }
                        </PitSelectLabelled>


                        {/* <DropdownButton variant="light" id="dropdown-basic-button" title="Select">
                            <Dropdown.Item href="#/action-1">Agriculture</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">AnimalHusbandry</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Fisheries</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Education</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Health</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Welfare</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Development</Dropdown.Item>
                        </DropdownButton> */}
                    </div>
                    <PitInputLabelled inputTitle='Ward (Optional)' height={'35px'} type='number' width='180px' reg={register('ward')}></PitInputLabelled>
                    <PitTextAreaLabelled inputTitle='Description' rows={4} placeholder='Enter Description' error={errors['description']} reg={register('description', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })} />
                    <div className="Member_institute_AddInstituteModel_BoldText">Contact Info</div>
                    <PitInputLabelled inputTitle='Email' height={'35px'} type='text' error={errors['email']} reg={register('email', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })}></PitInputLabelled>
                    <PitInputLabelled inputTitle='Phone No' height={'35px'} type='text' error={errors['phoneNo']} reg={register('phoneNo', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })}></PitInputLabelled>
                </Modal.Body>
                <Modal.Footer>
                    <RectangleButton danger onClick={props.onClose} height='40px' >
                        Close
                    </RectangleButton>
                    <RectangleButton onClick={handleSubmit(onSubmit)} height='40px' >
                        Add
                    </RectangleButton>
                </Modal.Footer>
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
            </Modal>
        </>
    );
}

export { ShowModal };