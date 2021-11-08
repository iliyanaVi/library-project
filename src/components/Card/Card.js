import "./card.css";

function Card({ id, img, title, description }) {

    const addBook = (id) => {
        console.log(id);
        //подава се към базата данни и така се пазят любимите книги за дадения юзър
    }

    return (
        <div className="card margin-card" style={{ width: "13rem", height: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <button onClick={() => addBook(id)}>+</button>
        </div>
    )
}

export default Card;