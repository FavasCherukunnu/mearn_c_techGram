import React from 'react'
import { Modal } from 'react-bootstrap';
import './Model.css'
import { RectangleButton } from '../../../../components/buttonRectangle';
import { PitInput, PitInputLabelled, PitTextAreaLabelled } from '../../../../components/inputs';
import { DiscussionTemplate } from './component';
export function ShowFormmodel(props) {



    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Post To Panchayath Gallary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitTextAreaLabelled rows={4} inputTitle='Description' placeholder='Enter Description' />
                    <PitInputLabelled inputTitle='Image' height={'35px'} type='File' ></PitInputLabelled>
                </Modal.Body>
                <Modal.Footer>
                    <RectangleButton danger onClick={props.onClose} height='40px' >
                        Close
                    </RectangleButton>
                    <RectangleButton onClick={props.onClose} height='40px' >
                        Post
                    </RectangleButton>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export function ShowDiscussionmodel(props) {



    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Discussion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='user_wardInfo_homePage_discussion_bodyDiv'>
                        <DiscussionTemplate/>
                        <DiscussionTemplate/>
                        <DiscussionTemplate/>
                        <DiscussionTemplate/>
                        <DiscussionTemplate/>
                        <DiscussionTemplate/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='user_wardInfo_homePage_discussion_footerDiv'>

                        <div className='user_wardInfo_homePage_discussion_footerDiv_inputDiv'>
                            <PitTextAreaLabelled padding='0px' rows={3} placeholder='Enter Your Openion'></PitTextAreaLabelled>
                        </div>
                        <RectangleButton onClick={props.onClose} height='40px' width='70px'>
                            Sent
                        </RectangleButton>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}