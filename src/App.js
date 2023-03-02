import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Todo from "./components/Todo";
import Todobody from "./components/Todobody";
import TodoCreate from "./components/TodoCreate";
import Todohead from "./components/Todohead";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
body {
  background:#e9ecef;
}
`;

function App() {
  //TodoList item 배열
  const [items, setItems] = useState([
    { id: 0, title: "Hello 1", done: true },
    { id: 1, title: "Hello 2", done: false },
  ]);

  const addItem = (text) => {
    setItems([
      ...items,
      {
        id: items.length,
        title: text,
        done: false,
      },
    ]);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Todobody>
        <Todohead item={items} />
        <TodoList item={items} />
        <TodoCreate addItem={addItem} />
      </Todobody>
    </div>
  );
}

export default App;
