import React from 'react'
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import "./style/Todos.css";

const Todos = () => {
  return (
    <div className='todo-wrapper'>
      <ToDoInput />
      <ToDoList />
    </div>
  )
}

export default Todos;