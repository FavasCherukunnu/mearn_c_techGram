import { Outlet, useParams } from "react-router-dom";
import './inpsectPage.css'
import { MyContext, UserContext } from "../user/userHomePage";
import { useEffect } from "react";
import axios from "axios";
import { SERVER_ADDRESS } from "../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../staticFiles/functions";
import { useState } from "react";
export function InspectPageRoot() {
    const [userData, setUserData] = useState({})
    const [topNavHide, setTopNavHide] = useState(false)
    const [wardDetails,setWardDetails] = useState({})
    const { wardId } = useParams();
    useEffect(
        () => {
            const loadData = async () => {
                try {
                    const res = await axios.get(`${SERVER_ADDRESS}/user/getUserInfo`, { headers: { 'u-auth-token': getUserToken() } })
                    const res2 = await axios.get(`${SERVER_ADDRESS}/user/getWardById/${wardId}`, { headers: { 'u-auth-token': getUserToken() } })
                    const dat = { ...res.data.user };
                    setUserData(dat);
                    setWardDetails(res2.data.ward)
                } catch (err) {
                    checkLoggedIn(err);

                }
            }
            loadData();
        }, []
    )

    function scrollCallback(isScrolled) {
        // if(topNavHide!==isScrolled){
        setTopNavHide(isScrolled);
        // }

    }

    return (
        <MyContext.Provider value={scrollCallback}>
            <UserContext.Provider value={{ user: { userId: userData._id, panchayathOId: wardDetails.panchayathOId, wardOId: wardDetails.id, wardNo: wardDetails.wardNo,inspect:true} }}>
                <div className="InspectPage_contentDiv" id="contentDiv">
                    <div className="InspectPage_contentInnerDiv">
                        <Outlet />
                    </div>
                </div>
            </UserContext.Provider>
        </MyContext.Provider>
    )

}