import React from 'react'

const ToDoInput = () => {
  return (
    <div className='todo-input-wrapper'>
      <input type="text" name="todo-input" id="todo-input" className='to-do' placeholder='Enter a todo...' />
      <button id='btn-add-todo'><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}

export default ToDoInput