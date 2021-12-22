import { useRef, useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../Firebase/config";

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  
  const query = useRef(_query).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(result);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch data");
      }
    );
    return () => unsubscribe();
  }, [collection, query]);

  return { documents, error };
};
