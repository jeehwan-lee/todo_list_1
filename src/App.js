import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [item, setItem] = useState([
    { id: 0, title: "Hello 1", done: true },
    { id: 1, title: "Hello 2", done: true },
  ]);

  const todoItems = item.map((item, idx) => <Todo item={item} key={item.id} />);

  return <div className="App">{todoItems}</div>;
}

export default App;
