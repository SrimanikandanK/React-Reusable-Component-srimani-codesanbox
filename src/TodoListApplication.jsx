import React, { useState } from "react";

const TodoListApplication = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onAddItem = () => {
    if (input.trim()) {
      const item = { id: Math.random(), todo: input, isCompleted: false };
      setTodoList([...todoList, item]);
      setInput("");
    }
  };
  const handleComplete = (key) => {
    const mapped = todoList.map((item) =>
      item.id === key ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodoList(mapped);
  };
  return (
    <div>
      <h1>Sri To do List App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <span> &nbsp; &nbsp;</span>
      <button onClick={onAddItem}>Add Item</button>
      <div>
        <span>Data List below</span>
        <ul>
          {todoList.map(({ id, todo, isCompleted }) => (
            <li
              key={id}
              onClick={() => handleComplete(id)}
              className={isCompleted ? "todo strike" : "todo"}
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoListApplication;
