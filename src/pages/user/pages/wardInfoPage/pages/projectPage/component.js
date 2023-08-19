import React, { useState } from 'react'
import { IconButton } from '../../../../../../components/iconButton'
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import { PlaneButton1 } from '../../../homePage/component'
import './component.css'
import { ShowProjectModel } from './Model'
import { AvatarImageCompressed, PostImage } from '../../../../../../components/imageLoading'

function buildStart(count) {

    let star = [];
    let x = 0
    for (x = 0; x < 5; x++) {
        if (x < count) {
            if (x + 1 === count || x + 1 < count) {
                star.push(
                    <IconButton ><ImStarFull size={20} /></IconButton>
                )
            } else if (x + 0.5 <= count) {
                star.push(
                    <IconButton ><ImStarHalf size={20} /></IconButton>
                )
            } else {
                star.push(
                    <IconButton ><ImStarEmpty size={20} /></IconButton>
                )
            }

        } else {
            star.push(
                <IconButton ><ImStarEmpty size={20} /></IconButton>
            )
        }
    }

    return <div style={{ display: 'flex' }}>
        {star}
    </div>

}

export function ProjectTemplate2(props) {

    const [showProjectModel, setShowProjectModel] = useState(false);
    const [IsRating, setIsRating] = useState(false);
    function showProjectModelfunc() {
        setShowProjectModel(true);
    }
    function closeProjectModelfunc() {
        setShowProjectModel(false)
    }
    const onRatinChange = (rating) => {
        console.log(rating);
        setIsRating(rating)
    }
    const startDate = new Date(props.value.startDate);
    const endDate = props.value.endDate ? new Date(props.value.endDate) : null;
    const rating = IsRating === false ? Math.round(props.value.averageRating * 100) / 100 : Math.round(IsRating * 100) / 100;

    return (
        <div className='user_userProjectPage_PostOuterDiv'>
            <div className='user_userProjectPage_PostInnerDiv'>
                <div className='user_postTemplate_autherDiv1'>
                    <AvatarImageCompressed dId={`project${props.index}-${props.value.owner._id}`} id={props.value.owner._id} height='50px' width='50px' />
                    <div className='user_postTemplate_autherDiv_text'>{props.value.owner.fullName}</div>
                </div>
                <div className='user_userProjectPage_PostcontenDiv'>
                    {props.value.images ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className='user_userProjectPage_imageSpace'>
                            {props.value.images.map((image, index) => <PostImage key={index} id={image} dId={`proj-${image}`} />)}
                        </div>
                    </div> : <div></div>}
                    <p className='heading'>{props.value.title}</p>
                    <p className='body'>{props.value.description}</p>

                    <div className='user_userProjectPage_PostDateOuter'>
                        <table className='user_userProjectPage_dateTable'>
                            <tr>
                                <td className='first'>Start Date</td>
                                <td className='second'>{startDate.toLocaleDateString()}</td>
                            </tr>
                        </table>
                        <table className='user_userProjectPage_dateTable'>
                            <tr>
                                <td className='first'>End Date</td>
                                <td className='second'>{endDate?.toLocaleDateString()}</td>
                            </tr>
                        </table>
                    </div>
                    <table className='user_userProjectPage_dateTable'>
                        <tr>
                            <td className='first'>Fund Passed</td>
                            <td className='second'>{props.value.fundPassed}</td>
                        </tr>
                    </table>
                    <div className='intractionDiv1'>
                        <div>{rating}</div>
                        <div>{buildStart(rating)}</div>
                        {/* <div style={{ width: '20px',}}></div> */}
                        <PlaneButton1 width={'100px'} onClick={showProjectModelfunc}>Reviewe</PlaneButton1>
                    </div>
                </div>
            </div>
            <ShowProjectModel updateReview={onRatinChange} id={props.value._id} show={showProjectModel} onClose={closeProjectModelfunc} />
        </div>
    )
}


export function ProJectReviewTemplate(props) {
    const value = props.value;
    const date = new Date(value.dateOfRating);
    return (
        <div className='user_homePage_ProJectReviewTemplate_template'>
            <div className='user_homePage_ProJectReviewTemplate_template_userName' >
                {value.owner.fullName}
            </div>
            <div className='user_homePage_ProJectReviewTemplate_template_text'>
                {value.reviewText}
            </div>
            <div>
                {buildStart(value.rating)}
            </div>
            <div className='user_homePage_ProJectReviewTemplate_template_time'>
                {date.toLocaleString()}
            </div>


        </div>
    )
}