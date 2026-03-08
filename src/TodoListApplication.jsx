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

// Below all functionality incluided

// import React, { useState } from "react";

// const TodoListApplication = () => {
//   const [input, setInput] = useState("");
//   const [todoList, setTodoList] = useState([]);
//   const [editId, setEditId] = useState(null);

//   const onAddItem = () => {
//     if (!input.trim()) return;

//     // Edit existing todo
//     if (editId) {
//       const updated = todoList.map((item) =>
//         item.id === editId ? { ...item, todo: input } : item
//       );
//       setTodoList(updated);
//       setEditId(null);
//     } else {
//       // Add new todo
//       const item = { id: Math.random(), todo: input, isCompleted: false };
//       setTodoList([...todoList, item]);
//     }

//     setInput("");
//   };

//   const handleComplete = (id) => {
//     const mapped = todoList.map((item) =>
//       item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
//     );
//     setTodoList(mapped);
//   };

//   const handleDelete = (id) => {
//     const filtered = todoList.filter((item) => item.id !== id);
//     setTodoList(filtered);
//   };

//   const handleEdit = (id, todo) => {
//     setInput(todo);
//     setEditId(id);
//   };

//   return (
//     <div>
//       <h1>Sri To do List App</h1>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <span> &nbsp; &nbsp;</span>

//       <button onClick={onAddItem}>
//         {editId ? "Update Item" : "Add Item"}
//       </button>

//       <div>
//         <span>Data List below</span>

//         <ul>
//           {todoList.map(({ id, todo, isCompleted }) => (
//             <li key={id} className={isCompleted ? "todo strike" : "todo"}>

//               <span onClick={() => handleComplete(id)}>
//                 {todo}
//               </span>

//               <button onClick={() => handleEdit(id, todo)}>
//                 Edit
//               </button>

//               <button onClick={() => handleDelete(id)}>
//                 Delete
//               </button>

//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TodoListApplication;
