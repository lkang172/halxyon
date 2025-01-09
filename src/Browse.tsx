import { useState } from "react";
import "./App.css";

const Browse: React.FC = () => {
  const [flip, setFlip] = useState(false);

  return (
    <>
      <div className={"card" + (flip ? " flip" : "")}>
        <div className="front" onClick={() => setFlip(!flip)}>
          <img src="" />
        </div>
        <div className="back" onClick={() => setFlip(!flip)}>
          <h1>Title</h1>
          <p>Author</p>
          <p>Date published</p>
          <p>Summary</p>
        </div>
      </div>
    </>
  );
};

export default Browse;
