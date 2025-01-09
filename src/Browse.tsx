import { useState } from "react";
import "./App.css";
import { fetchFromApi } from "../Backend/Firebase/fetchGoogleBooks.js";

const Browse = async () => {
  const [flip, setFlip] = useState(false);
  const bookList = await fetchFromApi();
  console.log(bookList);

  return (
    <>
      <div className="container">
        <div
          className={`card ${flip ? "flip" : ""}`}
          onClick={() => setFlip(!flip)}
        >
          <div className="front">
            <p>*cover image below*</p>
            <img src="" />
          </div>
          <div className="back" onClick={() => setFlip(!flip)}>
            <h1>Title</h1>
            <p>Author</p>
            <p>Date published</p>
            <p>Summary</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
