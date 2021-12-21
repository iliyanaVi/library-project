import Booklist from "./../components/Booklist/Booklist";
import { useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/config";

function Home() {
  const [books, setBooks] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setIsPending(true);

    const unsubscribe = projectFirestore.collection("books").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No books to load");
          setIsPending(false);
        } else {
          console.log(snapshot);
          let result = [];
          snapshot.docs.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
          });
          setBooks(result);
          console.log(result);
          setIsPending(false);
          console.log(result);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    //cleanup function to don't listen to changes when the component is unmounted
    return () => unsubscribe();
  }, []);
  return (
    <>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {books && <Booklist books={books} />}
    </>
  );
}
export default Home;
