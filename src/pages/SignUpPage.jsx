import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Container, Card, Image } from "react-bootstrap";

import { useFirebaseAuth } from '../hooks/useFirebaseAuth';

import { AuthForm } from '../component/AuthForm'
import { SignInWithGoogleorFacebook } from '../component/SignInWithGoogleorFacebook';

export const SignUpPage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user, signUpWithEmailAndPassword } = useFirebaseAuth();

  console.log(user);

  const navigate = useNavigate();
  const handleSignUpWithEmailAndPassword = async (e, email, password) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUpWithEmailAndPassword(email, password);
      navigate('/user-page');
    } catch (error) {
      setError(error.message);
      console.error('Error signing in with Email:', error);
    } finally {
      setLoading(false);
    }
  }

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
      <Card 
        style={{ 
          display: 'flex', 
          flexDirection: 'row-reverse', 
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', 
          backdropFilter: 'blur(3px)', 
        }}
      >
        <Card.Img  
          src="src\images\welcome-img.png" 
          className="w-50 img-fluid" 
          style={{ objectFit: 'cover', objectPosition: 'right'  }}
        />
        <Card.Body
          className="w-50 d-flex flex-column align-items-center justify-content-center" 
        >
          <Card.Title>Create account</Card.Title>
          <AuthForm
            title='SignUp'
            handleSubmit={handleSignUpWithEmailAndPassword}
            />   
          <SignInWithGoogleorFacebook />
          <Card.Text 
          className="mt-4" 
          >
          Already have an account? <Link to='/login'>LogIn</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>      
  )
}
