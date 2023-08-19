import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { getUserToken } from '../../../../../../staticFiles/functions';

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

export { ShowModal };