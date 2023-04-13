import React, { useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Container, Button, Modal, ModalFooter} from 'react-bootstrap';

import { BurgerMenu } from './BurgerMenu';
import AuthUserInfo from './AuthUserInfo';

export const PageHeader = () => {

  return (
    <header >
    <Navbar bg="light" expand="full">
      <Container className="p-relative w-100 d-flex align-items-center justify-content-between">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex w-content-fit">
          <i className="bi bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Brand style={{  
          position: 'absolute',
          width: '20px',
          margin: '0 auto',
          top: '6px',
          right: '0',     
          left: '0',    
          display: 'flex',
          justifyContent: 'center',
          }}
        >
          <i className="bi bi-bus-front" />
        </Navbar.Brand>

        <AuthUserInfo />        
        <BurgerMenu />
      </Container>   
      
    </Navbar>

  </header>
  )
}
