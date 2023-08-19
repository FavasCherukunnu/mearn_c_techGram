import React from "react";
import './component.css'

export function FormInput(props){
    //props
    //inputTile - tile of input
    //width
    //name
    //type
    //placeholder
    
    const inputStyle = {"width":'100%',"height":"34px","background":"#FFFFFF","boxShadow":"6px 4px 8px rgba(0, 0, 0, 0.07)","borderRadius":"4px","borderStyle":"none","fontSize":"large"}
    return(
        <div style={{paddingTop:'20px',width:props.width,paddingBottom:'5px'}}>
            <p className="inputTitleFont">{props.inputTitle}</p>
            <input style={inputStyle} type={props.type} onChange={props.onChange} value={props.value} name={props.name} placeholder={props.placeholder}/>
        </div>
    );
}