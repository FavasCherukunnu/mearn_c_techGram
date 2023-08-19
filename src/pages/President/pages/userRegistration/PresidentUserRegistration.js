import React, { useContext, useEffect, useState } from 'react'
import { DivScrollableWithGeasture, DivScrollableWithGeastureP0, UnderNavigationOuterDiv } from '../../../../components/divisions'
import './PresidentUserRegistration.css'
import { SurvayList } from './component'
import { UserContext } from '../../../user/userHomePage'
import axios from 'axios'
import { SERVER_ADDRESS } from '../../../../staticFiles/constants'
import { checkLoggedIn, getUserToken } from '../../../../staticFiles/functions'
import { SimpleLoadingScreen } from '../../../../components/LoadingScreen'
export function PresidentUserRegistration() {
    const myContext = useContext(UserContext)
    const { wardOId } = myContext.user;
    const [ui, setUi] = useState(false);
    const [users, setUsers] = useState([]);
    const [isRejected,setIsRejected] = useState('false');
    const [isLoaded,setIsLoaded] = useState(false);

    const changeUi = () => {
        setUi(!ui);
    }

    const onChangeDropdown= (event)=>{
        setIsRejected(event.target.value);
    }

    useEffect(
        () => {

            const loadMembers = async () => {
                setIsLoaded(false);
                try {
                    const isApproved = isRejected===''?'':'false';
                    const res = await axios.get(`${SERVER_ADDRESS}/user/getUsersUnApproved/${wardOId}`, { headers: { 'u-auth-token': getUserToken() },params:{isRejected:isRejected,isApproved:isApproved,key:''} })
                    setUsers(res.data.users)
                } catch (err) {
                    console.log(err);
                    checkLoggedIn(err);
                }
                setIsLoaded(true);
            }
            loadMembers();

        }, [wardOId, ui,isRejected]
    )

    return (
        <UnderNavigationOuterDiv isNotStyleChangable height='100%'>
            <div className='member_userRegistrationPage_topHeadDiv'>
                <div className='title'>User Registration</div>
            <select className='admin_customDropDownToggle' onChange={onChangeDropdown}>
                <option key={1} value={'false'}>To Approve</option>
                <option key={2} value={'true'}>Rejected</option>
                <option key={3} value={''}>All</option>
            </select>
            </div>
            <DivScrollableWithGeastureP0 height='calc(100% - 80px)' isNotStyleChangable>
                {
                isLoaded?
                <SurvayList users={users} changeUi={changeUi} />:
                <SimpleLoadingScreen/>
                }
            </DivScrollableWithGeastureP0>
        </UnderNavigationOuterDiv>
    )
}
