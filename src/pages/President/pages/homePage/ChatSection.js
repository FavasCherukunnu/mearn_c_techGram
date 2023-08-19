import React from "react";
import { PostTemplate } from "./component";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../../../staticFiles/functions";
import { useContext } from "react";
import { UserContext } from "../../../user/userHomePage";
import { PostTemplateWithCarousel } from "../../../user/pages/homePage/component";

function PostSection(props) {

    const [posts, setPosts] = useState([]);
    const usercont = useContext(UserContext)
    const user = usercont.user;
    useEffect(
        () => {
            const onLoad = async () => {
                if (user.wardOId) {
                    try {
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getGallaryPostsByWardAndPanchayath`, { headers: { 'u-auth-token': getUserToken() }, params: { wardOId: user.wardOId, panchayathOId: user.panchayathOId } })
                        setPosts(res.data.posts);
                    } catch (err) {
                        console.log(err);
                        checkLoggedIn(err);
                    }
                }
            }
            onLoad();
        }
        , [user.wardOId, props.updateUi]
    )

    return (
        <div style={{ height: '100%', width: '100%' }}>
            {
                posts.map(
                    (post, index) => {
                        return <PostTemplateWithCarousel index={index} height='500px' key={index} value={post} />
                    }
                )
            }
        </div>
    )
}

export default React.memo(PostSection);