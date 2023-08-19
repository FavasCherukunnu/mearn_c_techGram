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
    return (
        <div className='user_GramSabhaTemplate_outerDiv'>
            <div className='user_GramSabhaTemplate_innerDiv'>
                <div className='user_GramSabhaTemplate_autherDiv'>
                    <p>{props.value.owner}</p>
                </div>
                <div className='user_GramSabhaTemplate_contenDiv'>
                    <div className="user_GramSabhaTemplate_Decisions">
                        <p style={{ fontWeight: '600', fontSize: '25px' }}>Decistions</p>
                        <div style={{ overflowY: 'auto', maxHeight: '500px' }}>
                            <div >
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
                                <BorderedDiv>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, enim quis semper iaculis, enim libero ultricies sapien, eget varius risus dolor sit amet mauris. Maecenas semper, quam in iaculis scelerisque, est urna varius sapien, quis ullamcorper neque mauris sed eros. Praesent sit amet luctus mauris. Nullam tincidunt, risus quis semper ultricies, lacus lectus luctus mauris, ut scelerisque neque lectus eget mauris.</BorderedDiv>
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
                                        <td className="first">Charman</td>
                                        <td className="Second">president name </td>
                                    </tr>
                                    <tr>
                                        <td className="first">Convener</td>
                                        <td className="Second">Sideeque</td>
                                    </tr>
                                    <tr>
                                        <td className="first">Co-ordinator</td>
                                        <td className="Second">shivan</td>
                                    </tr>
                                    
                                    <tr>
                                        <td className="first">Date</td>
                                        <td className="Second">28-05-2023</td>
                                    </tr>

                                    <tr>
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
                                    </tr>
                                </table>
                            </div>
                        </BorderedDiv>
                    </div>
                </div>
            </div>
        </div>
    )
}