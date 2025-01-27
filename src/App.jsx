import { useState } from "react";
import TodoApp from "./components/TodoApp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <TodoApp />
      </div>
    </>
  );
}

export default App;
