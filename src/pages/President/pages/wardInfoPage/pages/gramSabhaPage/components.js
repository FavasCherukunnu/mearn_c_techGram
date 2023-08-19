import { AiOutlineLike } from "react-icons/ai";
import { IconButton } from "../../../../../../components/iconButton";
import { PlaneButton1 } from "../../../../../../components/PlaneButton1";
import './components.css'


function BorderedDiv(props) {
    return (
        <div style={{ "background": "#FFFFFF", "border": "1px solid rgba(0, 0, 0, 0.3)", "borderRadius": "12px", padding: props.padding ? props.padding : '8px', width: props.width ? props.width : '100%', marginBottom: '12px', height: props.height ? props.height : '', overflow: 'hidden' }}>
            {props.children}
        </div>
    )
}


export function GramSabhaTemplate(props) {
    const gramSabha = props.value;
    const date = new Date(gramSabha.date);

    return (
        <div className='user_GramSabhaTemplate_outerDiv'>
            <div className='user_GramSabhaTemplate_innerDiv'>
                <div className='user_GramSabhaTemplate_autherDiv'>
                    <p>{gramSabha.owner.fullName}</p>
                </div>
                <div className='user_GramSabhaTemplate_contenDiv'>
                    <div className="user_GramSabhaTemplate_Decisions">
                        <p style={{ fontWeight: '600', fontSize: '25px' }}>Decistions</p>
                        <div style={{ overflowY: 'auto', maxHeight: '500px' }}>
                            <div >
                                {
                                    gramSabha.description.map(
                                        (description)=>{
                                            return <BorderedDiv>{description}</BorderedDiv>
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="user_GramSabhaTemplate_informations" >
                        <p className='GramSabhaTemplate_boldText'>Gram Sabha Informations</p>
                        <BorderedDiv >
                            <div style={{ textAlign: 'center', maxHeight: '500px', overflowY: 'auto' }}>
                                <table className="user_GramSabhaCommitte_table">
                                    <tr>
                                        <td style={{ textAlign: 'left' }} colSpan={2} className="GramSabhaTemplate_boldText">Committee</td>
                                    </tr>
                                    <tr>
                                        <td className="first">Chairman</td>
                                        <td className="Second">{gramSabha.chairman}</td>
                                    </tr>
                                    <tr>
                                        <td className="first">Convener</td>
                                        <td className="Second">{gramSabha.convener}</td>
                                    </tr>
                                    <tr>
                                        <td className="first">Co-ordinator</td>
                                        <td className="Second">{gramSabha.coOrdinator}</td>
                                    </tr>

                                    <tr>
                                        <td className="first">Date</td>
                                        <td className="Second">{date.toLocaleDateString()}</td>
                                    </tr>

                                    {/* <tr>
                                        <td rowSpan={20} className="first">Participation</td>
                                        <td className="Second">Sideeque</td>
                                    </tr>
                                    <tr>
                                        <td className="Second">Sideeque</td>
                                    </tr>
                                    <tr>
                                        <td className="Second">Sideeque</td>
                                    </tr>
                                    <tr>
                                        <td className="Second">Sideeque</td>
                                    </tr>
                                    <tr>
                                        <td className="Second">Sideeque</td>
                                    </tr> */}
                                </table>
                            </div>
                        </BorderedDiv>
                    </div>
                </div>
            </div>
        </div>
    )
}