import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../../../components/inputs";
import { RectangleButton } from "../../../../../../components/buttonRectangle";

export function ShowDiscussionModel(props) {



    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Post a Discussion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitTextAreaLabelled rows={4} inputTitle='Description' placeholder='Enter Description'/>
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