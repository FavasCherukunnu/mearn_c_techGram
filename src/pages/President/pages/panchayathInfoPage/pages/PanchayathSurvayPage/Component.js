import React, { useContext, useEffect, useState } from 'react'
import './Component.css'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { RectangleButton } from '../../../../../../components/buttonRectangle'
import { AiOutlineSearch } from 'react-icons/ai'
import {BsStarFill} from'react-icons/bs'
import { IconButton } from '../../../../../../components/iconButton'
import axios from 'axios'
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants'
import { getUserToken } from '../../../../../../staticFiles/functions'
import { UserContext } from '../../../../../user/userHomePage'
import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im'
import { Link } from 'react-router-dom'

export function buildStart(count) {

    let star = [];
    let x = 0
    for (x = 0; x < 5; x++) {
        if (x < count) {
            if(x+1<=count){
                star.push(
                    <ImStarFull size={20} />
                )
            }else if(x+0.5<=count){
                star.push(
                    <ImStarHalf size={20} />
                )
            }else{
                star.push(
                    <ImStarEmpty size={20} />
                )
            }
        } else {
            star.push(
                <ImStarEmpty size={20} />
            )
        }
    }

    return <div style={{ display: 'flex' }}>
        {star}
    </div>

}
export function SurvayTemplate(props) {
    const rating = props.sortValue ==='1'?Math.round(props.data.averageRating*100)/100:Math.round(props.data.solveRate*100)/100;
    return (
        <tr className='user_panchayathInfo_survay_survayList_template'>
            <td className='first'>{props.index}</td>
            <td className='second'>{props.data.wardNo}</td>
            <td className='third'><div className='intra'><div>{rating}</div>{props.sortValue ==='1'?buildStart(rating):null}</div></td>
            <td className='fourth'><Link to={`/inspect/ward/${props.data._id}`} target="_blank" rel="noopener noreferrer"><RectangleButton width='60px' height='30px'><AiOutlineSearch /></RectangleButton></Link></td>
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

  const [wards, setWards] = useState([]);
  const userCont = useContext(UserContext);
  const user = userCont.user;

    useEffect(
        ()=>{
            const loadPanchayath = async ()=>{
                if(user.panchayathOId){
                    try{
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getAllWardByPanchayathOId/${user.panchayathOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: ''} });
                        setWards(res.data.wards);
    
                    }catch(err){
                        console.log(err);
                    }
                }
            }
            loadPanchayath();
        },[user.panchayathOId]
    )

    return (
        <div className='user_panchayathInfo_survay_survayList_outerDiv'>
            <table className='user_panchayathInfo_survay_survayList_table'>
                <tr>
                    <th className='h_first'>No</th>
                    <th className='h_second'>Ward No</th>
                    <th className='h_third'>Rating</th>
                    <th className='h_fourth'></th>
                </tr>
                
                {
                    wards.map(
                        (panchayath,index)=>{
                            return <SurvayTemplate data={panchayath} index={index+1}/>;
                        }
                    )
                }
            </table>
        </div>

    );
}
