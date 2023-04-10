import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const signInWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  const user = userCredential.user;

  return user
};