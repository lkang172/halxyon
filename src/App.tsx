import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={onButtonClick}>Click me!</button>
      <p>Count: {count}</p>
    </>
  );
};

export default App;
