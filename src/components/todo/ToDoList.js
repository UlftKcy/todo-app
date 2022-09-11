import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoItems } from '../../features/todos/toDoSlice';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const dispatch = useDispatch();
  const {todo_items,error} = useSelector(state=>state.todos);

  useEffect(()=>{
    dispatch(fetchTodoItems());
  },[dispatch]);

  return (
    <div className='todo-list-wrapper'>
      {error && error}
      <ToDoItem todo_items={todo_items}/>
    </div>
  )
}

export default ToDoList;