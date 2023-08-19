import { NavLink, useNavigate } from 'react-router-dom'
import './component.css'
import React from 'react'

export function WardDetailsTable(props) {
  const { details } = props
  return (
    <table className='user_wardInfo_wardDetails_table'>
      {details?.title?
        <tr>
          <td className='first'>Title</td>
          <td className='second'>{details?.title}</td>
        </tr>:null
      }
      <tr>
        <td className='first'>Ward No</td>
        <td className='second'>{details?.wardNo}</td>
      </tr>
      <tr>
        <td className='first'>Panchayath</td>
        <td className='second'>{details?.panchayath?.panchayath}</td>
      </tr>
      <tr>
        <td className='first'>Block</td>
        <td className='second'>{details?.panchayath?.block}</td>
      </tr>
      <tr>
        <td className='first'>District</td>
        <td className='second'>{details?.panchayath?.district}</td>
      </tr>
      {/* <tr>
            <td className='first'>Voters Count</td>
            <td className='second'>{details.}</td>
        </tr>
        <tr>
            <td className='first'>Users Registered</td>
            <td className='second'>10</td>
        </tr> */}
    </table>
  )
}


export function NotificatonTemplate(props) {

  const navigate = useNavigate();

  const onClickFunction = () => {
    navigate('../Announcement', { state: { id: props.data._id } });
  }

  return (
    <div className='user_wardInfo_notfication_template'>
      <p className='linkDemoText' href='' onClick={onClickFunction}>
        {props.data?.title}
      </p>
    </div>
  )
}
