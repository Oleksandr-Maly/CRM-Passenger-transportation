import React from 'react'
import { Navbar, Button, Container } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/usersSlice';

const AuthUserInfo = () => {
  const { role, name } = useAuth();
  console.log('name', name);
  const dispatch = useDispatch();
  const { signOutFromFirebase } = useFirebaseAuth();

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
    <div className='d-flex align-items-center justify-content-center'>
      <Navbar.Text className='mr-1'>
        {role}
      </Navbar.Text>
      <Navbar.Text className='mr-1'>
        {name}
      </Navbar.Text>
      <Button 
        variant="light" 
        className='p-0' 
        onClick={handleLogOut}
      >
        <i className="bi bi-x-circle" style={{width: '16px'}} />
      </Button>
  </div>
  )
}

export default AuthUserInfo
