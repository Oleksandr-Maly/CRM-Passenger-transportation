import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/usersSlice';
import { UsersTable } from '../component/UsersTable';

import { Navbar, Nav, NavDropdown, Container, Button, Modal, ModalFooter } from 'react-bootstrap';

const UsersPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth]);

  const handleLogOut = () => {
    dispatch(removeUser()); 
    localStorage.removeItem('user');
  }
 
return (
<Container className='min-vh-100'>
  <Navbar bg="light" expand="full">
    <div className=" w-100 d-flex align-items-center justify-content-between">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex w-content-fit">
        <i class="bi bi-list"></i>
      </Navbar.Toggle>
      <Navbar.Brand>
        <i class="bi bi-bus-front" />
      </Navbar.Brand>

      <div>
        <Navbar.Text>{email}</Navbar.Text>
        <Button variant="light" onClick={handleLogOut}>
          <i class="bi bi-x-circle"></i>
        </Button>
      </div>
    </div>




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
  </Navbar>

  <Container 
    className="my-4 mx-auto d-flex flex-column"
    style={{
      minHeight: 'calc(100vh - 56px - 2.5rem - 2.5rem)',
      paddingBottom: '2.5rem'}}
  >
    <main className="flex-grow-1">
      <UsersTable />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sapiente, a quidem sunt eaque pariatur fuga, neque unde ut eum atque officia molestias, maxime nisi numquam quis tempora dicta. Praesentium aliquam asperiores alias at quaerat fuga aut ex! Ratione cum eligendi, quam recusandae nesciunt possimus odio ut nostrum dolore accusantium ea, non sapiente, nam laudantium deserunt quibusdam vitae molestias tenetur et aperiam aliquid! Exercitationem quidem itaque, debitis deserunt maxime commodi repudiandae asperiores nulla minus a saepe illum impedit, soluta suscipit ratione aut natus? Architecto, recusandae exercitationem laudantium odit vitae, voluptates consectetur, iusto beatae iure nemo  debitis  </p>
    </main>
  </Container>
  <ModalFooter 
    className="bg-light d-flex justify-content-center align-item-center text-center w-100" 
    style={{
      marginLeft: 0, 
      marginRight: 0
    }}
  >
  © 2023 Crm-pass-transport
  </ModalFooter>
</Container>

)}

export default UsersPage
