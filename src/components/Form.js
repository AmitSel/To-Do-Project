import React from "react";

const Form = () =>{
  //every time the input text is changed this will be executed
  const inputTextHandler = (e) =>{
    console.log(e.target.value);
  };
    return(
        <form>
      {/* line 11 is the input of the todo text */}
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
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