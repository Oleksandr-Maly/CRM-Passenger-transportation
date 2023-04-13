import React, { useState } from 'react';
import { Form, Button, Dropdown, DropdownButton, Alert } from 'react-bootstrap';
import { UserRole } from '../types/UserRole';
import { useFirebaseEdit } from '../hooks/useFirebaseEdit/index';

export const AddUserForm = ({setShowAddUserModal}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  const { loading, error, addDocument } = useFirebaseEdit('users');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name,
      email,
      phone,
      role,
    };

    await addDocument(user);
    setShowAddUserModal(false);

    setName('');
    setEmail('');
    setPhone('');
    setRole('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant='danger'>Error: {error.message}</Alert>}
      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required          
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control 
          placeholder='example@email.com' 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formRole">
        <Form.Label>Role:</Form.Label>
        <DropdownButton
          variant="light"
          style={{ width: '100%' }}
          className="w-100 mt-2"
          id="dropdown-role"
          title={role || 'Select a role'}
          onSelect={(e) => setRole(e)}
          required
        >
          {Object.values(UserRole).map((userRole) => (
            <Dropdown.Item 
              className="w-100"
              key={userRole} 
              eventKey={userRole}>
              {userRole}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Form.Group>

      <Button 
        variant="light" 
        className="w-100 mt-2"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add User'}
      </Button>
    </Form>
  );
};
