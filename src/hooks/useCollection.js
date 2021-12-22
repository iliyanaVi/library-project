import { useReducer, useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../Firebase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

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
  }, [collection]);

  return { documents, error };
};
