import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Container, Card } from "react-bootstrap";

import { AuthForm } from '../component/AuthForm';
import { SignInWithGoogleorFacebook } from '../component/SignInWithGoogleorFacebook';

import { useFirebaseAuth } from '../hooks/useFirebaseAuth';

export const LoginPage = () => {
  const [logedIn, setLogedIn] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signInWithEmailPassword } = useFirebaseAuth();

  const navigate = useNavigate();


  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    
    try {
      await signInWithEmailPassword(email, password);
      setLogedIn(true)
      navigate('/user-page');
    } catch (error) {
      console.log(
        'error code: ', error.code,
        'error message: ', error.message
      );
      setError(error.message);
    }
  }

  useEffect(() => {
    setLogedIn(true)
  }, [logedIn])
  
  return (
    <Container
      style={{
        minHeight: "100vh",
        padding: "0",
        width: '85%',
        margin: "auto",    
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <Card style={{display: 'flex', flexDirection: 'row-reverse', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
        <Card.Img  
          src="src\images\welcome-img.png" 
          className="w-50" 
          style={{ objectFit: 'cover', objectPosition: 'right' }}
        />

        <Card.Body
          className="w-50 d-flex flex-column align-items-center justify-content-center" 
        >
          <Card.Title>Hello!</Card.Title>
          <AuthForm
            title='Log In'
            handleSubmit={handleLogin}
          />  
         <SignInWithGoogleorFacebook />
          <Card.Text 
          className="mt-4" 
          >
          Do not have account? <Link to='/signup'>Sign Up</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container> 
  )
}
