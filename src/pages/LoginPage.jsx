import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Card } from "react-bootstrap";
import { Login } from '../component/Login';

export const LoginPage = () => {
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
        <Login />
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
