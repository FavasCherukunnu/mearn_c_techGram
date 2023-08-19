import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions';
import { ExpandListHeader } from './component';
import { ListGroup } from 'react-bootstrap';
import { ShowModal } from './Modal';

export function MemberPanchayathInstitutePage() {

  const [showModal,setShowModal] = useState(false);
  const [id,setId] = useState(null);
  
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <ExpandListHeader title='Agriculture'>
          <ListGroup>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Krishi Bhavan')}}>Krishi Bhavan</ListGroup.Item>
          </ListGroup>
        </ExpandListHeader>
        <ExpandListHeader title='AnimalHusbandry'>
          <ListGroup>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Veterinary Dispensary')}}>Veterinary Dispensary</ListGroup.Item>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('ICDP Sub Center')}}>ICDP Sub Center</ListGroup.Item>
          </ListGroup>
        </ExpandListHeader>
        <ExpandListHeader title='Fisheries'>
          <ListGroup>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Malsya Bahvan')}}>Malsya Bahvan</ListGroup.Item>
          </ListGroup>
        </ExpandListHeader>
        <ExpandListHeader title='Education'>
          <ListGroup>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('GMLP School')}}>GMLP School</ListGroup.Item>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('AUP School')}}>AUP School</ListGroup.Item>
          </ListGroup>       
           </ExpandListHeader>
        <ExpandListHeader title='Health'>
          <ListGroup>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Primary Health Center')}} >Primary Health Center</ListGroup.Item>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Family Health Center')}} >Family Health Center</ListGroup.Item>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Homio Dispensary')}} >Homio Dispensary</ListGroup.Item>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Ayurveda Dispensary')}} >Ayurveda Dispensary</ListGroup.Item>
          </ListGroup>       
           </ExpandListHeader>
        <ExpandListHeader title='Welfare'>
          <ListGroup>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('ICDS office')}} >ICDS office</ListGroup.Item>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Day Care Center')}} >Day Care Center</ListGroup.Item>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Anganavadies')}} >Anganavadies</ListGroup.Item>
          </ListGroup>        
          </ExpandListHeader>
        <ExpandListHeader title='Rural Development'>
          <ListGroup>
            <ListGroup.Item action variant="light" onClick={()=>{setShowModal(true);setId('Village Extension Office')}} >Village Extension Office</ListGroup.Item>
          </ListGroup>        
          </ExpandListHeader>
      </DivScrollableWithGeasture>
      <ShowModal id={id} show={showModal} onClose={()=>{setShowModal(false);setId(null)}}/>    {/*calling show model */}
    </UnderNavigationOuterDiv>
  )
}
