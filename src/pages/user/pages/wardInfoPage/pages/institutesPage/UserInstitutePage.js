import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ExpandListHeader } from './component'
import { ListGroup } from 'react-bootstrap'
import { ShowModal } from './Modal'
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen'
import { RoundedIconButton } from '../../../../../../components/PlaneButton1'
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions'
import axios from 'axios'
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../../userHomePage'

export function UserInstitutePage() {

  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);
  const [showAddInstituteModel, setShowAddInstituteModel] = useState(false);
  const userCont = useContext(UserContext);
  const user = userCont.user;
  const [isLoaded, setIsLoaded] = useState(false);
  const [insitutes, setInsitutes] = useState([]);
  const [updateUi, setUpdateUi] = useState(false);


  function showAddInstituteModelFun() {
    setShowAddInstituteModel(true);
  }
  function closeAddInstituteModelFun() {
    setShowAddInstituteModel(false);
  }

  useEffect(
    () => {
      const onLoad = async () => {
        if (user.wardOId) {
          try {
            if (user.wardOId) {
              setIsLoaded(false)
              const res = await axios.get(`${SERVER_ADDRESS}/user/getInstitutesByWard/${user.wardOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
              setInsitutes(res.data.institutes);
              setIsLoaded(true)
            }
          } catch (err) {
            console.log(err);
            const msg = checkLoggedIn(err);
            if (msg) {
              alert(msg)
            }

          }
        }
      }
      onLoad();
    }
    , [user.wardOId, updateUi]
  )

  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        {
          isLoaded ?
            <>
              <ExpandListHeader title='Agriculture'>
                <ListGroup>
                  {
                    insitutes.map(
                      (insitute) => {
                        if (insitute.catogery === 'Agriculture') {
                          return <ListGroup.Item action variant="light" onClick={() => { setShowModal(true); setId(insitute._id) }}>{insitute.title}</ListGroup.Item>
                        }
                      }
                    )
                  }
                </ListGroup>
              </ExpandListHeader>
              <ExpandListHeader title='AnimalHusbandry'>
                <ListGroup>
                  {
                    insitutes.map(
                      (insitute) => {
                        if (insitute.catogery === 'AnimalHusbandry') {
                          return <ListGroup.Item action variant="light" onClick={() => { setShowModal(true); setId(insitute._id) }}>{insitute.title}</ListGroup.Item>
                        }
                      }
                    )
                  }
                </ListGroup>
              </ExpandListHeader>
              <ExpandListHeader title='Fisheries'>
                <ListGroup>
                  {
                    insitutes.map(
                      (insitute) => {
                        if (insitute.catogery === 'Fisheries') {
                          return <ListGroup.Item action variant="light" onClick={() => { setShowModal(true); setId(insitute._id) }}>{insitute.title}</ListGroup.Item>
                        }
                      }
                    )
                  }
                </ListGroup>
              </ExpandListHeader>
              <ExpandListHeader title='Education'>
                <ListGroup>
                  {
                    insitutes.map(
                      (insitute) => {
                        if (insitute.catogery === 'Education') {
                          return <ListGroup.Item action variant="light" onClick={() => { setShowModal(true); setId(insitute._id) }}>{insitute.title}</ListGroup.Item>
                        }
                      }
                    )
                  }
                </ListGroup>
              </ExpandListHeader>
              <ExpandListHeader title='Health'>
                <ListGroup>
                  {
                    insitutes.map(
                      (insitute) => {
                        if (insitute.catogery === 'Health') {
                          return <ListGroup.Item action variant="light" onClick={() => { setShowModal(true); setId(insitute._id) }}>{insitute.title}</ListGroup.Item>
                        }
                      }
                    )
                  }
                </ListGroup>
              </ExpandListHeader>
              <ExpandListHeader title='Welfare'>
                <ListGroup>
                  {
                    insitutes.map(
                      (insitute) => {
                        if (insitute.catogery === 'Welfare') {
                          return <ListGroup.Item action variant="light" onClick={() => { setShowModal(true); setId(insitute._id) }}>{insitute.title}</ListGroup.Item>
                        }
                      }
                    )
                  }
                </ListGroup>
              </ExpandListHeader>
              <ExpandListHeader title='Rural Development'>
                <ListGroup>
                  {
                    insitutes.map(
                      (insitute) => {
                        if (insitute.catogery === 'Rural Development') {
                          return <ListGroup.Item action variant="light" onClick={() => { setShowModal(true); setId(insitute._id) }}>{insitute.title}</ListGroup.Item>
                        }
                      }
                    )
                  }
                </ListGroup>
              </ExpandListHeader>
            </> :
            <SimpleLoadingScreen />
        }
      </DivScrollableWithGeasture>
      <ShowModal id={id} show={showModal} onClose={() => { setShowModal(false); setId(null) }} />    {/*calling show model */}
    </UnderNavigationOuterDiv>
  )
}
