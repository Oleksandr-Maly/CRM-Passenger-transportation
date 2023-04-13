import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const deleteDocument = async (collectionName, documentId) => {
  const docRef = doc(db, collectionName, documentId);
  await deleteDoc(docRef);
};

export default deleteDocument;
