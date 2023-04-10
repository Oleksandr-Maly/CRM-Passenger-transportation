import {  getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

export const signInWithFacebook = async() => {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  return user;
}
