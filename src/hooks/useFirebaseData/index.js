import { useEffect, useState } from "react";
import { getCollection } from "./helpers/getCollection";
import { getDocument } from "./helpers/getDocument";

export const useFirebaseData = (collectionName, documentId = null) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (documentId) {
          const doc = await getDocument(collectionName, documentId);
          setData(doc);
        } else {
          const collection = await getCollection(collectionName);
          setData(collection);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [collectionName, documentId]);

  return { loading, error, data };
};

