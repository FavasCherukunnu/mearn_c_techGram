import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../components/inputs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { TiTick, TiTimes } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import './Model.css'

export function UserRegistrationModel(props) {


    return (
        <>
            <Modal show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>UserName</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ width: '100%', maxHeight: '400px', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='member_userRegistration_userDetails_model_AvatarOuter'>
                            <img src='https://static.generated.photos/vue-static/face-generator/landing/wall/12.jpg' />
                        </div>
                        <table className='member_userRegistration_userDetails_model_Table'>
                            <tr>
                                <td className='first'>Name</td>
                                <td>Name Here</td>
                            </tr>
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
                    <RectangleButton danger onClick={props.onClose} height='40px'>
                        <div className="member_userRegistration_userDetails_model_footerButton_insideDiv">

                            <TiTimes/>
                            <div className="gap"></div>
                            <div>Reject</div>
                        </div>
                    </RectangleButton>
                    <RectangleButton onClick={props.onClose} height='40px'>
                        <div className="member_userRegistration_userDetails_model_footerButton_insideDiv">

                            <TiTick/>
                            <div className="gap"></div>
                            <div>Accept</div>
                        </div>
                    </RectangleButton>
                </Modal.Footer>
            </Modal>
        </>
    );
}