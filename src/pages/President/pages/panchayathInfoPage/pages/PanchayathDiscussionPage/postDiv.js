import React, { useEffect, useState } from 'react'
// import { PostTemplate } from '../../../homePage/component'
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import { PostTemplate } from '../../../../../user/pages/homePage/component';

function PostDiv(props) {
    const [posts, setPosts] = useState([]);
    const user = props.user;
    useEffect(
        () => {
            const onLoad = async () => {
                try {
                    const res = await axios.get(`${SERVER_ADDRESS}/user/getPostsByPanchayath/${user.panchayathOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
                    setPosts(res.data.posts);
                } catch (err) {
                    console.log(err);
                    checkLoggedIn(err);
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
                        return <PostTemplate  index={index} key={index} value={post} />
                    }
                )
            }
        </div>
    )
}

export const PostSection = React.memo(PostDiv);
