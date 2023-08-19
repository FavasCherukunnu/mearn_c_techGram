import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Form from 'react-bootstrap/Form';
import { BiHomeAlt, BiSearch, BiExpand, BiListUl } from 'react-icons/bi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import './memberHomePage.css';
import { Col, Row, Stack } from "react-bootstrap";
import ProfileComponent from "./profile";
import SideNavigationBar from "./sideNavigationBar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { IconButton } from "../../components/iconButton";
import { MyContext, UserContext } from "../user/userHomePage";
import { SERVER_ADDRESS } from "../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../staticFiles/functions";

// export const MyContext = React.createContext();


export function MemberHomePage() {
    const navigate = useNavigate();
    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#E3F2DC"
    });
    const [expanded, setExpanded] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [topNavHide, setTopNavHide] = useState(false)
    const [userData, setUserData] = useState({
        fullName: 'Mohammed Favas P',
        address: '',
        phoneNo: '',
        email: '',
        fatherName: '',
        motherName: '',
        district: '',
        taluk: '',
        panchayath: '',
        wardNo: '',
        pinCode: '',
        dob: { day: '', month: '', year: '' },
        adharNo: '',
        dataTimeNow: '',
        image: { data: { data: '' }, contentType: '' }
    });
    const memoUserData = useMemo(() => userData,)
    function ReturnexpandedButton() {
        if (expanded) {
            return (<IconButton onClick={() => {
                setExpanded(!expanded)
            }}>
                <BiListUl size={25} />
            </IconButton>
            );
        } else {
            return (<IconButton onClick={() => {
                setExpanded(!expanded)
            }}>
                <BiExpand size={25} />
            </IconButton>
            );
        }
    }
    function handleWindowResize() {
        if (window.innerWidth < 800) {
            if (smallScreen === false)
                setExpanded(true);
            setSmallScreen(true)
        } else {
            setSmallScreen(false);
        }
    }

    const autoCloseSideNavOnClickInSmallScreen = () => {
        if (smallScreen) {
            console.log('smallScreen');
            setExpanded(true)
        }
    }

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    },)

    useEffect(
        () => {
            axios.get(`${SERVER_ADDRESS}/user/getUserInfo`, { headers: { 'u-auth-token': getUserToken() } }).then((res) => {
                // console.log(res.data.user.image.data.data);
                const dat = { ...res.data.user };
                setUserData(dat);
            }).catch((err) => {
                checkLoggedIn(err);
            })
        }, []
    )

    const scrollCallback = (isScrolled) => {
        // if(topNavHide!==isScrolled){
        setTopNavHide(isScrolled);
        // }

    }

    console.log('rebuilding userHomepage');

    return (

        <div className="navBarOuter">
            <MyContext.Provider value={scrollCallback}>
                <UserContext.Provider value={{ user: { userId: userData._id, panchayathOId: userData.panchayathOId, wardOId:userData.wardOId,wardNo:userData.wardNo} }}>
                    <div className="flex_container">
                        <div className="sideNavBarOuter" style={expanded ? { width: '0px', padding: '0px' } : { width: '250px', paddingRight: '10px' }}>
                            <Stack className='sideNavBar'>
                                <div className="sdeNavouterDiv">
                                    <ProfileComponent userData={memoUserData} />
                                    <SideNavigationBar onClick={autoCloseSideNavOnClickInSmallScreen} />
                                </div>
                            </Stack>
                        </div>
                        <div className="rightFlexItem"  >

                            <div className="userHomePage_outerDiv">


                                <div className="topNavBar" bg="light" expand="lg" style={{ height: topNavHide ? '0px' : '60px' }}>
                                    {/* <Navbar.Toggle aria-controls="sideNavBarScroll" /> */}

                                    {ReturnexpandedButton()}


                                    <Stack className="ms-auto" direction="horizontal" gap={3}>
                                        <Form >
                                            <Stack direction="horizontal" >
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Search"
                                                    aria-label="Search"
                                                    style={{ display: smallScreen ? 'none' : 'inline' }}
                                                />
                                                <IconButton>
                                                    <BiSearch size={25} />
                                                </IconButton>
                                            </Stack>
                                        </Form>
                                        <IconButton><MdOutlineNotificationsNone size={25} /></IconButton>
                                        <IconButton onClick={() => navigate('../home')}><BiHomeAlt size={25} /></IconButton>
                                    </Stack>
                                </div>
                                <div className="userHomePage_contentDiv" id="contentDiv" style={{ width: expanded ? 'calc(100vw - 20px)' : smallScreen ? 'calc(100vw - 20px)' : 'calc(100vw - 270px)', paddingTop: topNavHide ? '0px' : '10px', height: topNavHide ? 'calc(100vh - 20px)' : 'calc(100vh - 80px)', transition: 'all 0.2s' }}>
                                    <div className="userHomePage_contentInnerDiv">
                                        <Outlet />
                                    </div>
                                </div>
                            </div>

                            {/* <div style={{backgroundColor:'white',height:'500px'}}>

</div> */}
                        </div>
                    </div>
                </UserContext.Provider>
            </MyContext.Provider>
        </div>
    );

}