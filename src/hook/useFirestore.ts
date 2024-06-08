// hooks/useFirestore.ts
import { useState, useEffect } from 'react';
import { collection, getDocs, query, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { db } from '@/db/DB';

const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<QuerySnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, collectionName));
        const querySnapshot = await getDocs(q);
        setDocs(querySnapshot);
      } catch (err :any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, [collectionName]);

  return { docs, loading, error };
};

export default useFirestore;
