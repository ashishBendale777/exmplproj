import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'

const NavScroll = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to='home'>
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='contact'>
                                    Contact
                                </Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavScroll