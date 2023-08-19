import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../../../components/inputs";
import { RectangleButton } from "../../../../../../components/buttonRectangle";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../user/userHomePage";
import { SimpleLoadingScreen } from "../../../../../../components/LoadingScreen";
import { checkLoggedIn, getUserToken } from "../../../../../../staticFiles/functions";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../../../staticFiles/constants";
import { DiscussionTemplate } from "./component";

export function ShowAddAnnoucementModel(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const userData = useContext(UserContext).user;
    const [annoucement, setAnnoucement] = useState({});
    const [showApproveModel, setShowApproveModel] = useState(false)

    const onSubmit = (data)=>{
        console.log(data);
        setAnnoucement(data)
        setShowApproveModel(true);
    }

    const onConfirm = async () => {

        const form = new FormData();
        form.append('description', annoucement.description);
        form.append('title', annoucement.title);
        form.append('owner', userData.userId);
        form.append('wardOId', userData.wardOId);
        form.append('panchayathOId', userData.panchayathOId);
        form.append('wardNo',userData.wardNo);
        
        for (let i = 0; i < annoucement.images.length; i++) {
            form.append("images", annoucement.images[i]);
        }

        try{
            setIsLoading(true);
            const res = await axios.post(`${SERVER_ADDRESS}/user/addWardAnnouncement`, form,{headers:{'u-auth-token':getUserToken()}});
            setIsLoading(false);
            setShowApproveModel(false);
            props.onClose();
            props.changeUi();
        }catch(err){
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
                    <Modal.Title>Add Annoucement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PitInputLabelled inputTitle='Title' height={'35px'} type='text' placeholder='Enter Title Here' error={errors['title']} reg={register('title', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })} ></PitInputLabelled>
                    <PitTextAreaLabelled rows={4} inputTitle='Description' placeholder='Enter Project Description' error={errors['description']} reg={register('description', {
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

export function ShowDiscussionmodel(props) {

    const val = props.value;
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const [replayData, setreplayData] = useState([]);
    const userData = useContext(UserContext).user;
    const [isLoading, setIsLoading] = useState(false);
    const [updateUi,setUpdateUi] = useState(false);
    useEffect(
        () => {
            const loadData = async () => {
                if (props.show === true) {
                    try {
                        setIsLoading(true)
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getDiscussionReplayById/${val._id}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
                        setreplayData(res.data.replays);
                        setIsLoading(false)
                    } catch (err) {
                        console.log(err);
                        checkLoggedIn(err);
                    }
                }
            }
            loadData();
        }, [props.show,updateUi]
    )

    const onSubmit = async (data) => {
        const dat = {
            description: data.description,
            wardNo: userData.wardNo,
            wardOId: userData.wardOId,
            panchayathOId: userData.panchayathOId,
            owner: userData.userId,
            chatId: val._id
        }
        try {
            setIsLoading(true);
            const res = await axios.post(`${SERVER_ADDRESS}/user/addDiscussionReplay`, { data: dat }, { headers: { 'u-auth-token': getUserToken() } });
            setUpdateUi(!updateUi);
            reset({description:''});
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            let res = checkLoggedIn(err);
            if (res === false) {
                //not logged in
            } else {
                alert(res);
                setIsLoading(false);
            }

        }
    }

    return (
        <>
            <Modal onExited={()=>reset({description:''})} fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Discussion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        isLoading === true
                        ?
                        <SimpleLoadingScreen />
                        :
                        replayData.length === 0
                            ?
                            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: 'gray', fontWeight: '700' }}>
                                No Replays Yet
                            </div>:
                        <div className='user_wardInfo_homePage_discussion_bodyDiv'>
                            {
                                replayData.map(
                                    (replay) => {
                                        return <DiscussionTemplate value={replay} />;
                                    }
                                )

                            }
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className='user_wardInfo_homePage_discussion_footerDiv'>

                        <div className='user_wardInfo_homePage_discussion_footerDiv_inputDiv'>
                            <PitTextAreaLabelled padding='0px' rows={3} placeholder='Enter Your Openion' error={errors['description']} reg={register('description', {
                                required: {
                                    message: "cannot be empty",
                                    value: true
                                },
                            })} ></PitTextAreaLabelled>
                        </div>
                        <RectangleButton onClick={handleSubmit(onSubmit)} height='40px' width='70px'>
                            Sent
                        </RectangleButton>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}