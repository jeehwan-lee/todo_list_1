import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function Todo(props) {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  const deleteItem = () => {
    props.deleteItem(item.title);
  };

  const check = () => {
    props.check(item.title);
    console.log("heee");
  };

  return (
    <TodoItem>
      <CheckCircle done={item.done} onClick={check}>
        {item.done && <MdDone />}
      </CheckCircle>
      <Text done={item.done}>{item.title}</Text>
      <Remove onClick={deleteItem}>
        <MdDelete />
      </Remove>
    </TodoItem>
  );
}

export default Todo;
