import { BsStarFill } from "react-icons/bs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { AiOutlineSearch } from "react-icons/ai";
import './component.css'
import { UserRegistrationModel } from "./Model";
import { useState } from "react";

function SurvayTemplate(props) {
    const { user, index } = props;
    return (
        <tr className={`member_userRegistration_usersList_template ${user.isRejected===true?'reddishUser':user.isApproved===false?'pendingApprovelUser':''}`}>
            <td className='first'>{index}</td>
            <td className='second'>{user.fullName}</td>
            <td className='third'>
                <RectangleButton primary width='80px' height='30px' onClick={() => { props.onViewPress(user._id) }}>View</RectangleButton>
            </td>
            {/* <td className='fourth'>
                <RectangleButton width='50px' height='30px'><TiTick/></RectangleButton>
                <div className="middle"></div>
                <RectangleButton danger width='50px' height='30px'><TiTimes /></RectangleButton>
            </td> */}
        </tr>
    )
}


export function SurvayList(props) {
    const [showUserRegistrationModel, setshowUserRegistrationModel] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null)
    const { users } = props;
    function showUserRegistrationModelfn(userId) {
        setSelectedUserId(userId);
        setshowUserRegistrationModel(true)
    }

    function closeshowUserRegistrationModelfn() {
        setshowUserRegistrationModel(false);
    }

    return (
        <div className='member_userRegistration_usersList_outerDiv'>
            {

                users.length===0?
                <div style={{ height: '100%', width: '100%',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'40px',color:'gray',fontWeight:'700'}}>
                    No User Found
                </div>:
                <table className='member_userRegistration_usersList_table'>
                <tr>
                    <th className='h_first'>No</th>
                    <th className='h_second'>User Name</th>
                    <th className='h_third'></th>
                    {/* <th className='h_fourth'></th> */}
                </tr>
                {
                    users.map(
                        (user,index) => {
                            return <SurvayTemplate index={index+1} onViewPress={showUserRegistrationModelfn} user={user} />   
                        }
                    )

                }
            </table>
            }
            <UserRegistrationModel changeUi={props.changeUi} selectedUserId={selectedUserId} show={showUserRegistrationModel} onClose={closeshowUserRegistrationModelfn} />
        </div>

    );
}