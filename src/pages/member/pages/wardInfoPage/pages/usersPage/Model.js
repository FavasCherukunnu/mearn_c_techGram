import React from 'react'
import { Modal } from 'react-bootstrap';
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import './Model.css'
export default function ShowUsermodel(props) {



    return (
        <>
            <Modal show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>UserName</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{width:'100%',maxHeight:'400px',overflow:'auto',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <div className='user_wardInfo_userPage_model_AvatarOuter'>
                            <img src='https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg'/>
                        </div>
                        <table className='user_wardInfo_userPage_model_Table'>
                            <tr>
                                <td className='first'>Address</td>
                                <td>Address Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Father Name</td>
                                <td className='second'>Father Name Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Mother Name</td>
                                <td className='second'>Mother Name Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Phone No</td>
                                <td className='second'>Phone No Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Email</td>
                                <td className='second'>Email Here</td>
                            </tr>
                            <tr>
                                <td className='first'>District</td>
                                <td className='second'>District Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Taluk</td>
                                <td className='second'>Taluk Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Panchayath</td>
                                <td className='second'>Panchayath Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Ward No</td>
                                <td className='second'>Ward No Here</td>
                            </tr>
                            <tr>
                                <td className='first'>PinCode</td>
                                <td className='second'>PinCode Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Date of Birth</td>
                                <td className='second'>Date of Birth Here</td>
                            </tr>
                            <tr>
                                <td className='first'>Adhar No</td>
                                <td className='second'>Adhar No Here</td>
                            </tr>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <RectangleButton onClick={props.onClose} height='40px'>
                        Close
                    </RectangleButton>
                </Modal.Footer>
            </Modal>
        </>
    );
}
