import React, { useState } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Amit's ToDo List</h1>
      </header>
      {/* HTML Element */}
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
