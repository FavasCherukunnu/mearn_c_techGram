import React, { useState } from 'react'
import { AiOutlineAccountBook, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './component.css'
export function ExpandListHeader(props) {

    const [isClicked,setIsClicked] = useState(false);

  return (
    <div  style={{transition:isClicked?'max-height 0.6s':'max-height 0.05s',width:'100%',display:'flex',flexDirection:'column',maxHeight:isClicked?'1000px':'50px',overflow:'hidden'}}>
        <div onClick={()=>setIsClicked(!isClicked)} className='ExpandListHeaderinnerDiv' style={{width:'100%',minHeight:'50px',border: '1px solid #AFABAB',display:'flex',alignItems:'center'} }>
            {isClicked?<AiOutlineMinus size={24} color='white' style={{margin:'10px'}}/>:<AiOutlinePlus size={24} color='white' style={{margin:'10px'}}/>}
            <div style={{fontWeight:'600',color:'white',fontSize:'21px'}}>{props.title}</div>
        </div>
        {props.children}
    </div>
  )
}


export function PanchayathDetailsTable(props) {
  const {details} = props
  return (
    <table className='user_panchayathInfo_panchayath_table'>
        <tr>
            <td className='first'>Title</td>
            <td className='second'>{details?.title}</td>
        </tr>
        <tr>
            <td className='first'>panchayath</td>
            <td className='second'>{details?.panchayath}</td>
        </tr>
        <tr>
            <td className='first'>District</td>
            <td className='second'>{details?.district}</td>
        </tr>
        <tr>
            <td className='first'>block</td>
            <td className='second'>{details?.block}</td>
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