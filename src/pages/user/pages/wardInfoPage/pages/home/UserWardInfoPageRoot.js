import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export function UserWardInfoPageRoot() {
    const navigate = useNavigate();
    useEffect(
        () => {
            navigate('Ward Info');
        }
    )
    return;
}
