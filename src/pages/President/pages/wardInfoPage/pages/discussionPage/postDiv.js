import React, { useEffect, useState } from 'react'
// import { PostTemplate } from '../../../homePage/component'
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import axios from 'axios';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';
import { PostTemplate } from '../../../../../user/pages/homePage/component';

function PostDiv(props) {
    const [posts, setPosts] = useState([]);
    const user = props.user;
    const [isLoaded, setIsLoaded] = useState(false);
    console.log('rebuilding chat div');

    useEffect(
        () => {
            const onLoad = async () => {
                try {
                    setIsLoaded(false)
                    const res = await axios.get(`${SERVER_ADDRESS}/user/getPostsByWard/${user.wardOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
                    setPosts(res.data.posts);
                    setIsLoaded(true)
                } catch (err) {
                    console.log(err);
                    checkLoggedIn(err);
                }
            }
            onLoad();
        }
        , [user.wardOId,props.updateUi]
    )
    return (
        <>
            {
                isLoaded?
                posts.length === 0 ?
                  <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: 'gray', fontWeight: '700' }}>
                    No Posts Yet
                  </div> :
                <div style={{ height: '100%', width: '100%' }}>
                    {
                        posts.map(
                            (post, index) => {
                                return <PostTemplate index={index} key={index} value={post} />
                            }
                        )
                    }
                </div>
                :
                <SimpleLoadingScreen/>
            }
        </>
    )
}

export const PostSection = React.memo(PostDiv);
