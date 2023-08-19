import React from 'react'
import { ClipLoader } from "react-spinners";
import './LoadingScreen.css'
export function SimpleLoadingScreen() {
  return (
    <div className='loadingScreenSimpleOuterDiv'>
        <ClipLoader color="#81F14D" />
    </div>
  )
}
