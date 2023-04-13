import React, { useState } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'

import { useFirebaseData } from '../../hooks/useFirebaseData';

import { UsersTable } from '../UsersTable'
import { AddUserForm } from '../AddUserForm'

export const PageMain = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const { loading: usersLoading, error: usersError, data: users } = useFirebaseData("users");
  
  return (
    <Container 
      className="my-4 mx-auto d-flex flex-column min-vh-100"
      style={{
        minHeight: 'calc(100vh - 56px - 2.5rem - 2.5rem)',
        paddingBottom: '2.5rem'}}
    >
      <main className="flex-grow-1">
        <Button variant="primary" onClick={() => setShowAddUserModal(true)}>Add User</Button>
          <UsersTable 
            data={users}
            loading={usersLoading}
            error={usersError}
          />
        <Modal 
          show={showAddUserModal} 
          onHide={() => setShowAddUserModal(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header >
            <Modal.Title>Add User</Modal.Title>  
            <Button 
              variant="light" 
              onClick={() => setShowAddUserModal(false)}
            >
              <i className="bi bi-x"/>
            </Button>        
          </Modal.Header>      
            <Modal.Body >
              <AddUserForm setShowAddUserModal={setShowAddUserModal}/>
            </Modal.Body>
        </Modal>        
      </main>
    </Container>
  )
}
