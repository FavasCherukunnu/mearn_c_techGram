

import { NavLink, Nav } from 'react-bootstrap';
import './homePage.css'
import { NavText, RectangleButton } from './components';


export function HomePage() {
    return (
        <div className="root base">
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <NavText link='/Admin'>Admin</NavText>
                </Nav.Item>
                <Nav.Item>
                    <NavText link=''>About</NavText>
                </Nav.Item>
            </Nav>
            <div className='centerContentOutDiv'>
                <div className='titleDiv'>
                    <p className='titleText'>Tech Gram</p>
                    <p className='titleSideText'>Know Your Village</p>
                </div>
                <div className='buttonDiv'>
                    <RectangleButton width='170px' path='/login'>LOGIN</RectangleButton>
                    <div style={{width:'30px',height:'30px'}}></div>
                    <RectangleButton width='170px' path='/signUp'>SIGNUP</RectangleButton>
                </div>
                
            </div>
            <div></div>
        </div>
    );
}