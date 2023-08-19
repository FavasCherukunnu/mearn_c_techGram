import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import { PitInputLabelled, PitTextAreaLabelled } from '../../../../../../components/inputs';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function ShowModal(props) {

    let dat;
    if (props.id) {
        dat = props.id;
    }

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

    return (
        <>
            <Modal size='lg' show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{dat}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ width: '100%', maxHeight: '400px', overflow: 'auto' }}>
                        <p>This is {dat} here describe about {dat}</p>
                        <div style={{ fontWeight: '700' }}>Contact info</div>
                        <div className='text'>mail</div>
                        <div className='text'>phone</div>
                        <div style={{ fontWeight: '700', padding: '0px 0px 5px 0px' }}>Notification</div>
                        {notification()}
                        {notification()}
                        {notification()}
                        {notification()}
                        {notification()}
                        {notification()}
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

export function AddInstituteModel(props) {



    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add GramSabha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='member_InstitutionPage_addInstituteModel_dropDownDiv'>
                        <div className='dropdownText'>Catogery </div>
                        <DropdownButton variant="light" id="dropdown-basic-button" title="Select">
                            <Dropdown.Item href="#/action-1">Agriculture</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">AnimalHusbandry</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Fisheries</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Education</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Health</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Welfare</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Development</Dropdown.Item>
                            </DropdownButton>
                    </div>
                    <PitTextAreaLabelled inputTitle='Description' rows={4} placeholder='Enter Description' />
                    <div className="Member_institute_AddInstituteModel_BoldText">Contact Info</div>
                    <PitInputLabelled inputTitle='Email' height={'35px'} type='text' ></PitInputLabelled>
                    <PitInputLabelled inputTitle='Phone No' height={'35px'} type='text' ></PitInputLabelled>
                    </Modal.Body>
                <Modal.Footer>
                    <RectangleButton danger onClick={props.onClose} height='40px' >
                        Close
                    </RectangleButton>
                    <RectangleButton onClick={props.onClose} height='40px' >
                        Add
                    </RectangleButton>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export { ShowModal };