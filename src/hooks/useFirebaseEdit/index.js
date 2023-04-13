import { useState } from 'react';
import { doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { collection } from 'firebase/firestore';

export const useFirebaseEdit = (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addDocument = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = await addDoc(collection(db, collectionName, ), data);
      setLoading(false);
      return docRef.id;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const deleteDocument = async (documentId) => {
    setLoading(true);
    setError(null);
    try {
      await deleteDoc(doc(db, collectionName, documentId));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const updateDocument = async (documentId, data) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = doc(db, collectionName, user.id);
      await updateDoc(doc(docRef), data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    addDocument,
    deleteDocument,
    updateDocument,
  };
};
