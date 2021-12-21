import { useEffect, useState } from "react";
import { projectAuth } from "../Firebase/config";
import { useAuthContext } from "./useAuthContext";
import { Navigate } from "react-router-dom";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await projectAuth.signOut();

      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      console.log(err.message);

      if (!isCancelled) {
      setIsPending(false);
      setError(err.message);
      }
    }
    <Navigate to="/" />
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { logout, error, isPending };
};
