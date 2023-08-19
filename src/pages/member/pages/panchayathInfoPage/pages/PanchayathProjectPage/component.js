import React, { useState } from 'react'
import { IconButton } from '../../../../../../components/iconButton'
import { BsStarFill } from 'react-icons/bs'
import { PlaneButton1 } from '../../../homePage/component'
import './component.css'
import { ShowProjectModel } from './Model'

function buildStart() {

    let star = [];
    let x = 0
    for (x = 0; x < 5; x++) {
        star.push(<IconButton ><BsStarFill size={20} /></IconButton>)
    }

    return <div style={{display:'flex'}}>
            {star}
            </div>

}

export function ProjectTemplate(props) {

    const [showProjectModel, setShowProjectModel] = useState(false);
    function showProjectModelfunc() {
      setShowProjectModel(true);
    }
    function closeProjectModelfunc() {
      setShowProjectModel(false)
    }
    return (
        <div className='user_userProjectPage_PostOuterDiv'>
            <div className='user_userProjectPage_PostInnerDiv'>
                <div className='user_userProjectPage_autherDiv'>
                    <p>{props.value.owner}</p>
                </div>
                <div className='user_userProjectPage_PostcontenDiv'>
                    {props.value.images ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className='user_userProjectPage_imageSpace'>
                            {props.value.images.map((image) => <div className='user_userProjectPage_imageDiv'><img src={image} alt="" className='user_userProjectPage_image' /></div>)}
                        </div>
                    </div> : <div></div>}
                    <p className='heading'>{props.value.title}</p>
                    <p className='body'>{props.value.description}</p>

                    <div className='user_userProjectPage_PostDateOuter'>
                        <table className='user_userProjectPage_dateTable'>
                            <tr>
                                <td className='first'>Start Date</td>
                                <td className='second'>{props.value.startDate}</td>
                            </tr>
                        </table>
                        <table className='user_userProjectPage_dateTable'>
                            <tr>
                                <td className='first'>End Date</td>
                                <td className='second'>{props.value.endDate}</td>
                            </tr>
                        </table>
                    </div>
                    <table className='user_userProjectPage_dateTable'>
                        <tr>
                            <td className='first'>Fund Passed</td>
                            <td className='second'>{props.value.fund}</td>
                        </tr>
                    </table>
                    <div className='intractionDiv'>
                        {buildStart()}
                        {/* <div style={{ width: '20px',}}></div> */}
                        <PlaneButton1 width={'100px'} onClick={showProjectModelfunc}>Reviewe</PlaneButton1>
                    </div>
                </div>
            </div>
            <ShowProjectModel show={showProjectModel} onClose={closeProjectModelfunc}/>
        </div>
    )
}


export function ProJectReviewTemplate() {
    return (
      <div className='user_homePage_ProJectReviewTemplate_template'>
        <div className='user_homePage_ProJectReviewTemplate_template_userName' >
          UserName
        </div>
        <div className='user_homePage_ProJectReviewTemplate_template_text'>
          here notification displays. notification is controlled by admin of institutions
          here notification displays. notification is controlled by admin of institutions
          here notification displays. notification is controlled by admin of institutions
          here notification displays. notification is controlled by admin of institutions
          here notification displays. notification is controlled by admin of institutions
          here notification displays. notification is controlled by admin of institutions
          user types Discussion here so that others can also participate. this is very important section in the world famouse hystory of the logica illussion. 
        </div>
        <div className='user_homePage_ProJectReviewTemplate_template_time'>
          00:00
        </div>
  
      </div>
    )
  }