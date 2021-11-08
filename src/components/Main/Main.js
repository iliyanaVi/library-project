import Card from "../Card/Card";

function Main(props) {
    let books = [
        {
            img: "https://placeimg.com/640/480/nature",
            title: "some title",
            description: "some description",
            id: 1
        },
        {
            img: "https://placeimg.com/640/480/any",
            title: "some title",
            description: "some description",
            id: 2
        },
        {
            img: "https://placeimg.com/640/480/any",
            title: "some title",
            description: "some description",
            id: 3
        }, {
            img: "https://placeimg.com/640/480/any",
            title: "some title",
            description: "some description",
            id: 4
        },
        {
            img: "https://placeimg.com/640/480/any",
            title: "some title",
            description: "some description",
            id: 5
        }
    ]
    return (
        <>
            <div className="container d-flex justify-content-evenly flex-wrap">
                {books.map((book) => {
                    return <Card key={book.id} id={book.id} img={book.img} title={book.title} description={book.description} />
                })}
            </div>
        </>
    )
}
export default Main;