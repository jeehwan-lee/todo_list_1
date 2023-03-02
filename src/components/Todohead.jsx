import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoheadBlock = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function Todohead(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(props.item);
  }, []);

  const undoneTodos = todos.filter((todo) => !todo.done);

  return (
    <TodoheadBlock>
      <h1>2023년 3월 1일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 {undoneTodos.length}개 남음</div>
    </TodoheadBlock>
  );
}

export default Todohead;
