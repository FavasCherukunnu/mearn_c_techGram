import React , { useLayoutEffect }from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiHomeAlt,BiSearch } from 'react-icons/bi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import './navbar.css';
import { Col, Row, Stack } from "react-bootstrap";
import './sideNavigation.css'



export default function TopNavBar(){

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#E3F2DC"
   });

  return (
    <div className="outerDiv">
      <Navbar className="topNavBar m-2" bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="sideNavBarScroll" />
        
          <Stack className="ms-auto" direction="horizontal" gap={3}>
          <Form >
            <Stack direction="horizontal">
              <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <BiSearch size={25}/>
            </Stack>
          </Form>
          <MdOutlineNotificationsNone size={25}/>
          <BiHomeAlt size={25}/>
          </Stack>
      </Container>
      </Navbar>
    </div>  
  );

}