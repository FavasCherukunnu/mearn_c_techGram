import React from 'react'
import './Component.css'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { RectangleButton } from '../../../../../../components/buttonRectangle'
import { AiOutlineSearch } from 'react-icons/ai'
import {BsStarFill} from'react-icons/bs'
import { IconButton } from '../../../../../../components/iconButton'

function buildStart() {

    let star = [];
    let x = 0
    for (x = 0; x < 5; x++) {
        star.push(<BsStarFill size={20} />)
    }

    return <div style={{display:'flex'}}>
            {star}
            </div>

}
function SurvayTemplate() {
    return (
        <tr className='user_panchayathInfo_survay_survayList_template'>
            <td className='first'>1</td>
            <td className='second'>othukkungal cherukunnu djlfs</td>
            <td className='third'>{buildStart()}</td>
            <td className='fourth'><RectangleButton width='60px' height='30px'><AiOutlineSearch /></RectangleButton></td>
        </tr>
    )
}


export default function TopBar() {
    return (
        <div className='user_panchayathInfo_survay_topBar_outerDiv'>
            <div className='title'>Ward Survay</div>
            <div className='user_panchayathInfo_survay_topBar_outerDiv_dropDownDiv'>
                <div className='dropdownText'>List Only </div>
                <DropdownButton variant="light" id="dropdown-basic-button" title="Rating">
                    <Dropdown.Item href="#/action-1">Rating</Dropdown.Item>
                    <Dropdown.Item href="#/acction-2">Complaint Solve Rate</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    )
}

export function SurvayList() {
    return (
        <div className='user_panchayathInfo_survay_survayList_outerDiv'>
            <table className='user_panchayathInfo_survay_survayList_table'>
                <tr>
                    <th className='h_first'>No</th>
                    <th className='h_second'>Ward Name</th>
                    <th className='h_third'>Rating</th>
                    <th className='h_fourth'></th>
                </tr>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
                <SurvayTemplate/>
            </table>
        </div>

    );
}
