import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Todo from "./components/Todo";
import Todobody from "./components/Todobody";
import Todohead from "./components/Todohead";
import TodoList from "./components/TodoList";

function App() {
  //TodoList item 배열
  const [item, setItem] = useState([
    { id: 0, title: "Hello 1", done: true },
    { id: 1, title: "Hello 2", done: false },
  ]);

  const GlobalStyle = createGlobalStyle`
    body {
      background:#e9ecef;
    }
  `;

  return (
    <div className="App">
      <GlobalStyle />
      <Todobody>
        <Todohead />
        <TodoList item={item} />
      </Todobody>
    </div>
  );
}

export default App;
