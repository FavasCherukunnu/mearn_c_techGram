import { Outlet, useParams } from "react-router-dom";
import './inpsectPage.css'
import { MyContext, UserContext } from "../user/userHomePage";
import { useEffect } from "react";
import axios from "axios";
import { SERVER_ADDRESS } from "../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../staticFiles/functions";
import { useState } from "react";
import { SimpleLoadingScreen } from "../../components/LoadingScreen";
export function InspectPanchayathPageRoot() {
    const [userData, setUserData] = useState({})
    const [topNavHide, setTopNavHide] = useState(false)
    const [panchayathDetails, setpanchayathDetails] = useState({})
    const { panchayathId } = useParams();
    const [isLoaded, setIsloaded] = useState(false);
    useEffect(
        () => {
            const loadData = async () => {
                setIsloaded(false);
                try {
                    const res = await axios.get(`${SERVER_ADDRESS}/user/getUserInfo`, { headers: { 'u-auth-token': getUserToken() } })
                    const res2 = await axios.get(`${SERVER_ADDRESS}/user/getPanchayathById/${panchayathId}`, { headers: { 'u-auth-token': getUserToken() } })
                    const dat = { ...res.data.user };
                    setUserData(dat);
                    setpanchayathDetails(res2.data.panchayath)
                    setIsloaded(true);
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
        <>
            {isLoaded === false
                ? <SimpleLoadingScreen />
                : <MyContext.Provider value={scrollCallback}>
                    <UserContext.Provider value={{ user: { userId: userData?._id, panchayathOId: panchayathDetails?.id, inspect: true } }}>
                        <div className="InspectPage_contentDiv" id="contentDiv">
                            <div className="InspectPage_contentInnerDiv">
                                <Outlet />
                            </div>
                        </div>
                    </UserContext.Provider>
                </MyContext.Provider>}
        </>
    )

}