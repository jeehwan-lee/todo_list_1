import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Todo from "./components/Todo";
import Todobody from "./components/Todobody";
import Todohead from "./components/Todohead";

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

  const todoItems = item.map((item, idx) => <Todo item={item} key={item.id} />);

  return (
    <div className="App">
      <GlobalStyle />
      <Todobody>
        <Todohead />
        {todoItems}
      </Todobody>
    </div>
  );
}

export default App;
