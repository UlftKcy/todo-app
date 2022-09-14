import React, { useId, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodoItem } from '../../features/todos/toDoSlice';
import useError from '../../utils/useError';
import Loading from '../loading/Loading';

const ToDoInput = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.todos);
  const [errorShow, setErrorShow] = useError();
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
    if(toDoItem.content.length>=3){
      dispatch(createTodoItem(toDoItem));
      toDoItem.content="";
    }else{
      setErrorShow(true);
    }
  }
  return (
    <>
      {errorShow && <div className='error'>Please enter a todo at least 3 characters</div>}
      <div className='todo-input-wrapper'>
        <input onChange={handleNewToDo} value={toDoItem.content} type="text" name="toDoİtem" id="toDoİtem" className='to-do' placeholder='Enter a todo...' />
        <button id='btn-add-todo' onClick={AddToDo}>{loading ? <Loading /> : <i className="fa-solid fa-plus"></i>}</button>
      </div>
    </>
  )
}

export default ToDoInput