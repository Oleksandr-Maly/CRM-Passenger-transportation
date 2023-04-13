import React, { useState } from 'react';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';

export const TestLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInWithEmailPassword, signInWithGoogle, signInWithFacebook } = useFirebaseAuth();

  const handleSignInWithEmailPassword = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailPassword(email, password);
    } catch (error) {
      console.error('Error signing in with email and password:', error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSignInWithEmailPassword}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign in with email and password</button>
      </form>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      <button onClick={handleSignInWithFacebook}>Sign in with Facebook</button>
    </div>
  );
};
