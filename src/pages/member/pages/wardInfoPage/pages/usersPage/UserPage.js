import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import './UserPage.css'
import { PitInput } from '../../../../../../components/inputs'
import { BiSearch } from 'react-icons/bi'
import { IconButton } from '../../../../../../components/iconButton'
import { RectangleButton } from '../../../../../../components/buttonRectangle'
import ShowUsermodel from './Model'
export function MemberUsersPage() {
  
  const [showModel, setShowModal] = useState(false);

  function onViewPress(){

    setShowModal(true);

  }
  function onCloseModel(){
    setShowModal(false);
  }
  console.log('rebuilding ');
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture isNotStyleChangable={true}>
        <div className='user_wardInfo_userPage_outerDiv'>
          <div style={{height:'90px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className='title'>Ward Users List</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PitInput placeholder='Search for Users' height='40px' width='200px'></PitInput>
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
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays. this may be long address or short address. must be responsicve to handle multiple users and displays it very neatly</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
              <tr>
                <td className='first'>userName</td>
                <td className='second'>here address displays</td>
                <td className='third'><RectangleButton onClick={onViewPress} width='60px' height='30px'>View</RectangleButton></td>
              </tr>
            </table>
          </div>
        </div> 
        <ShowUsermodel show={showModel} onClose={onCloseModel}/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
