import { Link } from "react-router-dom";

import "./Book.css";

function Book({ id, img, title, description }) {
  const addBook = (id) => {
    console.log(id);
    //подава се към базата данни и така се пазят любимите книги за дадения юзър
  };

  return (
    <div className="book-card card margin-card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="book-body card-body">
        <h5 className="card-title">
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </h5>
        <p className="d-inline-block text-truncate card-text">{description}</p>
      </div>
      <div className='btn-wrapper'>
        <button className="btn-add" onClick={() => addBook(id)}>
          +
        </button>
        <Link className="link" to={`/bookDetails/${id}`}>More...</Link>
      </div>
    </div>
  );
}

export default Book;
