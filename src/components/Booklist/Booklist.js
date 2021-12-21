import Book from "../Book/Book";
import styles from "./Booklist.module.css";
import { Container, CardGroup, Row, Card, Col } from "react-bootstrap";

function Booklist(props) {
  return (
    <div className={styles.bookList}>
      <div className={styles.mainCard}>
        <h3 className="container-fluid">
          Get million ideas for your next book to read.
        </h3>
        <h5 className="container-fluid">
          Check out other readers review and give yours! Put books in Favourites
          and many more.
        </h5>
      </div>
      <div style={{paddingTop:"170px"}}>
        <h3>Check out the latests books</h3>
      </div>
      <div className={`${styles.booksWrapper} container`}>
        {props.books.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              img={book.imageLinks.thumbnail}
              title={book.title}
              description={book.description}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Booklist;
