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