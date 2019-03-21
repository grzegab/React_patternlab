import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Brand from 'react-bootstrap/NavbarBrand';
// import Toggle from 'react-bootstrap/NavbarToggle';
// import Collapse from 'react-bootstrap/NavbarCollapse';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Patternlab</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/nucleus">Nucleus</Nav.Link>
                        <Nav.Link href="/atoms">Atoms</Nav.Link>
                        <Nav.Link href="/molecules">Molecules</Nav.Link>
                        <Nav.Link href="/organisms">Organisms</Nav.Link>
                        <Nav.Link href="/page-1">Page 1</Nav.Link>
                        <Nav.Link href="/page-2">Page 2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}