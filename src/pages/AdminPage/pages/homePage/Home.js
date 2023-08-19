import React from 'react'
import { RectangleButton } from '../../../../components/buttonRectangle'
import { useNavigate } from 'react-router-dom'
import './Home.css'
export function AdminHomePageRoot() {
    const navigate = useNavigate()

    function onClickCreatePanchayath() {
        navigate('createPanchayath')
    }
    function onClickViewPanchayath() {
        navigate('viewPanchayath')
    }
    return (
        <div className='AdminHomerootPage_outerDiv'>
            <RectangleButton width='200px' onClick={onClickCreatePanchayath}>Create Panchayath</RectangleButton>
            <div style={{ height: '10px' }}></div>
            <RectangleButton width='200px' onClick={onClickViewPanchayath}>View Panchayath</RectangleButton>
        </div>
    )
}
