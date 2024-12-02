import { useCallback, useState } from "react";
import "./App.css";

import Posts from "./components/Posts";
import Counter from "./components/Counter";

function App() {
  const [showPosts, setShowPosts] = useState(true);

  const toggleButton = useCallback(() => setShowPosts((prev) => !prev), []);

  return (
    <>
      <Counter />
      <button onClick={toggleButton}>Toggle</button>
      {showPosts && <Posts />}
    </>
  );
}

export default App;
