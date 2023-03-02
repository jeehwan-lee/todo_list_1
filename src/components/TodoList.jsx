import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.item);
  }, [props.item]);

  const todoList = items.map((item) => <Todo item={item} key={item.id} />);

  return <TodoListBlock>{todoList}</TodoListBlock>;
}

export default TodoList;
