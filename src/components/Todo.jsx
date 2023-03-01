import React, { useEffect, useState } from "react";

function Todo(props) {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(props.item);
  }, []);

  return (
    <div className="Todo">
      <input type="checkbox" id={item.id} name={item.id} checked={item.done} />
      <label id={item.id}>{item.title}</label>
    </div>
  );
}

export default Todo;
