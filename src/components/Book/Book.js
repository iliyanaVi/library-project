import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

import styles from "./Book.module.css";
import { Card, Button } from "react-bootstrap";

function Book({ id, img, title, description }) {
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("usersBookLists");

  const addBook = (id) => {
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
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img style={{ height: "65%" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </Card.Title>
        <Card.Text>
          {description.length > 40
            ? description.slice(0, 40) + "..."
            : description}
        </Card.Text>
        <div className={styles.btnWrapper}>
          {user && (
            <Button className="btn-add" onClick={() => addBook(id)}>
              +
            </Button>
          )}
          <Button variant="primary">
            <Link className={styles.link} to={`/bookDetails/${id}`}>
              More...
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Book;
