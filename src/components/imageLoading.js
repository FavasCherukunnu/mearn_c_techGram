import { useEffect, useState } from 'react';
import './imageLoading.css'
import axios from 'axios';
import { SERVER_ADDRESS } from '../staticFiles/constants';
import { SimpleLoadingScreen } from './LoadingScreen';
import { checkLoggedIn, getUserToken } from '../staticFiles/functions';
import { Modal } from 'react-bootstrap';

export function AvatarImage(props) {

    const [image, setImage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [errText,setErrText] = useState('');
    const loadImage = async () => {
        const imageElement = document.getElementById(props.dId ? props.dId : 'id123');
        imageElement.style.backgroundImage = ''
        setIsLoaded(false);
        try {
            // console.log((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})).data.image.image.data.data)
            let blob = new Blob([new Uint8Array((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`, { headers: { 'u-auth-token': getUserToken() } })).data.image.data.data)]);
            const imageUrl = URL.createObjectURL(blob);
            imageElement.style.backgroundImage = `url(${imageUrl})`
            imageElement.onload = () => URL.revokeObjectURL(imageUrl)
            setErrText('');
            // setImage(res.data.image.image)
        } catch (err) {
            console.log(err);
            let msg = checkLoggedIn(err);
            if(msg){
                setErrText(msg);
            }
        }
        setIsLoaded(true)
    }

    useEffect(
        () => {
            loadImage();
        }
        , [props.id]
    )

    return (
        <div key={props.dId} id={props.dId ? props.dId : 'id123'} className='component_AvatarImage_AvatarOuter' style={{
            minHeight: props.height, maxHeight: props.height, minWidth: props.width, maxWidth: props.width, height: props.height, width: props.width
        }}>{
                isLoaded === true ? errText?<div>{errText}</div>:null : <SimpleLoadingScreen />
            }

        </div>
    );
}

export function AvatarImage1(props) {

    const [image, setImage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [errText,setErrText] = useState('');
    const loadImage = async () => {
        const imageElement = document.getElementById(props.dId ? props.dId : 'id123');
        imageElement.style.backgroundImage = ''
        setIsLoaded(false);
        try {
            // console.log((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})).data.image.image.data.data)
            let blob = new Blob([new Uint8Array((await axios.get(`${SERVER_ADDRESS}/user/getImageById/${props.id}`, { headers: { 'u-auth-token': getUserToken() } })).data.image.data.data)]);
            const imageUrl = URL.createObjectURL(blob);
            imageElement.style.backgroundImage = `url(${imageUrl})`
            imageElement.onload = () => URL.revokeObjectURL(imageUrl)
            setErrText('');
            // setImage(res.data.image.image)
        } catch (err) {
            console.log(err);
            let msg = checkLoggedIn(err);
            if(msg){
                setErrText(msg);
            }
        }
        setIsLoaded(true)
    }

    useEffect(
        () => {
            loadImage();
        }
        , [props.id]
    )

    return (
        <div key={props.dId} id={props.dId ? props.dId : 'id123'} className='component_AvatarImage_AvatarOuter' style={{
            minHeight: props.height, maxHeight: props.height, minWidth: props.width, maxWidth: props.width, height: props.height, width: props.width
        }}>{
                isLoaded === true ? errText?<div>{errText}</div>:null : <SimpleLoadingScreen />
            }

        </div>
    );
}

export function AvatarImageCompressed(props) {

    const [image, setImage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [errText,setErrText] = useState('');
    const loadImage = async () => {
        const imageElement = document.getElementById(props.dId ? props.dId : 'id123');
        imageElement.style.backgroundImage = ''
        setIsLoaded(false);
        try {
            // console.log((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})).data.image.image.data.data)
            let blob = new Blob([new Uint8Array((await axios.get(`${SERVER_ADDRESS}/user/getCompressedProfileImageById/${props.id}`, { headers: { 'u-auth-token': getUserToken() } })).data.image.compressedData.data)]);
            const imageUrl = URL.createObjectURL(blob);
            imageElement.style.backgroundImage = `url(${imageUrl})`
            imageElement.onload = () => URL.revokeObjectURL(imageUrl)
            setErrText('');
            // setImage(res.data.image.image)
        } catch (err) {
            console.log(err);
            let msg = checkLoggedIn(err);
            if(msg){
                setErrText(msg);
            }
        }
        setIsLoaded(true)
    }

    useEffect(
        () => {
            loadImage();
        }
        , [props.id]
    )

    return (
        <div key={props.dId} id={props.dId ? props.dId : 'id123'} className='component_AvatarImage_AvatarImageCompressed' style={{
            minHeight: props.height, maxHeight: props.height, minWidth: props.width, maxWidth: props.width, height: props.height, width: props.width
        }}>{
                isLoaded === true ? errText?<div>{errText}</div>:null : <SimpleLoadingScreen />
            }

        </div>
    );
}


export function PostImage(props) {

    const [image, setImage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [showImageModel, setshowImageModel] = useState(false);
    const [errText,setErrText] = useState('');
    const loadImage = async () => {
        const imageElement = document.getElementById(props.dId ? props.dId : 'postImage123');
        imageElement.style.backgroundImage = ''
        setIsLoaded(false);
        try {
            // console.log((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})).data.image.image.data.data)
            let blob = new Blob([new Uint8Array((await axios.get(`${SERVER_ADDRESS}/user/getCompressedImageById/${props.id}`, { headers: { 'u-auth-token': getUserToken() } })).data.image.compressedData.data)]);
            const imageUrl = URL.createObjectURL(blob);
            imageElement.style.backgroundImage = `url(${imageUrl})`
            imageElement.onload = () => URL.revokeObjectURL(imageUrl)
            // setImage(res.data.image.image)
        } catch (err) {
            console.log(err);
            let msg = checkLoggedIn(err);
            if(msg){
                setErrText(msg);
            }
        }
        setIsLoaded(true)
    }

    useEffect(
        () => {
            loadImage();
        }
        , [props.id]
    )

    return (
        <>
            <div id={props.dId ? props.dId : 'postImage123'} className='user_postTemplate_imageDiv' onClick={() => { setshowImageModel(true) }}>
                {
                    isLoaded === true ? errText?<div>{errText}</div>:null  : <SimpleLoadingScreen />
                }
            </div>
            <ImageModel id={props.id} dId={props.dId} show={showImageModel} onClose={() => { setshowImageModel(false) }} />

        </>
    );
}

export function CarouselImage(props) {

    const [image, setImage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [showImageModel, setshowImageModel] = useState(false);
    const [errText,setErrText] = useState('');
    const loadImage = async () => {
        const imageElement = document.getElementById(props.dId ? props.dId : 'postImage123');
        imageElement.style.backgroundImage = ''
        setIsLoaded(false);
        try {
            // console.log((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})).data.image.image.data.data)
            let blob = new Blob([new Uint8Array((await axios.get(`${SERVER_ADDRESS}/user/getCompressedImageById/${props.id}`, { headers: { 'u-auth-token': getUserToken() } })).data.image.compressedData.data)]);
            const imageUrl = URL.createObjectURL(blob);
            imageElement.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(${imageUrl})`
            imageElement.onload = () => URL.revokeObjectURL(imageUrl)
            // setImage(res.data.image.image)
        } catch (err) {
            console.log(err);
            let msg = checkLoggedIn(err);
            if(msg){
                setErrText(msg);
            }
        }
        setIsLoaded(true)
    }

    useEffect(
        () => {
            loadImage();
        }
        , [props.id]
    )

    return (
        <>
            <div id={props.dId ? props.dId : 'postImage123'} className='user_CarouselImage_imageDiv' style={{height:props.height?props.height:'400px'}} onClick={() => { setshowImageModel(true) }}>
                {
                    isLoaded === true ? errText?<div>{errText}</div>:null  : <SimpleLoadingScreen />
                }
            </div>
            <ImageModel id={props.id} dId={props.dId} show={showImageModel} onClose={() => { setshowImageModel(false) }} />

        </>
    );
}

function ImageModel(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [blobUrl,setBlobUrl] = useState('');
    const [errText,setErrText] = useState('');

    let id = props.dId ? props.dId+'-img' : 'postImage123-img'
    // console.log(blobUrl);
    const loadImage = async () => {
        const imageElement = document.getElementById(id);
        setIsLoaded(false);
        if(blobUrl===''){
            try {
                // console.log((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})).data.image.image.data.data)
                let blob = new Blob([new Uint8Array((await axios.get(`${SERVER_ADDRESS}/user/getImageById/${props.id}`, { headers: { 'u-auth-token': getUserToken() } })).data.image.data.data)]);
                const imageUrl = URL.createObjectURL(blob);
                imageElement.style.backgroundImage = `url(${imageUrl})`
                setBlobUrl(imageUrl);
                imageElement.onload = () => URL.revokeObjectURL(imageUrl)
                // setImage(res.data.image.image)
            } catch (err) {
                console.log(err);
            }
        }else{
            imageElement.style.backgroundImage = `url(${blobUrl})`
        }
        setIsLoaded(true)
    }

    return (
        <Modal fullscreen onShow={loadImage} show={props.show} onHide={props.onClose} onExited={() => setIsLoaded(false)} aria-labelledby="example-custom-modal-styling-title" centered>
            <Modal.Header closeButton>
                <Modal.Title>Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='imageModel_outerDiv'>
                    <div className='imageModel_imageDiv' id={id}>
                        {
                            isLoaded===false?
                            <SimpleLoadingScreen/>:
                            null
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>)

}
// export function AvatarImage(props) {

//     const [image, setImage] = useState();
//     const [isLoaded,setIsLoaded] = useState(false);
//     const loadImage = async () => {
//         setIsLoaded(false);
//         try {
//             let res = await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})
//             setImage(res.data.image.image)
//         } catch (err) {
//             console.log(err);
//         }
//         setIsLoaded(true)
//     }

//     useEffect(
//         () => {
//             loadImage();
//         }
//         , [props.id]
//     )

//     return (
//         isLoaded===true?<div className='component_AvatarImage_AvatarOuter' style={{
//             backgroundImage: `url(data:${image?.contentType};base64,${btoa(new Uint8Array(new Uint8Array(image?.data.data)).reduce(function (data, byte) {
//                 return data + String.fromCharCode(byte);
//             }, ''))})`, minHeight: props.height, maxHeight: props.height, minWidth: props.width, maxWidth: props.width
//         }}>

//         </div>:
//         <div  style={{minHeight: props.height, maxHeight: props.height, minWidth: props.width, maxWidth: props.width,height:props.height,width:props.width}}>
//             <SimpleLoadingScreen/>
//         </div>
//         );
// }