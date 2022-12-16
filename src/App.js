import "./App.css";
import React,{useState} from "react";
import light_bg from "./images/bg-desktop-light.jpg";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {BsMoonFill} from "react-icons/bs"; 

function App() {
  const [list, setList] = useState([]);
  const handleSubmit = (todoItem)=>{
    // setList([...list,todoItem]);
    setList([...list,{status:"active",todo:todoItem}]); 
  }
  
  // console.log(list);
  return (
    <>
      <img src={light_bg} alt="light-bg" />
      <div className="App">
        <div className="to_do">
          <div className="heading">
            <h1>TO DO!</h1>
            <BsMoonFill className="moon_icon"/>
          </div>
         {/* <TodoForm list={list} setList={setList}/> */}
         <TodoForm handleSubmit={handleSubmit} />
          <TodoList list={list} setList={setList}/>
        </div>
      </div>
    </>
  );
}

export default App;
