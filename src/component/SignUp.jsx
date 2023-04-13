import React, { useState } from 'react'
import { useFacebookAuth } from '../hooks/useFacebookAuth';
import { useGoogleAuth } from '../hooks/useGoogleAuth';
import { useSignUpWithEmailAndPassword } from '../hooks/useSignUpWithEmailAndPassword';

import { AuthForm } from '../component/AuthForm'
import { useNavigate } from 'react-router-dom';



export const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { signInWithFacebook } = useFacebookAuth();
  const { signInWithGoogle } = useGoogleAuth();
  const { signUpWithEmailAndPassword } = useSignUpWithEmailAndPassword();

  const handleSignUpWithEmailAndPassword = async (e, email, password) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUpWithEmailAndPassword(email, password);
      navigate('/user-page');
    } catch (error) {
      setError(error.message);
    } finally {   
      setLoading(false);
    }
  }
 
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
    }  
  };

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate('/user-page');
    } catch (error) {
      setError(error.message);
    } finally {   
      setLoading(false);
    }
  }

  return (
    <AuthForm
    title='SignUp'
    handleSubmit={handleSignUpWithEmailAndPassword}
    />   
  )
}
