import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodoItem, updateTodoItem } from '../../features/todos/toDoSlice';
import ToDoUpdate from './ToDoUpdate';
import useError from '../../utils/useError';

const ToDoItem = ({ todo_items }) => {
  const dispatch = useDispatch();
  const [updateToDoInput, setUpdateToDoInput] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorShow, setErrorShow] = useError();

  const handleUpdate = (id) => {
    setUpdateToDoInput(id);
    setIsEditing(true);
  };
  const handleCompleted = (todo) => {
    setIsCompleted(!isCompleted);
    todo = { ...todo, isCompleted: isCompleted }
    dispatch(updateTodoItem(todo));
  };

  return (
    <>
      {React.Children.toArray(todo_items.map((todo_item) => (
        <>
          <div className='todo-card'>
            {updateToDoInput === todo_item.id && isEditing ? <ToDoUpdate todo={todo_item} setErrorShow={setErrorShow} setIsEditing={setIsEditing} /> :
              <>
                <div className='todo-left'>
                  <span className='todo-check'>
                    <input type="radio"
                      name='completed_todo'
                      onClick={() => handleCompleted(todo_item)}
                      className={todo_item.isCompleted ? "completed" : "incompleted"}
                    />
                  </span>
                  <span className={todo_item.isCompleted ? 'todo-content todo-completed' : 'todo-content'}>{todo_item.content}</span>
                </div>
                {!todo_item.isCompleted && <div className='todo-right'>
                  <button className='btn-edit todo-right-btn' onClick={() => handleUpdate(todo_item.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                  <button className='btn-del todo-right-btn' onClick={() => dispatch(deleteTodoItem(todo_item.id))}><i className="fa-solid fa-trash"></i></button>
                </div>}
              </>
            }
          </div>
          {updateToDoInput === todo_item.id && errorShow ? <div className='error'>Please enter a todo at least 3 characters</div> : ""}
        </>
      )))}
    </>
  )
}
export default ToDoItem;