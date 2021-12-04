import React, { useHook, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "../../utils.css";
import "./bookdetails.css";
import { projectFirestore } from "../../Firebase/config";
import BookFullDetails from "../../components/BookFullDetails/BookFullDetails";

function BookDetails(params) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("books")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          setBookDetails(doc.data());
        } else {
          setError("no such books");
        }
      });
  }, []);
  return (
    <>
      {bookDetails && (
        <BookFullDetails
          key={bookDetails.id}
          id={bookDetails.id}
          img={bookDetails.imageLinks.thumbnail}
          title={bookDetails.title}
          description={bookDetails.description}
        />
      )}
    </>
  );
}
export default BookDetails;
