import React, { useState } from "react";

const TodoForm = ({ handleSubmit,theme,setTheme }) => {
  const [todoItem, setTodoItem] = useState("");
  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };
  // const handleSubmit = ()=>{
  //   setList([...list,todoItem]);
  // }
  //We can use the above funcn in App.js
  return (
    <div>
      {/*controlled input*/}
      <form  className="todo_form" action="" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(todoItem);
        setTodoItem("");
      }}>
        <input className= {theme==='light'?"light":"dark"}
          type="text"
          value={todoItem}
          onChange={(e) => handleChange(e)}
          placeholder="Create a new todo..."
        />
        <button
          type="submit"
          // onClick={() => {
          //   handleSubmit(todoItem);
          //   setTodoItem("");
          // }}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
