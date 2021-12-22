import { useState } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

import styles from "./BookFullDetails.module.css";

function BookFullDetails({ id, img, title, description }) {
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("usersBookLists");

  const addBook = (title, img, description, id) => {
    const userId = user.uid;

    const bookToAdd = {
      title: title,
      img: img,
      description: description,
      bookId: id,
      userId: userId,
    };
    addDocument(bookToAdd);
  };
  return (
    <div className={styles.bookDetails}>
      <img src={img} className="card-img-top" alt="..." />
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      {user && (
        <button
          className="btn btn-primary"
          onClick={() => addBook(title, img, description, id)}
        >
          Add to Read list
        </button>
      )}
    </div>
  );
}
export default BookFullDetails;
