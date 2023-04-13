import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const getDocument = async (collectionName, documentId) => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // Document data
    const data = docSnap.data();

    // Document ID
    const id = docSnap.id;

    return data;
  } else {
    console.log("No such document!");
  }
};
