import { useState, useEffect } from 'react';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  where,
  query,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../firebase';
import {
  getAuth,
  signOut,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useUserDispatcher } from '../useUserDispatch';

export const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const { dispatchUser } = useUserDispatcher();

  const signUpWithEmailAndPassword  = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  }

  const signInWithEmailPassword = (email, password) => {
    const userCredential = signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
  };

  const signOutFromFirebase = async () => {  
    return await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);

      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
          // Check if user with this email already exists
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('email', '==', user.email));
          const querySnapshot = await getDocs(q);

          if (querySnapshot.docs.length > 0) {
            console.log('User with this email already exists.');
            return;
          }

          // If user does not exist, create new user document
          try {
            await setDoc(userRef, {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              createdAt: new Date(),
              role: 'user',
            });
            console.log('User added to Firestore collection');
          } catch (error) {
            console.error('Error adding user to Firestore collection:', error);
          }
        }

        // Dispatch user data to store
        const userRole = docSnap.data().role || 'user';
        const userName = docSnap.data().displayName;
        dispatchUser(user.email, user.uid, user.accessToken, userRole, userName);
      }
    });

    return unsubscribe;
  }, [auth, dispatchUser]);

  return {
    user,
    signUpWithEmailAndPassword,
    signInWithEmailPassword,
    signInWithGoogle,
    signInWithFacebook,
    signOutFromFirebase,
  };
};
