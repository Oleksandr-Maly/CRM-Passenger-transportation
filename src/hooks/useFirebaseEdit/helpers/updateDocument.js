import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const updateDocument = async (collectionName, documentId, data) => {
  const docRef = doc(db, collectionName, documentId);
  await updateDoc(docRef, data);
};

export default updateDocument;
