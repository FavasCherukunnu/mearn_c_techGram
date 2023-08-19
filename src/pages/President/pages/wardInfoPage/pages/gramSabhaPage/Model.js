import { Modal } from "react-bootstrap";
import { PitInputLabelled, PitTextAreaLabelled } from "../../../../../../components/inputs";
import { RectangleButton } from "../../../../../../components/buttonRectangle";
import './Model.css'
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { SimpleLoadingScreen } from "../../../../../../components/LoadingScreen";
import { UserContext } from "../../../../../user/userHomePage";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../../../../../staticFiles/functions";



export function ShowAddGramSabhaModel(props) {

    const [descriptionCount,setDescriptionCount] = useState([0,1]);
    const { unregister,register, handleSubmit, formState: { errors } } = useForm();
    const [showApproveModel, setShowApproveModel] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState({});
    const userData = useContext(UserContext).user;

    

    const onAdd = ()=>{
        const countArray = [...descriptionCount];
        countArray.push(countArray[countArray.length-1]+1);
        setDescriptionCount(
            countArray
        )
    }
    const onSubmit = (data)=>{
        setPostData({
            ...data,
            wardOId:userData.wardOId,
            panchayathOId:userData.panchayathOId,
            owner:userData.userId
        });
        setShowApproveModel(true);
    }

    const onExited = ()=>{
        setDescriptionCount([0,1]);
        for(let i=2;i<descriptionCount.length;i++){
            unregister(`description.${i}`)
        }
    }

    const onConfirm = async () => {

        try {
            setIsLoading(true);
            const res = await axios.post(`${SERVER_ADDRESS}/user/addWardGramSabha`, {data:postData},{headers:{'u-auth-token':getUserToken()}});
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
            <Modal fullscreen show={props.show} onHide={props.onClose} onExited={onExited} aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add GramSabha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Member_gramsabha_model_committeText">Committee</div>
                    <PitInputLabelled inputTitle='Chairman' height={'35px'} type='text' error={errors['chairman']} reg={register('chairman', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })}></PitInputLabelled>
                    <PitInputLabelled inputTitle='Convener' height={'35px'} type='text' error={errors['convener']} reg={register('convener', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })}></PitInputLabelled>
                    <PitInputLabelled inputTitle='Co-ordinator' height={'35px'} type='text' error={errors['coOrdinator']} reg={register('coOrdinator', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: 'Atleast 3 characters'
                        }
                    })}></PitInputLabelled>
                    <PitInputLabelled inputTitle='Date' height={'35px'} width='150px' type='date' error={errors['date']} reg={register('date', {
                        required: {
                            message: "cannot be empty",
                            value: true
                        }
                    })}></PitInputLabelled>
                    <div className="Member_gramsabha_model_committeText">Decisions</div>
                    {
                        descriptionCount.map(
                            (count)=>{
                                return(
                                    <PitTextAreaLabelled inputTitle={count+1} rows={4} key={count} placeholder='Enter Description' error={_.get(errors,`description.${count}`)} reg={register(`description.${count}`, {
                                        required: {
                                            message: "cannot be empty",
                                            value: true
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Atleast 3 characters'
                                        }
                                    })}/>
                                )
                            }
                        )
                    }
                    <div className="Member_gramsabha_model_committeText_addButtonOuterDiv">
                        <div></div>
                        <RectangleButton height='35px' onClick={onAdd} >Add Description</RectangleButton>
                    </div>
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