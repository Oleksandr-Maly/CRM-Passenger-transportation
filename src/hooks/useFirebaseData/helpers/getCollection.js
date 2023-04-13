import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const getCollection = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);

  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return documents;
};
