import React from 'react'
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../userHomePage';
import { ComplaintTemplate2 } from '../../../wardInfoPage/pages/complaintPage/component';

function ComplaintDiv(props) {
    
    
    const [complaints, setcomplaints] = useState([]);
    const userCont = useContext(UserContext);
    const [isLoaded, setIsLoaded] = useState(false);
    const user = userCont.user;
    useEffect(
        () => {
            const onLoad = async () => {
                try {
                    if (user.panchayathOId) {
                        setIsLoaded(false)
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getComplaintsByPanchayath/${user.panchayathOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '',listValue:props.listValue } })
                        setcomplaints(res.data.announcements);
                        setIsLoaded(true);

                    }
                } catch (err) {
                    console.log(err);
                    const msg = checkLoggedIn(err);
                    if (msg) {
                        alert(msg)
                    }

                }
            }
            onLoad();
        }
        , [user.panchayathOId, props.updateUi,props.listValue]
    );

    return (
        <>

            {
                isLoaded ?
                    complaints.length === 0 ?
                        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: 'gray', fontWeight: '700' }}>
                            No Complaints Yet
                        </div> : <div style={{ height: '100%', width: '100%' }}>

                            {
                                complaints.map(
                                    (complaint,index) => {
                                        return <ComplaintTemplate2 index={index} value={complaint} />
                                    }
                                )
                            }
                        </div>
                    :
                    <SimpleLoadingScreen />
            }
        </>
    );
}


export const ComplaintSection = React.memo(ComplaintDiv)