import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';

import { useFirebaseAuth } from '../hooks/useFirebaseAuth';

export const SignInWithGoogleorFacebook = () => {
  const [isLogging, setIsLoggin] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { signInWithGoogle, signInWithFacebook } = useFirebaseAuth();


 
  const handleSignInWithFacebook = async (e) => {
    e.preventDefault();
    setLoading(true);    
    try {
      await signInWithFacebook();
      navigate('/user-page');
    } catch (error) {
      setError(error.message);
    }  finally {   
      setLoading(false);
      setIsLoggin(true);
    }  
  };

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithGoogle();
      navigate('/user-page');
    } catch (error) {
      console.log(error)
      setError(error.message);
    } finally {   
      setLoading(false);
    }
  }

  useEffect(() => {
    setIsLoggin(false)
  }, [isLogging])

  return (    
  <div className='mt-4 w-100 d-flex flex-column justify-content-center align-items-center'>
  <p> or using: </p>
  <ButtonGroup className=' w-100 d-flex justify-content-center'>
    <Button 
      className='btn btn-light w-100' 
      onClick={handleSignInWithGoogle}
    >
      <i className="bi bi-google"/>
    </Button>
    <Button 
      className='btn btn-light w-100'
      onClick={handleSignInWithFacebook}
    >
      <i className="bi bi-facebook"/>
    </Button>
  </ButtonGroup>
</div>
  )
}
