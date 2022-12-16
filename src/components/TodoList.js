import React from "react";
import { GiCrossMark } from "react-icons/gi";

const TodoList = ({ list, setList }) => {
  const handleDelete = (deleteItem) => {
    // console.log("abcd");
    let newList = [...list];
    newList = newList.filter((item) => item.todo !== deleteItem);
    console.log(newList);
    setList(newList);
  };
  return (
    <div className="main_list">
      <div className="todo_list">
        {/*<p className="inactive">
          Jog around the park 3x <GiCrossMark className="cross_icon" />
  </p>*/}

        {list.map((item) => (
          <div className="para_icon">
          <div
            key={item.todo}
            className={item.status === "inactive" ? "inactive todo_item" : "todo_item"}
          >
            <p>{item.todo}</p>
            <GiCrossMark
              className="cross_icon"
              onClick={() => handleDelete(item.todo)}
            />
          </div>
          </div>
        ))}
        {/* <p>Read for 1 hour <GiCrossMark className="cross_icon" /></p>
        <p>pick up groceries <GiCrossMark className="cross_icon" /></p>
  <p>Complete todo app on frontend mentor <GiCrossMark className="cross_icon" /></p>*/}
      </div>
      <div className="footer">
        <p>5 items left</p>
        <div>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p>Clear completed</p>
      </div>
    </div>
  );
};

export default TodoList;
