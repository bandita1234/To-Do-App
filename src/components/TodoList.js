import React, { useState } from "react";
import { useEffect } from "react";
import { GiCrossMark } from "react-icons/gi";

const TodoList = ({ list, setList, count, setCount,theme,setTheme }) => {
  const [variant, setVariant] = useState("all");
  // const [count, setCount] = useState(0);

  //BAD WAY
  // const handleListSize = (newList)=>{
  //   let cnt=0;
  //   newList.forEach(item => {
  //     if(item.status==="active"){
  //       cnt++;
  //     }
  //   });
  //   setCount(cnt);
  // }

  const clrCompleted =() =>{
   const newList = list.filter((ele) => ele.status === "active")
    setList(newList);
    localStorage.setItem("todo_list",JSON.stringify(newList));
  }

  const handleCompletion = (inactiveItem) => {
    let newList = [...list];
    newList.forEach((item) => {
      if (item.todo === inactiveItem) {
        // item.status=item.status==="inactive"?"active":"inactive";
        if (item.status === "inactive") {
          item.status = "active";
          setCount(count + 1);
        } else {
          item.status = "inactive";
          setCount(count - 1);
        }
      }
    });
    setList(newList);
    localStorage.setItem("todo_list",JSON.stringify(newList));
    // handleListSize(newList);
  };
  const handleDelete = (deleteItem) => {
    // console.log("abcd");
    let newList = [...list];
    newList = newList.filter((item) => {
      if (item.todo === deleteItem && item.status === "active") {
        setCount(count - 1);
      }
      return item.todo !== deleteItem;
    });
    setList(newList);
    localStorage.setItem("todo_list",JSON.stringify(newList));
    // handleListSize(newList);
  };

  // useEffect(() => {
  //   handleListSize(list);
  // }, [list.length])

  return (
    <div className="main_list">
      <div className={`todo_list ${theme==='light' ? "light" : "dark"}`}>
        {/*<p className="inactive">
          Jog around the park 3x <GiCrossMark className="cross_icon" />
  </p>*/}

        {variant === "all" &&
          list.map((item) => (
            <div className="para_icon" key={item.todo}>
              <div
                className={
                  `todo_item ${item.status}`
                  // item.status === "inactive" ? "inactive todo_item" : "todo_item"
                }
              >
                <p onClick={() => handleCompletion(item.todo)}>{item.todo}</p>
                <GiCrossMark
                  className="cross_icon"
                  onClick={() => handleDelete(item.todo)}
                />
              </div>
            </div>
          ))}
        {variant === "active" &&
          list
            .filter((ele) => ele.status === "active")
            .map((item) => (
              <div className="para_icon" key={item.todo}>
                <div
                  className={
                    `todo_item ${item.status}`
                    // item.status === "inactive" ? "inactive todo_item" : "todo_item"
                  }
                >
                  <p onClick={() => handleCompletion(item.todo)}>{item.todo}</p>
                  <GiCrossMark
                    className="cross_icon"
                    onClick={() => handleDelete(item.todo)}
                  />
                </div>
              </div>
            ))}
        {variant === "completed" &&
          list
            .filter((ele) => ele.status !== "active")
            .map((item) => (
              <div className="para_icon" key={item.todo}>
                <div
                  className={
                    `todo_item ${item.status}`
                    // item.status === "inactive" ? "inactive todo_item" : "todo_item"
                  }
                >
                  <p onClick={() => handleCompletion(item.todo)}>{item.todo}</p>
                  <div>
                  <GiCrossMark
                  className="cross_icon"
                  onClick={() => handleDelete(item.todo)}
                  />
                  </div>
                </div>
              </div>
            ))}

            
        {/* <p>Read for 1 hour <GiCrossMark className="cross_icon" /></p>
        <p>pick up groceries <GiCrossMark className="cross_icon" /></p>
  <p>Complete todo app on frontend mentor <GiCrossMark className="cross_icon" /></p>*/}
      </div>
      <div className={`footer ${theme==='light' ? "light" : "dark"}`}>
        <p>{count} items left</p>
        <div>
          <p style={{color:"blue"}}onClick={()=>setVariant("all")}>All</p>
          <p onClick={()=>setVariant("active")}>Active</p>
          <p onClick={()=>setVariant("completed")}>Completed</p>
        </div>
        <p onClick={clrCompleted}>Clear completed</p>
      </div>
    </div>
  );
};

export default TodoList;
