import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export function MemberPanchayathInfoPageRoot() {
    console.log('in the function');
    const navigate = useNavigate();
    useEffect(
        () => {
            navigate('Panchayath Info');
        }
    )
    return;
}
