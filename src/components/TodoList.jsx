import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

function TodoList(props) {
  const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
  `;

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.item);
  }, []);

  const todoItems = items.map((item, idx) => (
    <Todo item={item} key={item.id} />
  ));

  return <TodoListBlock>{todoItems}</TodoListBlock>;
}

export default TodoList;
