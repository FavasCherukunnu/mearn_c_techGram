import React from 'react'
import { PostTemplate, RoundedIconButton } from '../../../homePage/component'
import { PlaneButton } from '../../../../../../components/planeButton'
import { AiOutlinePlus } from 'react-icons/ai'
import './WardInfoPageHome.css'
import { NotificatonTemplate, WardDetailsTable } from './component'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DivScrollableWithGeasture, DivScrollableWithGeasture2, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ChatSection } from './ChatDiv'
import { NotificationSection } from './NotificationDiv'
import { ShowFormmodel } from './Model'



function ChatDiv(props) {
  const smallScreen = props.smallScreen;
  const style = { "width": smallScreen ? '100%' : "60%", "height": smallScreen ? "calc(100% - 100px)" : "100%", "position": "relative", "overflow": "hidden" }
  const [showFormModel, setShowFormModel] = useState(false);

  function showFormModelFun() {
    setShowFormModel(true);
  }
  function closeFormModelFun() {
    setShowFormModel(false)
  }

  return (
    <div style={style}>
      <DivScrollableWithGeasture isNotStyleChangable={false}>
        <ChatSection />
      </DivScrollableWithGeasture>
      {/* <div className='user_home_postDiv'>
          
      </div> */}
      <div style={{ position: 'absolute', bottom: '20px', right: '15px' }}><RoundedIconButton onClick={showFormModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowFormmodel show={showFormModel} onClose={closeFormModelFun}/>
    </div>
  );
}

function NotificationDiv(props) {
  const smallScreen = props.smallScreen;
  const user_wardInfo_RightOuter = { "paddingLeft": smallScreen ? '' : "15px", "width": smallScreen ? '100%' : "40%", "height": smallScreen ? 'calc(100% - 65px)' : "100%", "overflow": "hidden" }
  return (
    <div style={user_wardInfo_RightOuter}>
      {/* <div className='user_wardInfo_innerDiv2'> */}
      <DivScrollableWithGeasture id={'sample2'} isNotStyleChangable={true}>
        <NotificationSection />
      </DivScrollableWithGeasture>
      {/* </div> */}
    </div>
  );
}


function TopNav(props) {

  let isSelected = false;

  if (props.val === props.setVal) {
    isSelected = true;
  }
  const user_info_topNav_content = { padding: '10px', "height": "50px", "width": "50%", "borderWidth": isSelected ? "1px 1.8px 0px 1px" : '', "borderStyle": isSelected ? "solid" : '', "borderColor": isSelected ? "rgba(0, 0, 0, 0.3)" : '', "borderRadius": "12px 12px 0px 0px", "backgroundColor": isSelected ? "rgb(255, 255, 255)" : '', fontFamily: 'Alumni Sans', fontWeight: isSelected ? '700' : '600', fontSize: '21px' }

  return (
    <div onClick={() => { props.onClick(props.val) }} style={user_info_topNav_content}>{props.children}</div>
  );
}


export function MemberWardInfoPageHome() {


  const [smallScreen, setSmallScreen] = useState(false);
  const style = { height: '100%', "width": "100%", "overflow": "hidden", "display": smallScreen ? ' ' : "flex" }
  const [val, SetVal] = useState(1)

  function handleWindowResize() {
    if (window.innerWidth < 1100) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false);
    }
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },)

  const click = (value) => {
    SetVal(value);
  }

  const render = () => {
    if (val === 1) {
      return (<NotificationDiv smallScreen={smallScreen} />);
    } else {
      return <ChatDiv smallScreen={smallScreen} />;
    }
  }

  if (smallScreen) {
    return (
      <div style={style}>
        <div className='user_info_topNav'>
          <TopNav onClick={click} setVal={val} val={1}>Details</TopNav>
          <TopNav onClick={click} setVal={val} val={2}>Gallery</TopNav>
        </div>
        {/* <NotificationDiv smallScreen={smallScreen} /> */}

        {
          render()
        }
      </div>

    );
  } else {
    return (
      <UnderNavigationOuterDiv>
        <div style={style}>
          <ChatDiv smallScreen={smallScreen} />
          <NotificationDiv smallScreen={smallScreen} />
        </div>
      </UnderNavigationOuterDiv>
    )
  }
}
