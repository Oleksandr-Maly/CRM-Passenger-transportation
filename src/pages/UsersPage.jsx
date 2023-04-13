import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button, Modal, ModalFooter} from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store/slices/usersSlice';

import { UsersTable } from '../component/UsersTable';
import { AddUserForm } from '../component/AddUserForm'

import { useFirebaseData } from '../hooks/useFirebaseData/index';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import { useAuth } from '../hooks/useAuth';

export const UsersPage = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  
  const currentUser = useSelector(state => state.user);
  const currentUserId = currentUser.id;
  const { data, loading, error } = useFirebaseData('users', currentUserId);
  console.log('data', data)


  const { signOutFromFirebase } = useFirebaseAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleLogOut = async () => {
    try {
      await signOutFromFirebase();
      localStorage.removeItem('user');
      dispatch(removeUser()); 
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

return (
<>
  <header>
    <Navbar bg="light" expand="full">
      <div className=" w-100 d-flex align-items-center justify-content-between">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex w-content-fit">
          <i className="bi bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Brand >
          <i className="bi bi-bus-front" />
        </Navbar.Brand>

        <div className='d-flex align-items-center justify-content-center'>
          <Navbar.Text>{role}</Navbar.Text>
          <Navbar.Text>{email}</Navbar.Text>
          <Button variant="light" onClick={handleLogOut}>
            <i className="bi bi-x-circle"></i>
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
  </header>

  <main>
    <h1>UserPage</h1>
  </main>
  <ModalFooter 
    className="bg-light d-flex justify-content-center align-item-center text-center w-100" 
    style={{
      marginLeft: 0, 
      marginRight: 0
    }}
  >
  © 2023 Crm-pass-transport
  </ModalFooter>
  </>

)}
