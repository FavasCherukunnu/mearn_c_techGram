import React, { useContext, useEffect, useState } from 'react'
import './Component.css'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { RectangleButton } from '../../../../../../components/buttonRectangle'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs'
import { IconButton } from '../../../../../../components/iconButton'
import { UserContext } from '../../../../userHomePage'
import axios from 'axios'
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants'
import { getUserToken } from '../../../../../../staticFiles/functions'
import { SurvayTemplate } from '../../../../../President/pages/panchayathInfoPage/pages/PanchayathSurvayPage/Component'

function buildStart() {

    let star = [];
    let x = 0
    for (x = 0; x < 5; x++) {
        star.push(<BsStarFill size={20} />)
    }

    return <div style={{ display: 'flex' }}>
        {star}
    </div>

}
// function SurvayTemplate() {
//     return (
//         <tr className='user_panchayathInfo_survay_survayList_template'>
//             <td className='first'>1</td>
//             <td className='second'>othukkungal cherukunnu djlfs</td>
//             <td className='third'>{buildStart()}</td>
//             <td className='fourth'><RectangleButton width='60px' height='30px'><AiOutlineSearch /></RectangleButton></td>
//         </tr>
//     )
// }


export  function TopBar(props) {
    return (
        <div className='user_panchayathInfo_survay_topBar_outerDiv'>
            <div className='title'>Ward Survay</div>
            <div className='user_panchayathInfo_survay_topBar_outerDiv_dropDownDiv'>
                <div className='dropdownText'>List Only </div>
                <select className='admin_customDropDownToggle' onChange={(event) => props.onSortChange(event.target.value)}>
                    <option key={1} value={1}>Rating</option>
                    <option key={2} value={2}>Complaint Solve Rate</option>
                </select>
            </div>
        </div>
    )
}

export function SurvayList(props) {
    const [wards, setWards] = useState([]);
    const userCont = useContext(UserContext);
    const user = userCont.user;

    useEffect(
        () => {
            const loadPanchayath = async () => {
                if (user.panchayathOId) {
                    try {
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getAllWardByPanchayathOId/${user.panchayathOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: props.sortValue } });
                        setWards(res.data.wards);

                    } catch (err) {
                        console.log(err);
                    }
                }
            }
            loadPanchayath();
        }, [user.panchayathOId,props.sortValue]
    )

    return (
        <div className='user_panchayathInfo_survay_survayList_outerDiv'>
            <table className='user_panchayathInfo_survay_survayList_table'>
                <tr>
                    <th className='h_first'>No</th>
                    <th className='h_second'>Ward No</th>
                    <th className='h_third'>{props.sortValue==='1'?'Rating':'Solve Rate'}</th>
                    <th className='h_fourth'></th>
                </tr>

                {
                    wards.map(
                        (panchayath, index) => {
                            return <SurvayTemplate sortValue={props.sortValue} data={panchayath} index={index + 1} />;
                        }
                    )
                }
            </table>
        </div>

    );
}
