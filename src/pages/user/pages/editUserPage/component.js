import React from "react";
import './component.css'
import { useFormContext } from "react-hook-form";
import _ from "lodash";

export function FormInput(props) {
    //props
    //inputTile - tile of input
    //width
    //name
    //type
    //placeholder
    const { register, formState: { errors } } = useFormContext();
    const inputStyle = { "width": '100%', "height": "34px", "background": "#FFFFFF", "boxShadow": "6px 4px 8px rgba(0, 0, 0, 0.07)", "borderRadius": "4px", "borderStyle": "none", "fontSize": "large" }
    // console.log(_.get(errors,props.name));
    return (
        <div style={{ paddingTop: '10px', width: props.width,}}>
            <p className="inputTitleFont">{props.inputTitle}</p>
            <input style={inputStyle} type={props.type} onChange={props.onChange} value={props.value} name={props.name} placeholder={props.placeholder} {...register(props.name,props.validation[props.name])} />
            <p className="user_signupPage_form_errorText">{_.get(errors,props.name)?.message}</p>
        </div>
    );
}