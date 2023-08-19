import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export function MemberWardInfoPageRoot() {
    const navigate = useNavigate();
    useEffect(
        () => {
            navigate('Ward Info');
        }
    )
    return;
}
