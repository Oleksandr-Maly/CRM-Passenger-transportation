import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/usersSlice'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

import { AuthForm } from './AuthForm'
import Loader from './Loader';

export const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;

      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }));
      
      navigate('/user-page');
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        'error code: ', errorCode,
        'error message: ', errorMessage
      );
      setError(errorMessage);
    }
  }


  return loading ? (
    <Loader />
  ) : (
    <AuthForm 
      title='Log In'
      handleSubmit={handleLogin}
    />
  );
}