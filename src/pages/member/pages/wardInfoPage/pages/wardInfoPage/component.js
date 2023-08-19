import './component.css'
import React from 'react'

export function WardDetailsTable() {
  return (
    <table className='user_wardInfo_wardDetails_table'>
        <tr>
            <td className='first'>Ward No</td>
            <td className='second'>10</td>
        </tr>
        <tr>
            <td className='first'>Voters Count</td>
            <td className='second'>10</td>
        </tr>
        <tr>
            <td className='first'>Users Registered</td>
            <td className='second'>10</td>
        </tr>
    </table>
  )
}


export function NotificatonTemplate() {
  return (
        <div className='user_wardInfo_notfication_template'>Notification Displays Here</div>
  )
}
