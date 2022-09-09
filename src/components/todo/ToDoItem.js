import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodoItem } from '../../features/todos/toDoSlice';

const ToDoItem = ({ todo_items }) => {
  const dispatch = useDispatch();
  return (
    <>
      {React.Children.toArray(todo_items.map((todo_item) => (
        <div className='todo-card'>
          <div className='todo-left'>
            <span className='todo-check'>
              <input type="radio" />
            </span>
            <span className='todo-content'>{todo_item.content}</span>
          </div>
          <div className='todo-right'>
            <button className='btn-edit todo-right-btn'><i className="fa-solid fa-pen-to-square"></i></button>
            <button className='btn-del todo-right-btn' onClick={()=>dispatch(deleteTodoItem(todo_item.id))}><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      )))}
    </>
  )
}

export default ToDoItem;