import React, { useContext, useEffect, useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import './UserPage.css'
import { PitInput } from '../../../../../../components/inputs'
import { BiSearch } from 'react-icons/bi'
import { IconButton } from '../../../../../../components/iconButton'
import { RectangleButton } from '../../../../../../components/buttonRectangle'
import ShowUsermodel from './Model'
import axios from 'axios'
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants'
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions'
import { UserContext } from '../../../../../user/userHomePage'
export function PresidentUsersPage() {

  const [showModel, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const userCont = useContext(UserContext);
  const user = userCont.user;
  const { wardOId } = user;
  const [users, setUsers] = useState([]);
  const [key,setKey] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null)

  function onViewPress(userId) {
    setSelectedUserId(userId);
    setShowModal(true);
  }

  function onCloseModel() {
    setShowModal(false);
  }
  console.log('rebuilding ');
  useEffect(
    () => {
      const loadUsers = async () => {
        try {

          if (wardOId) {
            const res = await axios.get(`${SERVER_ADDRESS}/user/getUsersUnApproved/${wardOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { isRejected: false, isApproved: true,key:key } })
            setUsers(res.data.users)
          }

        } catch (err) {
          console.log(err);
          const msg = checkLoggedIn(err);
          if (msg) {
            alert(msg)
          }
        }
      }
      loadUsers();

    }
    , [wardOId,key]
  )
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture isNotStyleChangable={true}>
        <div className='user_wardInfo_userPage_outerDiv'>
          <div style={{ height: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='title'>Ward Users List</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PitInput value={key} placeholder='Search for Users' height='40px' width='200px' onChange={(event)=>{setKey(event.target.value);console.log(key)}}></PitInput>
              <IconButton><BiSearch size={25} /></IconButton>
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
            <table className='user_wardInfo_userPage_table'>
              <tr className='title'>
                <td>Name</td>
                <td>Address</td>
                <td></td>
              </tr>
              {
                users.map(
                  (user) => {
                    return (
                      <tr>
                        <td className='first'>{user.fullName}</td>
                        <td className='second'>{user.address}</td>
                        <td className='third'><RectangleButton onClick={()=>onViewPress(user._id)} width='60px' height='30px'>View</RectangleButton></td>
                      </tr>
                    );
                  }
                )
              }

            </table>
          </div>
        </div>
        <ShowUsermodel selectedUserId={selectedUserId} show={showModel} onClose={onCloseModel} />
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
