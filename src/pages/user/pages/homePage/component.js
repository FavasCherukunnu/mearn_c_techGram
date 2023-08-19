import './component.css'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { useContext, useEffect, useState } from 'react';
import { PlaneButton } from '../../../../components/planeButton';
import React from 'react'
import { Button } from 'react-bootstrap';
import { IconButton, IconButtonWIthText, IconButtonWIthText2 } from '../../../../components/iconButton';
import { ShowDiscussionmodel } from './Model';
import { AvatarImageCompressed, CarouselImage, PostImage } from '../../../../components/imageLoading';
import Carousel from 'react-bootstrap/Carousel';
import ShowMore from 'react-show-more-button/dist/module';
import { PlaneButton3 } from '../../../../components/planeButton3';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../userHomePage';
import { checkLoggedIn, getUserToken } from '../../../../staticFiles/functions';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../staticFiles/constants';
import { SimpleLoadingScreen } from '../../../../components/LoadingScreen';

export function RoundedIconButton(props) {
  return (
    <div {...props} className='RoundedIconBUtton_outer'>
      {props.children}
    </div>
  )
}
export function DiscussionTemplate(props) {
  const replay = props.value;
  const date = new Date(replay.createdAt);
  return (
    <div className='user_homePage_discussion_template'>
      <div className='user_homePage_discussion_template_userName' >
        {replay.owner.fullName}
      </div>
      <div className='user_homePage_discussion_template_text'>
        {replay.description}
      </div>
      <div className='user_homePage_discussion_template_time'>
        {date.toLocaleString()}
      </div>

    </div>
  )
}

export function PlaneButton1(props) {

  //props
  //width - width of button
  const [isHoverded, setHover] = useState(false);
  const buttonStyle = { style: { background: isHoverded === false ? '#ffffff' : 'rgba(232, 232, 232, 1)', padding: '10px', borderStyle: "none", minWidth: '100px', maxHeight: props.height ? props.height : '', "width": props.width, fontFamily: "'Alumni Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "21px", color: "#000000", textShadow: "6px 4px 8px rgba(0, 0, 0, 0.08)", lineHeight: '0.5', border: '1px solid rgba(0, 0, 0, 0.3)' } }

  function mouseOverEvent() {
    setHover(true);
  }

  function mouseLeaveEvent() {
    setHover(false);
  }

  return (
    <Button style={buttonStyle.style} onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} onClick={props.onClick}>{props.children}</Button>
  );
}


export function PostTemplate(props) {


  const [showDiscussionModel, setShowDiscussionModel] = useState(false);
  const userData = useContext(UserContext).user;
  function showDiscussionModelfunc() {
    setShowDiscussionModel(true);
  }
  function closeDiscussionModelfunc() {
    setShowDiscussionModel(false)
  }
  const post = props.value;
  const date = new Date(post.createdAt)
  const [likes, setLikes] = useState(post.likesCount);
  const [isLoading, setisLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(post.isLiked)

  const onLike = async () => {
    const dat = {
      userId: userData.userId,
      postId: post._id
    }
    try {
      setisLoading(true);
      const res = await axios.post(`${SERVER_ADDRESS}/user/likeDiscussionPost`, { data: dat }, { headers: { 'u-auth-token': getUserToken() } });
      setLikes(res.data.likes);
      setIsLiked(res.data.isLiked);
      setisLoading(false);
    } catch (err) {
      console.log(err);
      checkLoggedIn(err);
    }

  }

  const onDisLike = async () => {
    const dat = {
      userId: userData.userId,
      postId: post._id
    }
    try {
      setisLoading(true);
      const res = await axios.post(`${SERVER_ADDRESS}/user/DislikeDiscussionPost`, { data: dat }, { headers: { 'u-auth-token': getUserToken() } });
      setLikes(res.data.likes);
      setIsLiked(res.data.isLiked);
      setisLoading(false);


    } catch (err) {
      console.log(err);
      checkLoggedIn(err);
    }

  }

  return (
    <div className='user_postTemplate_outerDiv'>
      <div className='user_postTemplate_innerDiv'>
        <div className='user_postTemplate_autherDiv1'>
          <AvatarImageCompressed dId={`discussion${props.index}${post.owner._id}`} id={post.owner._id} height='50px' width='50px'/>
          <div className='user_postTemplate_autherDiv_text'>{post.owner.fullName}</div>
        </div>
        <div className='user_postTemplate_contenDiv'>
          {post.images.length > 0 ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className='user_postTemplate_imageSpace'>
              {post.images.map((id, index) => <PostImage key={index} id={id} dId={id} />)}
            </div>
          </div> : <div></div>}
          <p className='heading'>{post.title}</p>
          <p className='body'>{post.description}</p>
          <div className='botttt'>
            <div className='intractionDiv'>
              <div style={{ textAlign: 'center' }}>
                {
                  isLoading === false ?
                    isLiked === true
                      ?
                      <IconButton onClick={onDisLike} ><AiFillLike color='red' size={30} /></IconButton>
                      :
                      <IconButton onClick={onLike} ><AiOutlineLike size={30} /></IconButton>
                    : <SimpleLoadingScreen />

                }
                <p>{likes}</p>
              </div>
              <div style={{ width: '20px' }}></div>
              
              <PlaneButton1 height='50px' onClick={showDiscussionModelfunc}>Discussion</PlaneButton1>
            </div>
            <div>
              {date.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      <ShowDiscussionmodel inspect={props.inspect} value={props.value} show={showDiscussionModel} onClose={closeDiscussionModelfunc} />
    </div>
  )
}

export function PostTemplateWithCarousel(props) {

  const [showDiscussionModel, setShowDiscussionModel] = useState(false);
  const [isShrink, setisShrink] = useState(true);
  const post = props.value;
  const date = new Date(post.createdAt)
  const [likes, setLikes] = useState(post.likesCount)  
  const [isLoading, setisLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const userData = useContext(UserContext).user;
  const onLike = async () => {
    const dat = {
      userId: userData.userId,
      postId: post._id
    }
    try {
      setisLoading(true);
      const res = await axios.post(`${SERVER_ADDRESS}/user/likeDiscussionPost`, { data: dat }, { headers: { 'u-auth-token': getUserToken() } });
      setLikes(res.data.likes);
      setIsLiked(res.data.isLiked);
      setisLoading(false);
    } catch (err) {
      console.log(err);
      checkLoggedIn(err);
    }

  }

  const onDisLike = async () => {
    const dat = {
      userId: userData.userId,
      postId: post._id
    }
    try {
      setisLoading(true);
      const res = await axios.post(`${SERVER_ADDRESS}/user/DislikeDiscussionPost`, { data: dat }, { headers: { 'u-auth-token': getUserToken() } });
      setLikes(res.data.likes);
      setIsLiked(res.data.isLiked);
      setisLoading(false);


    } catch (err) {
      console.log(err);
      checkLoggedIn(err);
    }

  }
  function showDiscussionModelfunc() {
    setShowDiscussionModel(true);
  }
  function closeDiscussionModelfunc() {
    setShowDiscussionModel(false)
  }

  return (
    <div className='user_carosolPost_outerDiv' >
      <AvatarImageCompressed height='50px' width='50px' dId={`post-${props.index}${props.value.owner._id}`} id={props.value.owner._id}></AvatarImageCompressed>
      <div className='user_CarouselPost_OwnerName'>{props.value.owner.fullName}</div>
      <div className='user_CarouselPost_outerDiv'>
        <div className='user_CarouselPost_ImageInnerDiv'>
          <Carousel interval={null}>

            {post.images.map((id, index) =>
              <Carousel.Item  >
                <CarouselImage height={props.height} key={index} id={id} dId={id} />
                {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
              </Carousel.Item>
            )}

          </Carousel>
          <div className='user_CarouselPost_whiteBottomDiv' id={`f${post._id}`}>

          </div>
        </div>
        <div className='user_CarouselPost_contenDiv' >
          {/* {post.description} */}
          <ShowMore maxHeight={120} backgroundColor='#000' anchor={`#f${post._id}`} defaultAnchor={false} button={isShrink === true ? <PlaneButton3>Show More</PlaneButton3> : <PlaneButton3>Show Less</PlaneButton3>} onChange={(expanded) => { setisShrink(expanded) }}>
            <p>{post.description}</p>
          </ShowMore>
          <div className='intractionDiv'>
            <div style={{ textAlign: 'center' }}>
              {
                isLoading === false ?
                  isLiked === true
                    ?
                    <IconButton onClick={onDisLike} ><AiFillLike color='red' size={30} /></IconButton>
                    :
                    <IconButton onClick={onLike} ><AiOutlineLike size={30} /></IconButton>
                  : <SimpleLoadingScreen />

              }
              <p>{likes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

