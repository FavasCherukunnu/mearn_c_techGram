import React from 'react'
import { Modal } from 'react-bootstrap';
import './Model.css'
import { RectangleButton } from '../../../../components/buttonRectangle';
import { PitInput, PitInputLabelled, PitTextAreaLabelled } from '../../../../components/inputs';
import { DiscussionTemplate } from './component';
import { useContext } from 'react';
import { UserContext } from '../../userHomePage';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../staticFiles/functions';
import { useEffect } from 'react';
import { SimpleLoadingScreen } from '../../../../components/LoadingScreen';
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

    const val = props.value;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [replayData, setreplayData] = useState([]);
    const userData = useContext(UserContext).user;
    const [isLoading, setIsLoading] = useState(false);
    const [updateUi, setUpdateUi] = useState(false);
    useEffect(
        () => {
            const loadData = async () => {
                if (props.show === true) {
                    try {
                        setIsLoading(true)
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getDiscussionReplayById/${val._id}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
                        setreplayData(res.data.replays);
                        setIsLoading(false);

                    } catch (err) {
                        console.log(err);
                        checkLoggedIn(err);
                    }
                }
            }
            loadData();
        }, [props.show, updateUi]
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
            reset({ description: '' });
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
            <Modal onExited={() => reset({ description: '' })} fullscreen show={props.show} onHide={props.onClose} aria-labelledby="example-custom-modal-styling-title" centered>
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
                                </div> :
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
                {userData.inspect === true
                    ?
                    null
                    :
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
                    </Modal.Footer>}
            </Modal>
        </>
    );
}