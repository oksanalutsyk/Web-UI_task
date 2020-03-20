import React from 'react';
import './app-header.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'



const AppHeader = () => (
    <header className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Main</Nav.Link>
                    <NavDropdown title="Matches" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/calendarOfMatches">Calendar of matches</NavDropdown.Item>
                        <NavDropdown.Item href="/nextGame">Next game</NavDropdown.Item>
                        <NavDropdown.Item href="/raitings">Raitings</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/news">News</Nav.Link>
                    <Nav.Link href="/fans">Fans</Nav.Link>
                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
        </Navbar>

    </header>
);

export default AppHeader;