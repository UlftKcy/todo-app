import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./todos/toDoSlice";



export default configureStore({
    reducer:{
      todos:ToDoSlice,  
    },
})