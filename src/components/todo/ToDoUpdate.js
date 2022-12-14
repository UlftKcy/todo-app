import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodoItem } from '../../features/todos/toDoSlice';
import "./style/Todos.css";

const ToDoUpdate = ({ todo, setErrorShow,setIsEditing }) => {
    const [toDoContent, setToDoContent] = useState(todo.content);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setErrorShow(false);
        setToDoContent(e.target.value)
    }
    const updateToDo = () => {
        let toDoTrimmedContent = toDoContent.trim();
        if (toDoTrimmedContent.length >= 3) {
            todo = { ...todo, content: toDoTrimmedContent };
            dispatch(updateTodoItem(todo));
            setIsEditing(false);
        } else {
            setErrorShow(true);
        }
    }
    return (
        <>
            <input value={toDoContent} onChange={(e) =>handleChange(e)} type="text" name='update_todo' className='update-todo' />
            <button className='btn-update todo-right-btn' onClick={updateToDo}><i className="fa-solid fa-floppy-disk"></i></button>
        </>
    )
}

export default ToDoUpdate;