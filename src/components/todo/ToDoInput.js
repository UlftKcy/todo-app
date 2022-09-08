import React, { useId, useState } from 'react'
import { useDispatch } from 'react-redux'

const ToDoInput = () => {
  const dispatch = useDispatch();
  const [toDoItem,setToDoItem] = useState({
    id:useId(),
    content:"",
    isCompleted:false,
  });
  const handleNewToDo = (e)=>{
    const {name,value} = e.target; 
    setToDoItem({...toDoItem,[name]:value});
  }
  const AddToDo = ()=>{
    console.log(toDoItem)
  }
  return (
    <div className='todo-input-wrapper'>
      <input onChange={handleNewToDo} value={toDoItem.content} type="text" name="toDoİtem" id="toDoİtem" className='to-do' placeholder='Enter a todo...' />
      <button id='btn-add-todo' onClick={AddToDo}><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}

export default ToDoInput