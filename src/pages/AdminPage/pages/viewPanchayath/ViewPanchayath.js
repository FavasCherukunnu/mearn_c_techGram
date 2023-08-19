import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_ADDRESS } from '../../../../staticFiles/constants'
import { useNavigate } from 'react-router-dom'
import { getAdminToken, isLogedIn } from '../../../../staticFiles/functions';
import './ViewPanchayath.css'
import { PanchayathListTemplate } from './Components';
import { PitInput } from '../../../../components/inputs';
import { BiSearch } from 'react-icons/bi'
import { IconButton } from '../../../../components/iconButton';
import data from '../../../../staticFiles/districts.json'
import { Button, Modal } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';

export function ViewPanchayath() {
    const navigate = useNavigate();
    const [loginFailedMessage, setLoginFailedMessage] = useState(null);
    const [panchayaths, setPanchayaths] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [districtId, setDistrictId] = useState('-1');
    const buildDistrict = () => {
        return data.districts.map(
            (element) => {
                return (<option key={element.id} value={element.id} >{element.name}</option>)
            }
        )
    }

    const onChangeDistrict = (event) => {
        setDistrictId(event.target.value)
    }

    async function onSearchButtonPress() {

        if (searchString !== '') {
            try {
                const token = localStorage.getItem('x-auth-token')
                let res = await axios.get(`${SERVER_ADDRESS}/admin/searchPanchayath`, { headers: { 'x-auth-token': token }, params: { key: searchString } })
                let panchayaths = res.data.panchayaths
                setPanchayaths(panchayaths)
            } catch (err) {
                console.log(err);
            }
        }
    }

    const onPanchaythTemplateClick = (id) => {
        navigate(`../editPanchayath/${id}`);
    }

    useEffect(
        () => {

            let searchPanchayath = async () => {

                const district = districtId === '-1' ? '' : data.districts[districtId - 1].name;
                try {
                    // const token = localStorage.getItem('x-auth-token')
                    // if (searchString === '') {
                    //     let res = await axios.get(`${SERVER_ADDRESS}/admin/listPanchayath`, { headers: { 'x-auth-token': token } });
                    //     setPanchayaths(res.data.panchayaths)

                    // } else {
                    //     let res = await axios.get(`${SERVER_ADDRESS}/admin/searchPanchayath`, { headers: { 'x-auth-token': token }, params: { key: searchString, district: district } })
                    //     let panchayaths = res.data.panchayaths
                    //     setPanchayaths(panchayaths)
                    // }
                    let res = await axios.get(`${SERVER_ADDRESS}/admin/searchPanchayath`, { headers: { 'x-auth-token': getAdminToken() }, params: { key: searchString, district: district } })
                    let panchayaths = res.data.panchayaths
                    setPanchayaths(panchayaths)
                }
                catch (err) {
                    console.log(err)
                    let loggedIn = isLogedIn(err);
                    if (loggedIn === true) {
                        setLoginFailedMessage(err.response.data.message);
                    } else if (loggedIn === null) {
                        setLoginFailedMessage('Somthing Went Wrong');
                    } else {
                        console.log('nont logged in');
                        navigate('/Admin')
                        //navigate to login page
                    }
                }
            }

            searchPanchayath();

        },
        [searchString, districtId]
    )

    return (
        <div className='viewPanchayath_rootDiv'>
            <div className='viewPanchayath_backButtonDiv'>
                <IconButton onClick={() => { navigate('../') }}><IoMdArrowRoundBack size={28} /></IconButton>
            </div>
            <div className='viewPanchayath_TopDiv'>
                <div className='viewPanchayath_searchDiv'>
                    <PitInput placeholder="Search your Panchayath" height='40px' onChange={(e) => { setSearchString(e.target.value) }} />
                    <IconButton onClick={onSearchButtonPress}><BiSearch size={20} /></IconButton>
                </div>
                <select className='admin_customDropDownToggle' onChange={onChangeDistrict}>
                    <option key={-1} value={-1}>All</option>
                    {buildDistrict()}
                </select>
            </div>
            <div className='viewPanchayath_listDiv'>
                {panchayaths.map(
                    (panchayath, index) => {
                        return <PanchayathListTemplate key={index} panchayath={panchayath} index={index} onClick={onPanchaythTemplateClick} />
                    }
                )}
            </div>

        </div>
    )
}
