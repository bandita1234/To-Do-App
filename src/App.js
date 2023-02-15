import "./App.css";
import React,{useState} from "react";
import light_bg from "./images/bg-desktop-light.jpg";
import dark_bg from "./images/bg-desktop-dark.jpg";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useEffect } from "react";


function App() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const handleSubmit = (todoItem)=>{
    // setList([...list,todoItem]);
    setList([...list,{status:"active",todo:todoItem}]); 
    setCount(count+1);
    localStorage.setItem("todo_list",JSON.stringify([...list,{status:"active",todo:todoItem}]));
  }
  // console.log(list);

  const toogleTheme = () =>{
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }

  useEffect(() => {
    document.body.className = theme ; 
  }, [theme])
  useEffect(() => {
    // const data = localStorage.getItem("todo_list");
    // console.log(data);
    const newList = JSON.parse(localStorage.getItem("todo_list"));
    if(newList){
      setList(newList);
      setCount(newList.length);
    }
  }, [])
  


  return (
    <div className="main">
    <div>
    {theme==='light'? <img src={light_bg} alt="light-bg" /> : <img src={dark_bg} alt="dark-bg" />}
    </div>
      
      <div className="App">
        <div className="to_do">
          <div className="heading">
            <h1>TO DO!</h1>
            <div onClick={toogleTheme}>
            {theme==='light' ? <BsFillMoonFill fontSize="26px" /> : <BsFillSunFill fontSize="26px"/>}
            </div>
          </div>
         {/* <TodoForm list={list} setList={setList}/> */}
         <TodoForm handleSubmit={handleSubmit} theme={theme} setTheme = {setTheme}/>
          <TodoList list={list} setList={setList} count={count} setCount={setCount} theme={theme} setTheme = {setTheme}/>
        </div>
      </div>
    </div>
  );
}

export default App;
