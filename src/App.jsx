import { useState } from "react";
import Todo from "./components/Todo";
import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";

function App() {
  return (
    <div className="App">
      <InlineComponent />
      <OutlineComponent />
    </div>
  );
}

export default App;
