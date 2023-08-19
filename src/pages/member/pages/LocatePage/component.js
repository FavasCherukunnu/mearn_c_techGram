import { BsStarFill } from "react-icons/bs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { AiOutlineSearch } from "react-icons/ai";
import './component.css'

function buildStart() {

    let star = [];
    let x = 0
    for (x = 0; x < 5; x++) {
        star.push(<BsStarFill size={20} />)
    }

    return <div style={{display:'flex'}}>
            {star}
            </div>

}
function SurvayTemplate() {
    return (
        <tr className='user_survay_survayList_template'>
            <td className='first'>1</td>
            <td className='second'>othukkungal cherukunnu djlfs</td>
            <td className='third'>{buildStart()}</td>
            <td className='fourth'><RectangleButton width='60px' height='30px'><AiOutlineSearch /></RectangleButton></td>
        </tr>
    )
}


export function SurvayList() {
    return (
        <div className='user_survay_survayList_outerDiv'>
                <table className='user_survay_survayList_table'>
                    <tr>
                        <th className='h_first'>No</th>
                        <th className='h_second'>Panchayath Name</th>
                        <th className='h_third'>Rating</th>
                        <th className='h_fourth'></th>
                    </tr>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                    <SurvayTemplate/>
                </table>
        </div>

    );
}