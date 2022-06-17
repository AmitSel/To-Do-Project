import React from "react";

const Form = ({setInputText, todos, setTodos, inputText}) =>{
  //every time the input text is changed this will be executed
  const inputTextHandler = (e) =>{
    setInputText(e.target.value);
  };

  const sumbitTodoHandler = (e) =>{
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random()*1000 }
    ])
    setInputText("");
  }

    return(
        <form>
      {/* line 11 is the input of the todo text */}
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}


export default Form;