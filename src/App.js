import React, { useState, useEffect } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

//main app
function App() {

  //Stat Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtedTodos, setFiltedTodos] = useState([]);
  
  //Run Once When the App start
  useEffect(()=> {
    getLocalTodos();
  }, []);  

  //Use Effect
  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  //Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFiltedTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFiltedTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFiltedTodos(todos)
        break;
    };
  };

  //Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Amit And Muhammad's To Do Project</h1>
      </header>
      {/* HTML Element */}
      <Form
        todos={todos} 
        setTodos={setTodos} 
        inputText = {inputText} 
        setInputText = {setInputText}
        setStatus = {setStatus}
      />
      <TodoList
       setTodos={setTodos} todos ={todos}
       filtedTodos={filtedTodos}
      />
    </div>
  );
}

export default App;
