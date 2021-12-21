import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "../../utils.css";
import "./bookdetails.css";
import { projectFirestore } from "../../Firebase/config";
import BookFullDetails from "../../components/BookFullDetails/BookFullDetails";
import { useAuthContext } from "../../hooks/useAuthContext";

function BookDetails(params) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);
  const { user } = useAuthContext();

  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("books")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          console.log(doc.data());
          setBookDetails(doc.data());
        } else {
          setIsPending(false);
          setError("no such book");
        }
      });
  }, []);

  return (
    <>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {bookDetails && (
        <BookFullDetails
          key={id}
          id={id}
          img={bookDetails.imageLinks.thumbnail}
          title={bookDetails.title}
          description={bookDetails.description}
        />
      )}
    </>
  );
}
export default BookDetails;
