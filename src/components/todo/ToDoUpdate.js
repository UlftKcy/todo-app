import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodoItem } from '../../features/todos/toDoSlice';
import "./style/Todos.css";

const ToDoUpdate = ({ todo }) => {
    const updateTodoRef = React.useRef(null);
    const [errorShow, setErrorShow] = useState(false);
    const dispatch = useDispatch();
    const updateToDo = () => {
        todo = { ...todo, content: updateTodoRef.current.value }
        return todo.content ? dispatch(updateTodoItem(todo)) : setErrorShow(true);
    }
    useEffect(() => {
        updateTodoRef.current.focus();
    }, [updateTodoRef]);
    return (
        <>
            <input ref={updateTodoRef} onChange={()=>setErrorShow(false)} type="text" name='update_todo' className='update-todo' />
            <button className='btn-update todo-right-btn' onClick={updateToDo}><i className="fa-solid fa-floppy-disk"></i></button>
        </>
    )
}

export default ToDoUpdate;