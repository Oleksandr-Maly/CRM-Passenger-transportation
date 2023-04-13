import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document:', error);
    return null;
  }
};

export default addDocument;
