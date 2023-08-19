import React, { useEffect, useState } from 'react'
// import './SelectPresidentPage.css'
import { FormInput } from '../component'
import { PresidentTemplate } from './Components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { SERVER_ADDRESS } from '../../../../../staticFiles/constants'
import { getAdminToken } from '../../../../../staticFiles/functions'
export function SelectPresidentPage() {

    const {panchayathId} = useParams();
    const [userList,setUserList]  = useState([]);
    useEffect(
        ()=>{

            const readUser = async ()=>{

                try{
                    let res = await axios.get(`${SERVER_ADDRESS}/admin/getUsersBasedOnPachayathId/${panchayathId}`,{headers:{'x-auth-token':getAdminToken()}});
                    setUserList(res.data.users)
                }catch(err){
                    setUserList([])
                    console.log(err);
                }

            }
            readUser();

        },[]
    )

    

    return (
        <div className='Admin_CreatePanchayath_SelectPresident'>
            <div className='contentDiv'>
                <div className='searchUserNameDiv'>
                    <FormInput placeholder='Search user' height='45px' />
                </div>
                <div className='listDiv'>
                    {userList.map(
                        (user)=>{
                            return <PresidentTemplate user={user}/>
                        }
                    )}
                </div>
            </div>
        </div>
    )
}
