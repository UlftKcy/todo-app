import React from 'react'
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const todo_items = useSelector(state=>state.todos.todo_items);
  return (
    <div>TodoList</div>
  )
}

export default ToDoList;