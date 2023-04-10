import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createNewUserInDatabase = async (user) => {
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    name: user.name || null,
    phoneNumber: null,
    photoURL: null,
    role: 'user',
    userId: user.uid,
  });
};
