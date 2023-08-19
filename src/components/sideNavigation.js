import Nav from 'react-bootstrap/Nav';
import './sideNavigation.css'
import { Navbar, Stack } from 'react-bootstrap';


export default function SideNavBar(){

    return (
        <div className='navBarOuter p-2'>
            <Stack className='sideNavBar'>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled className='mt-auto'>
                    Disabled
                </Nav.Link>
                </Nav>
            </Stack>
        </div>

      );

}