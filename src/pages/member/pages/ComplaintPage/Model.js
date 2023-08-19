import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../components/inputs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { ComplaintDiscussionTemplate } from './component';

export function ShowComplaintDiscussionmodel(props) {



    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Discussion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='user_wardInfo_homePage_discussion_bodyDiv'>
                        <ComplaintDiscussionTemplate/>
                        <ComplaintDiscussionTemplate/>
                        <ComplaintDiscussionTemplate/>
                        <ComplaintDiscussionTemplate/>
                        <ComplaintDiscussionTemplate/>
                        <ComplaintDiscussionTemplate/>
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