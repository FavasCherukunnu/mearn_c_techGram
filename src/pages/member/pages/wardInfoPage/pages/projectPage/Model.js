import React from 'react'
import { Modal } from 'react-bootstrap';
import './Model.css'
import { PitInput, PitInputLabelled, PitTextAreaLabelled } from '../../../../../../components/inputs';
import { ProJectReviewTemplate } from './component';
import { RectangleButton } from '../../../../../../components/buttonRectangle';
import { IconButton } from '../../../../../../components/iconButton';
import { BsStarFill } from 'react-icons/bs';

export function ShowProjectModel(props) {

    function buildStart() {

        let star = [];
        let x = 0
        for (x = 0; x < 5; x++) {
            star.push(<IconButton ><BsStarFill size={20} /></IconButton>)
        }

        return <div style={{ display: 'flex' }}>
            {star}
        </div>

    }

    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Project Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='user_wardInfo_projectPage_discussion_bodyDiv'>
                        <ProJectReviewTemplate />
                        <ProJectReviewTemplate />
                        <ProJectReviewTemplate />
                        <ProJectReviewTemplate />
                        <ProJectReviewTemplate />
                        <ProJectReviewTemplate />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='user_wardInfo_projectPage_discussion_footerDiv'>
                        <div className='user_wardInfo_projectPage_discussion_footerDiv_inputDiv'>
                            {buildStart()}
                            <PitTextAreaLabelled padding='0px' rows={3} placeholder='Enter Your Review'></PitTextAreaLabelled>
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


export function ShowAddProjectModel(props) {



    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitInputLabelled inputTitle='Title' height={'35px'} type='text' placeholder='Enter Title Here' ></PitInputLabelled>
                    <PitTextAreaLabelled rows={4} inputTitle='Description' placeholder='Enter Project Description' />
                    <PitInputLabelled inputTitle='Start Date' height={'35px'} type='text' placeholder='Enter Project Start Date' ></PitInputLabelled>
                    <PitInputLabelled inputTitle='End Date' height={'35px'} type='text' placeholder='Enter Project End Date' ></PitInputLabelled>
                    <PitInputLabelled inputTitle='Fund Passed' height={'35px'} type='text' placeholder='Fund' ></PitInputLabelled>
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