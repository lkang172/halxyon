import { useState, useEffect } from "react";
import "./App.css";
import { fetchFromApi } from "../Backend/fetchGoogleBooks.ts";

const Browse = () => {
  const [flip, setFlip] = useState(false);
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetchFromApi().then(setBooks);
  }, []);

  const nextBook = () => {
    setFlip(false);
    books.length > 1 ? setBooks(books.slice(1)) : fetchFromApi().then(setBooks);
  };

  return (
    <>
      <div className="container">
        <div
          className={`card ${flip ? "flip" : ""}`}
          onClick={() => setFlip(!flip)}
        >
          {books.length > 0 && (
            <>
              <div className="front">
                <h1>{books[0].title}</h1>
                <img src={books[0].image} />
              </div>
              <div className="back" onClick={() => setFlip(!flip)}>
                <h1>{books[0].title}</h1>
                <p>Author: {books[0].authors[0]}</p>
                <p>Pages: {books[0].pageCount}</p>
                <p>{books[0].description}</p>
                <p></p>
              </div>
            </>
          )}
        </div>
        <center>
          <button id="next" onClick={nextBook}>
            Next
          </button>
          <p>hello world</p>
        </center>
      </div>
    </>
  );
};

export default Browse;
