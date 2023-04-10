import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Card, Image } from "react-bootstrap";
import { SignUp } from '../component/SignUp';

export const SignUpPage = () => {
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
          <SignUp />
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
