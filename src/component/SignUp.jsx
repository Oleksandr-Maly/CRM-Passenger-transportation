import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/usersSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { signInWithFacebook } from '../hooks/signInWithFacebook';
import { signInWithGoogle } from '../hooks/signInWithGoogle';

import { AuthForm } from '../component/AuthForm'

import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { createNewUserInDatabase } from '../hooks/createNewUserInDatabase';

export const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSignUp = async (e, email, password) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(db, "users", user.uid), {
        email,
        name: null,
        phoneNumber: null,
        photoURL: null,
        role: 'user',
        userId: user.uid,
      });
  
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }));
  
      navigate('/user-page');
  
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  
  const handleSignInWithFacebook = async () => {
    setLoading(true);
  
    try {
      const user = await signInWithFacebook();
      
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: user.displayName,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        role: 'user',
        userId: user.uid,
      });
  
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: credential.accessToken,
      }));
  
      navigate('/user-page');
  
    } catch (error) {
      setError('Could not sign in with Facebook. Please try another method.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const user = await signInWithGoogle();
      await createNewUserInDatabase(user);   
  
      const { email, uid, refreshToken } = user;

      dispatch(setUser({
        email, 
        id: uid, 
        token: refreshToken 
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
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <AuthForm
      title='SignUp'
      handleSubmit={handleSignUp}
      handleSignInWithGoogle={handleSignInWithGoogle}
      handleSignInWithFacebook={handleSignInWithFacebook}
    />    
  )
}
