import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../../../components/inputs";
import { RectangleButton } from "../../../../../../components/buttonRectangle";
import './Model.css'



export function ShowAddGramSabhaModel(props) {



    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add GramSabha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Member_gramsabha_model_committeText">Committee</div>
                    <PitInputLabelled inputTitle='Chairman' height={'35px'} type='text' ></PitInputLabelled>
                    <PitInputLabelled inputTitle='Convener' height={'35px'} type='text' ></PitInputLabelled>
                    <PitInputLabelled inputTitle='Co-ordinator' height={'35px'} type='text' ></PitInputLabelled>
                    <PitInputLabelled inputTitle='Date' height={'35px'} type='text' ></PitInputLabelled>
                    <div className="Member_gramsabha_model_committeText">Decisions</div>
                    <PitTextAreaLabelled rows={4}  placeholder='Enter Description'/>
                    <PitTextAreaLabelled rows={4}  placeholder='Enter Description'/>
                    <PitTextAreaLabelled rows={4}  placeholder='Enter Description'/>
                    <PitTextAreaLabelled rows={4}  placeholder='Enter Description'/>
                    <PitTextAreaLabelled rows={4}  placeholder='Enter Description'/>
                    <PitTextAreaLabelled rows={4}  placeholder='Enter Description'/>
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