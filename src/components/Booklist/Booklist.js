import Book from "../Book/Book";
import "./Booklist.css";

function Booklist(props) {

  return (
    <div className="book-list">
      <div
        className="wrapper grid-wrapper"
        style={{ minHeight: "500px" }}
      >
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
