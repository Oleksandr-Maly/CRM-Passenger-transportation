import React, { useState } from 'react'
import { Form, Button, Alert, DropdownButton, Dropdown, } from 'react-bootstrap'
import { UserRole } from '../types/UserRole';
import { useFirebaseEdit } from '../hooks/useFirebaseEdit/index';
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export const EditUserForm = ({ onUpdateUser, user, setShowUserModal}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone || '');
  const [role, setRole] = useState(user.role);

  const { error, loading, deleteDocument, updateDocument } = useFirebaseEdit('users');
  const db = getFirestore();
  const docRef = doc(db, "users", user.id);
  const updatedUser = {
    name,
    email,
    phone,
    role,
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    console.log({...user})
    
    try {
      // await updateDocument(user.id, updatedUser);
      await updateDoc(docRef, updatedUser);
      console.log("A New Document Field has been added to an existing document")
      setName('');
      setEmail('');
      setPhone('');
      setRole('');
      onUpdateUser(updatedUser);
    } catch (error) {
      console.log(error);
      console.log(error.message)
    } finally {
      setShowUserModal(false);
    }
  };

  const handleDelete = () => {
    deleteDocument(user.id)
  };

  return (
    <Form onSubmit={handleSaveChanges}>
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
      <hr className="hr" />
      <Button 
        variant="light" 
        className="w-100 mt-2"
        type="submit"
      >
        Save Changes
      </Button>

      <Button 
        variant="danger" 
        className="w-100 mt-2"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Form>
  )
}
