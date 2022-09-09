import React, { useId, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodoItem } from '../../features/todos/toDoSlice';

const ToDoInput = () => {
  const dispatch = useDispatch();
  const [errorShow, setErrorShow] = useState(false);
  const [toDoItem, setToDoItem] = useState({
    id: useId(),
    content: "",
    isCompleted: false,
  });
  const handleNewToDo = (e) => {
    setErrorShow(false);
    const { value } = e.target;
    setToDoItem({ ...toDoItem, content: value });
  }
  const AddToDo = () => {
    return toDoItem.content ? dispatch(createTodoItem(toDoItem)) : setErrorShow(true);
  }
  return (
    <>
      {errorShow && <div className='error'>Please enter a todo</div>}
      <div className='todo-input-wrapper'>
        <input onChange={handleNewToDo} type="text" name="toDoİtem" id="toDoİtem" className='to-do' placeholder='Enter a todo...' />
        <button id='btn-add-todo' onClick={AddToDo}><i className="fa-solid fa-plus"></i></button>
      </div>
    </>
  )
}

export default ToDoInput