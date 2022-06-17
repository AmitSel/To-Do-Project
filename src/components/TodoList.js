import React from "react";
//Importing Components
import Todo from './Todo';

const TodoList = ()=>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
          <Todo />
        </ul>
      </div>
    );
}

export default TodoList;