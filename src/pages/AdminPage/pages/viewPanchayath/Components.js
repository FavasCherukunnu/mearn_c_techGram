import React from 'react'
import './Components.css'
export function PanchayathListTemplate(props) {
    const panchayath = props.panchayath
    return (
        <div className='viewPanchayath_PanchayathListTemplate_outerDiv' onClick={() => { props.onClick(panchayath._id) }}>
            <table className='viewPanchayath_PanchayathListTemplate_table'>
                <tbody>
                    <tr>
                        <td className='title' colSpan={3}>{`${props.index + 1}. ${panchayath.title}`}</td>
                    </tr>
                    <tr>
                        <td className='leftHeadCol'>District</td>
                        <td className='middlePoint'>:</td>
                        <td>{panchayath.district}</td>
                    </tr>
                    <tr>
                        <td className='leftHeadCol'>block</td>
                        <td className='middlePoint'>:</td>
                        <td>{panchayath.block}</td>
                    </tr>
                    <tr>
                        <td className='leftHeadCol'>panchayath</td>
                        <td className='middlePoint'>:</td>
                        <td>{panchayath.panchayath}</td>
                    </tr>
                    {
                        panchayath.president ?
                            <tr>
                                <td className='leftHeadCol'>President</td>
                                <td className='middlePoint'>:</td>
                                <td>{panchayath.president.fullName}</td>
                            </tr> : null
                    }
                </tbody>
            </table>
        </div>
    )
}
