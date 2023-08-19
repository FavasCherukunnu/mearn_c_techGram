import React from "react";
import './component.css'

export function FormInput(props){
    //props
    //inputTile - tile of input
    //width
    //name
    //type
    //placeholder
    
    const inputStyle = {"width":'100%',"height":props.height?props.height:'34px',"background":"#FFFFFF","boxShadow":"6px 4px 8px rgba(0, 0, 0, 0.07)","borderRadius":"4px","borderStyle":"none","fontSize":"large"}
    return(
        <div style={{paddingTop:'20px',width:props.width?props.width:'100%',paddingBottom:'5px'}}>
            {props.inputTitle?<p className="inputTitleFont">{props.inputTitle}</p>:<div></div>}
            <input style={inputStyle} type={props.type} onChange={props.onChange} value={props.value} name={props.name} placeholder={props.placeholder}/>
        </div>
    );
}