import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../../../components/inputs";
import { RectangleButton } from "../../../../../../components/buttonRectangle";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../../user/userHomePage";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../../../../../staticFiles/functions";
import { SimpleLoadingScreen } from "../../../../../../components/LoadingScreen";

export function ShowDiscussionModel(props) {



    const [showApproveModel, setShowApproveModel] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userData = useContext(UserContext).user;
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState({});

    const onSubmit = async (data) => {
        setPostData(data);
        setShowApproveModel(true);

    }

    const onConfirm = async () => {

        const form = new FormData();
        form.append('description', postData.description);
        form.append('owner', userData.userId);
        form.append('wardOId', userData.wardOId);
        form.append('panchayathOId', userData.panchayathOId);
        for (let i = 0; i < postData.images.length; i++) {
            form.append("images", postData.images[i]);
        }
        try {
            setIsLoading(true);
            const res = await axios.post(`${SERVER_ADDRESS}/user/wardInfoPost`, form, { headers: { 'u-auth-token': getUserToken() } });
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
                    <Modal.Title>Post To Ward Gallary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitTextAreaLabelled name='description' rows={4} inputTitle='Description' placeholder='Enter Description' error={errors['description']} reg={register('description', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })} />
                    <PitInputLabelled accept={'image/png, image/jpeg'} multiple inputTitle='Image' height={'35px'} type='File' name='images' reg={register('images')} ></PitInputLabelled>
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


