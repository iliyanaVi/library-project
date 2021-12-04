import Booklist from "./../components/Booklist/Booklist";
import { useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/config";

function Home() {
  const [books, setBooks] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const result1 = [
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "3",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "4",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "5",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "6",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "7",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "8",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "9",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "10",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
    {
      'authors': ["j.k sdfgsd"],
      'description': "some description",
      'id': "11",
      'imageLinks': {
        'smallThumbnail': "https://picsum.photos/200/300",
        'thumbnail': "https://picsum.photos/200/300",
      },
      'title': "some title",
    },
  ];
  useEffect(() => {
    setIsPending(true);

    const unsubscribe = projectFirestore.collection("books").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No books to load");
          setIsPending(false);
        } else {
          console.log(snapshot);
          let result = [];
          snapshot.docs.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
          });
          setBooks(result);
          console.log(result);
          setIsPending(false);
          console.log(result);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    //cleanup function to don't listen to changes when the component is unmounted
    return () => unsubscribe();
  }, []);
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {books && <Booklist books={books} />}
    </div>
  );
}
export default Home;
