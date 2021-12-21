import styles from "./BookFullDetails.module.css";
import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../Firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

function BookFullDetails({ id, img, title, description }) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [bookId, setBookId] = useState("");
  const [isBtnVisible,setIsBtnVisible] = useState(true);

  const { user } = useAuthContext();

  // const addBook = (id) => {
  //   console.log(id);
  //   setBookId(id);
  //   //подава се към базата данни и така се пазят любимите книги за дадения юзър
  //   addBookInFb();
  // };

  useEffect(() => {
    if (bookId && bookId !== "") {
      setIsPending(true);
      projectFirestore
        .collection("usersBookLists")
        //check must be made if the book is already added
        .add({
          bookId: bookId,
          userId:user.uid
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id, "user_id", user.uid);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  }, [bookId]);

  return (
    <div className={styles.bookDetails}>
      <img src={img} className="card-img-top" alt="..." />
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      {user && isBtnVisible && <button className="btn btn-primary" onClick={() => setBookId(id)}>
        Add to Read list
      </button>}
    </div>
  );
}
export default BookFullDetails;
