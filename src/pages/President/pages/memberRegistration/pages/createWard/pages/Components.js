import { RectangleButton } from '../../../../../../../components/buttonRectangle';
import './Components.css'

import React from 'react'

export function PresidentTemplate(props) {

    const {user,onButtonClick,selectedPresident,onUnsetButtonClick} = props;

    return (
        <div className='admin_createPanchayath_selectPresident_template'>
            <table className='table1234'>
                <tbody>
                    <tr>
                        <td className='head'>name</td>
                        <td className='body'>{user.fullName}</td>
                        <td rowSpan={3} className='buttnCol'>
                            {selectedPresident?selectedPresident._id!==user._id?
                            <RectangleButton height='35px' width='60px' onClick={()=>{onButtonClick(user)}}>Set</RectangleButton>:
                            <RectangleButton danger height='35px' width='65px' onClick={()=>{onUnsetButtonClick()}}>Unset</RectangleButton>:
                            <RectangleButton height='35px' width='60px' onClick={()=>{onButtonClick(user)}}>Set</RectangleButton>}
                        </td>
                    </tr>
                    <tr>
                        <td className='head'>Adhar No</td>
                        <td className='body'>{user.adharNo}</td>
                    </tr>
                    <tr>
                        <td className='head'>Ward No</td>
                        <td className='body'>{user.wardNo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export function PresidentSelectedSection(props) {

    const {user} = props;

    return (
        <div className='admin_createPanchayath_selectPresident_template'>
            <table className='table1234'>
                <tbody>
                    <tr>
                        <td className='head'>name</td>
                        <td className='body'>{user.fullName}</td>
                        
                    </tr>
                    <tr>
                        <td className='head'>Adhar No</td>
                        <td className='body'>{user.adharNo}</td>
                    </tr>
                    <tr>
                        <td className='head'>Ward No</td>
                        <td className='body'>{user.wardNo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}