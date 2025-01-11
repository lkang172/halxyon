import { useState, useEffect } from "react";
import "./App.css";
import { fetchFromApi } from "../Backend/Firebase/fetchGoogleBooks.ts";

const Browse = () => {
  const [flip, setFlip] = useState(false);
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetchFromApi().then(setBooks);
  }, []);

  return (
    <>
      <div className="container">
        <div
          className={`card ${flip ? "flip" : ""}`}
          onClick={() => setFlip(!flip)}
        >
          <div className="front">
            <p>*cover image below*</p>
            <img src={books[0].image} />
          </div>
          <div className="back" onClick={() => setFlip(!flip)}>
            <h1>{books[0].title}</h1>
            <p>{books[0].authors[0]}</p>
            <p>{books[0].pageCount}</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;

/*
import { useState } from "react";
import "./App.css";
import { fetchFromApi } from "../Backend/Firebase/fetchGoogleBooks.ts";

const Browse = async () => {
  const [flip, setFlip] = useState(false);
  const bookList = await fetchFromApi();

  return (
    <>
      <div className="container">
        <div
          className={`card ${flip ? "flip" : ""}`}
          onClick={() => setFlip(!flip)}
        >
          <div className="front">
            <p>*cover image below*</p>
            <img src={bookList[0].image} />
          </div>
          <div className="back" onClick={() => setFlip(!flip)}>
            <h1>{bookList[0].title}</h1>
            <p>{bookList[0].author}</p>
            <p>{bookList[0].pageCount}</p>
            <p>Summary</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
*/
