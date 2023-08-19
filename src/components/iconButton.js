import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import './iconButton.css'

export function IconButton(props) {

  const [isHoverded, setHover] = useState(false);
  const style = { padding: '8px', backgroundImage: isHoverded ? 'radial-gradient(rgba(179, 179, 179, 0.222), rgba(211, 211, 209, 0.1), rgba(199, 199, 199, 0))' : '', "transition": "all 0.2s", "borderRadius": "50px", "display": "flex", "alignItems": "center", "justifyContent": "center" }

  function mouseOverEvent() {
    setHover(true);
  }

  function mouseLeaveEvent() {
    setHover(false);
  }
  return (<div onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} style={style} onClick={props.onClick} >
    {props.children}
  </div>);
}

export function IconButtonWIthText(props) {


  //icon - icon
  //text - text

  const [isHoverded, setHover] = useState(false);
  const style = {"borderRadius": "50px", "display": "flex", "alignItems": "center", "justifyContent": "center",paddingRight:'5px' }

  function mouseOverEvent() {
    setHover(true);
  }

  function mouseLeaveEvent() {
    setHover(false);
  }
  return (
    <div className="IconButtonWIthText_outerDiv" onClick={props.onClick} style={{height:props.height?props.height:'40px'}}>
      <div onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} style={style}>
        {props.icon}
      </div>
      <div className="textStyle">
        {props.text}
      </div>
    </div>
  );
}

export function IconButtonWIthText2(props) {


  //icon - icon
  //text - text

  const [isHoverded, setHover] = useState(false);
  const style = {"borderRadius": "50px", "display": "flex", "alignItems": "center", "justifyContent": "center",paddingRight:'5px' }

  function mouseOverEvent() {
    setHover(true);
  }

  function mouseLeaveEvent() {
    setHover(false);
  }
  return (
    <div className="IconButtonWIthText_outerDiv2" onClick={props.onClick} style={{height:props.height?props.height:'60px'}}>
      <div onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} style={style}>
        {props.icon}
      </div>
      <div className="textStyle">
        {props.text}
      </div>
    </div>
  );
}