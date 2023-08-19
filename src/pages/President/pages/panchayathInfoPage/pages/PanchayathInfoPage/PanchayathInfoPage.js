import React, { useContext, useEffect, useMemo, useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions';
import { RoundedIconButton } from '../PanchayathComplaintPage/component';
import { AiOutlinePlus } from 'react-icons/ai';
import { ChatSection } from './ChatDiv';
// import { PanchayathDetailsSection } from './panchayathDetailsSection.js';
import { UserContext } from '../../../../../user/userHomePage';
import { ShowFormmodel } from './Model';
import { PanchayathDetailsSection } from '../../../../../user/pages/panchayathInfoPage/pages/PanchayathInfoPage/panchayathDetailsSection.js';
function PanchayathDetailsDiv(props) {
  const smallScreen = props.smallScreen;
  const user_wardInfo_RightOuter = { "paddingLeft": smallScreen ? '' : "15px", "width": smallScreen ? '100%' : "40%", "height": smallScreen ? 'calc(100% - 65px)' : "100%", "overflow": "hidden" }
  return (
    <div style={user_wardInfo_RightOuter}>
      {/* <div className='user_wardInfo_innerDiv2'> */}
      <DivScrollableWithGeasture id={'sample2'} isNotStyleChangable={true}>
        <PanchayathDetailsSection/>
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

function ChatDiv(props) {
  const smallScreen = props.smallScreen;
  const style = { "width": smallScreen ? '100%' : "60%", "height": smallScreen ? "calc(100% - 100px)" : "100%", "position": "relative", "overflow": "hidden" }
  const [showFormModel, setShowFormModel] = useState(false);
  const usercont = useContext(UserContext).user;
  const [updateUi,setUpdateUi] = useState(false);

  const user = useMemo(
    ()=> {return {...usercont}},
    [usercont.wardOId]
  )
  function showFormModelFun() {
    setShowFormModel(true);
    console.log(showFormModel);
  }
  function closeFormModelFun() {
    setShowFormModel(false)
  }

  return (
    <div style={style}>
      <DivScrollableWithGeasture isNotStyleChangable={false}>
        <ChatSection user={user} updateUi={updateUi}/>
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '20px', right: '15px',zIndex:5 }}><RoundedIconButton onClick={showFormModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowFormmodel show={showFormModel} onClose={closeFormModelFun} changeUi={()=>setUpdateUi(!updateUi)}/>
    </div>
  );
}

export function PresidentPanchayathInfoPageHome() {
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
      return (<PanchayathDetailsDiv smallScreen={smallScreen} />);
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
        {/* <PanchayathDetailsDiv smallScreen={smallScreen} /> */}

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
          <PanchayathDetailsDiv smallScreen={smallScreen} />
        </div>
      </UnderNavigationOuterDiv>
    )
  }
}
