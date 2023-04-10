import React, { useRef } from 'react'
import { Form, Button, ButtonGroup } from 'react-bootstrap';

export const AuthForm = ({ 
  title, 
  handleSubmit,
  handleSignInWithGoogle,
  handleSignInWithFacebook 
}) => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  return (
    <Form onSubmit={(e) => handleSubmit(e, emailRef.current.value, passwordRef.current.value)}>
      <Form.Group id="email">
        <Form.Label className='mb-0'>Email</Form.Label>
        <Form.Control 
          placeholder="Enter email"
          type="email" 
          ref={emailRef}
          required 
        />
      </Form.Group>
      <Form.Group id="password">
        <Form.Label className='mb-0'>Password</Form.Label>
        <Form.Control 
          placeholder="Password"
          type="password" 
          ref={passwordRef}
          required 
        />
      </Form.Group>
      
      <Button 
        variant="light" 
        className="w-100 mt-2" 
        type="submit">
        {title}
      </Button>

      <div className='mt-4 w-100 d-flex flex-column justify-content-center align-items-center'>
      <p> or using: </p>
      <ButtonGroup className=' w-100 d-flex justify-content-center'>
        <Button 
          className='btn btn-light w-100' 
          onClick={handleSignInWithGoogle}
        >
          <i className="bi bi-google"></i>
        </Button>
        <Button 
          className='btn btn-light w-100'
          onClick={handleSignInWithFacebook}
        >
          <i className="bi bi-facebook"></i>
        </Button>
      </ButtonGroup>
    </div>
    </Form>
  )
}
