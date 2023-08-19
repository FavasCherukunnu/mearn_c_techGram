import { Button, Modal } from 'react-bootstrap'
import { FormInput } from '../component';
import './Model.css'
import { PitInput } from '../../../../../../../components/inputs';
import { PresidentTemplate } from './Components';
import { useContext, useEffect, useState } from 'react';
import { SERVER_ADDRESS } from '../../../../../../../staticFiles/constants';
import axios from 'axios';
import { getAdminToken, getUserToken } from '../../../../../../../staticFiles/functions';
import { UserContext } from '../../../../../../user/userHomePage';
export function ModelSelectPresidentPage(props) {
    const [userList,setUserList]  = useState([]);
    const [searchString,setSearchString]  = useState('');
    const {show,onSet,selectedPresident,onUnsetButtonClick} = props;
    const context = useContext(UserContext)
    const {panchayathOId,userId}  = context.user

    useEffect(
        ()=>{
            const readUser = async (event)=>{
                try{
                    let res = await axios.get(`${SERVER_ADDRESS}/user/getUsersBasedOnPachayathId`,{headers:{'u-auth-token':getUserToken(),},params:{panchayathOId:panchayathOId,key:searchString}});
                    setUserList(res.data.users)
                }catch(err){
                    setUserList([])
                    console.log(err);
                }
            }

            readUser();
            
        },[show,searchString]
    )

    const onSearchChange =(event)=>{
        setSearchString(event.target.value)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            fullscreen
            className='Admin_CreatePanchayath_SelectPresident'
        >
            <Modal.Header closeButton>
                <Modal.Title style={{ width: '100%' }}>
                    <div className='searchUserNameDiv'>
                        <PitInput placeholder='Search user' height='45px' onChange={onSearchChange} />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='listDiv'>
                    {userList.map(
                        (user) => {
                            return <PresidentTemplate selectedPresident={selectedPresident} key={user._id} user={user} onButtonClick={onSet} onUnsetButtonClick={onUnsetButtonClick}/>
                        }
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}