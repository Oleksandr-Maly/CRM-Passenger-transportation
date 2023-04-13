import React, { useRef } from 'react'
import { Form, Button, ButtonGroup } from 'react-bootstrap';

export const AuthForm = ({ 
  title, 
  buttonTitle,
  handleSubmit,
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

    </Form>
  )
}
