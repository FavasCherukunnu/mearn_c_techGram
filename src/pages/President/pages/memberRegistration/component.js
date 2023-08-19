import { BsStarFill } from "react-icons/bs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { AiOutlineSearch } from "react-icons/ai";
import './component.css'
import { UserRegistrationModel } from "./Model";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SurvayTemplate(props) {
    const navigate = useNavigate();
    const { ward } = props;

    return (
        <tr className='member_userRegistration_usersList_template'>
            <td className='first'>{ward.wardNo}</td>
            <td className='second'>{ward.member.fullName}</td>
            <td className='third'>
                <RectangleButton primary width='80px' height='30px' onClick={() => navigate(`editWard/${ward._id}`)}>Edit</RectangleButton>
                <div className="gap"></div>
                <RectangleButton primary width='80px' danger height='30px' onClick={()=>props.onDeleteButtonClick(ward)}>Delete</RectangleButton>
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
    const { wards } = props;
    function showUserRegistrationModelfn() {
        setshowUserRegistrationModel(true)
    }

    function closeshowUserRegistrationModelfn() {
        setshowUserRegistrationModel(false);
    }

    return (
        <div className='member_memberRegistration_usersList_outerDiv'>
            <table className='member_memberRegistration_usersList_table'>
                <tr>
                    <th className='h_first'>Ward No</th>
                    <th className='h_second'>Member Name</th>
                    <th className='h_third'></th>
                    {/* <th className='h_fourth'></th> */}
                </tr>
                {
                    wards.map(
                        (ward) => {
                            return <SurvayTemplate ward={ward} onDeleteButtonClick={props.onDeleteButtonClick} />
                        }
                    )
                }
            </table>
            <UserRegistrationModel show={showUserRegistrationModel} onClose={closeshowUserRegistrationModelfn} />
        </div>

    );
}