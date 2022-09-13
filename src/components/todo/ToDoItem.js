import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodoItem, fetchTodoItems, updateTodoItem } from '../../features/todos/toDoSlice';
import ToDoUpdate from './ToDoUpdate';
import useError from '../../utils/useError';

const ToDoItem = ({ todo_items }) => {
  const dispatch = useDispatch();
  const [updateToDoInput, setUpdateToDoInput] = useState(null);
  const [errorShow, setErrorShow] = useError();
  const handleUpdate = (id) => {
    setUpdateToDoInput(id)
  };
  const handleCompleted = (todo) => {
    todo = { ...todo, isCompleted: true }
    dispatch(updateTodoItem(todo));
  };
  useEffect(()=>{
    return () => {}
  },[]);
  return (
    <>
      {React.Children.toArray(todo_items.map((todo_item) => (
        <>
        <div className='todo-card'>
          {updateToDoInput === todo_item.id ? <ToDoUpdate todo={todo_item} setErrorShow={setErrorShow}/> :
            <>
              <div className='todo-left'>
                <span className='todo-check'>
                  <input type="radio"
                    name='completed_todo'
                    onClick={() => handleCompleted(todo_item)}
                    className={todo_item.isCompleted ? "completed":"incompleted"}
                  />
                </span>
                <span className='todo-content'>{todo_item.content}</span>
              </div>
              <div className='todo-right'>
                <button className='btn-edit todo-right-btn' onClick={() => handleUpdate(todo_item.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='btn-del todo-right-btn' onClick={() => dispatch(deleteTodoItem(todo_item.id))}><i className="fa-solid fa-trash"></i></button>
              </div>
            </>
          }
        </div>
        {updateToDoInput === todo_item.id && errorShow ? <div className='error'>Please enter a todo at least 3 characters</div> : "" }
        </>
      )))}
    </>
  )
}

export default ToDoItem;