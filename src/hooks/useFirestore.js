import { useReducer, useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../Firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        isPending: true,
        document: null,
        success: false,
        error: null,
      };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = projectFirestore.collection(collection);

  //only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  //add a document
  const addDocument = async (document) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const addedDocument = await ref.add(document);
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  //delete a document
  const deleteDocument = async (documentId) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
