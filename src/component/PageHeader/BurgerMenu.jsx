import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export const BurgerMenu = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>drivers</Nav.Link>
            <Nav.Link>transport</Nav.Link>
            <Nav.Link>trips</Nav.Link>
            <Nav.Link>users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container> 
  )
}
