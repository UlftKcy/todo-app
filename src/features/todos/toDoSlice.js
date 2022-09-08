import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todo_items:[],
    loading:false,
    error:null,
}
export const fetchTodoItems = createAsyncThunk("todos/fetchList",async()=>{
    const response = await axios.get("https://6318e1336b4c78d91b317b7c.mockapi.io/todos ");
    return response.data;
})
const toDoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTodoItems.pending,(state,action)=>{
            state.loading = false;
            state.error = "";
        });
        builder.addCase(fetchTodoItems.fulfilled,(state,action)=>{
            state.loading = false;
            state.todo_items = action.payload;
        });
        builder.addCase(fetchTodoItems.rejected,(state,action)=>{
            state.loading = false;
            state.error = "Error fetching";
        });
    }
})

export default toDoSlice.reducer;