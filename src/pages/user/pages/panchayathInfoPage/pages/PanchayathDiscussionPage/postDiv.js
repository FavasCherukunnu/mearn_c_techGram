import React from 'react'
import { PostTemplate } from '../../../homePage/component'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';

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
                        return <PostTemplate index={index} key={index} value={post} />
                    }
                )
            }
        </div>
    )
}

export const PostSection = React.memo(PostDiv);
