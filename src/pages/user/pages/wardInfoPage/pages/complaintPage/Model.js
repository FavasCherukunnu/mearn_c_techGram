import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../../../components/inputs";
import { RectangleButton } from "../../../../../../components/buttonRectangle";
import { ComplaintDiscussionTemplate } from './component';
import { SimpleLoadingScreen } from "../../../../../../components/LoadingScreen";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../../../../../staticFiles/functions";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../userHomePage";

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

export function ShowAddComplaintModel(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showApproveModel, setShowApproveModel] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState({});
    const userData = useContext(UserContext).user;


    const onSubmit = (data)=>{
        setPostData(data);
        setShowApproveModel(true);
    }

    const onConfirm = async () => {

        const form = new FormData();
        form.append('description', postData.description);
        form.append('owner', userData.userId);
        form.append('wardOId', userData.wardOId);
        form.append('panchayathOId', userData.panchayathOId);
        form.append('title', postData.title);
        form.append('wardNo',userData.wardNo);
        for (let i = 0; i < postData.images.length; i++) {
            form.append("images", postData.images[i]);
        }
        try {
            setIsLoading(true);
            const res = await axios.post(`${SERVER_ADDRESS}/user/addWardComplaint`, form,{headers:{'u-auth-token':getUserToken()}});
            setIsLoading(false);
            setShowApproveModel(false);
            props.onClose();
            props.changeUi();
        } catch (err) {
            console.log(err);
            let res = checkLoggedIn(err);
            if (res === false) {
                //not logged in
            } else {
                alert(res);
                setShowApproveModel(false);
                setIsLoading(false);
            }

        }

    }
    return (
        <>
            <Modal fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Complaint</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitInputLabelled name='title' inputTitle='Title' height={'35px'} type='text' placeholder='Enter Title Here' error={errors['title']} reg={register('title', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })}></PitInputLabelled>
                    <PitTextAreaLabelled name='description' rows={4} inputTitle='Description' placeholder='Enter Project Description' error={errors['description']} reg={register('description', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })} />
                    <PitInputLabelled multiple accept='image/png, image/jpeg' inputTitle='Image' height={'35px'} type='File' name='images' reg={register('images')} ></PitInputLabelled>
                </Modal.Body>
                <Modal.Footer>
                    <RectangleButton danger onClick={props.onClose} height='40px' >
                        Close
                    </RectangleButton>
                    <RectangleButton onClick={handleSubmit(onSubmit)} height='40px' >
                        Post
                    </RectangleButton>
                </Modal.Footer>
            </Modal>
            {/* CONFORM POST */}
            <Modal show={showApproveModel} style={{ background: 'rgba(0, 0, 0, 0.605)' }} onHide={isLoading === false ? () => setShowApproveModel(false) : null}>
                {
                    isLoading === true ?
                        <div style={{ height: '200px' }}>
                            <SimpleLoadingScreen />
                        </div> :
                        <>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Sure?</Modal.Body>
                            <Modal.Footer>
                                <RectangleButton height='45px' danger onClick={() => { setShowApproveModel(false) }}>No</RectangleButton>
                                <RectangleButton height='45px' onClick={onConfirm}>Yes</RectangleButton>
                            </Modal.Footer>
                        </>
                }
            </Modal>
        </>
    );
}