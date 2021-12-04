import { useState, useEffect } from "react";
import { projectAuth } from "../Firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [isCancelled, setIsCancelled] = useState();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);

      if (!response) {
        throw new Error("Could not sign up");
      }

      //add display name to user
      await response.user.updateProfile({ displayName });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: response.user });

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
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
