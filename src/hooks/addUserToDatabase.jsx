import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addUserToDatabase = async ( email, name, phoneNumber, photoURL, role, userId ) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    try {
      await setDoc(docRef, {
        email,
        name,
        phoneNumber,
        photoURL,
        role,
        userId,
      });
      console.log("User added to database!");
    } catch (error) {
      console.error("Error adding user to database: ", error);
    }
  };
}