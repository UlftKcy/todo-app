import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ToDoService from "../../api/ToDoService";

const initialState = {
    todo_items: [],
    loading: false,
    error: null,
}
export const fetchTodoItems = createAsyncThunk("todos/getTodo", async () => {
    const response = await ToDoService.getTodo();
    return response.data;
});
export const createTodoItem = createAsyncThunk("todos/create", async (todo) => {
    const response = await ToDoService.createTodo(todo);
    return response.data;
});
export const deleteTodoItem = createAsyncThunk("todos/delete", async (id) => {
    await ToDoService.deleteTodo(id);
    return { id };
});
const toDoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodoItems.pending, (state, action) => {
            state.loading = false;
            state.error = "";
        });
        builder.addCase(fetchTodoItems.fulfilled, (state, action) => {
            state.loading = false;
            state.todo_items = action.payload;
        });
        builder.addCase(fetchTodoItems.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching todo list";
        });
        builder.addCase(createTodoItem.fulfilled, (state, action) => {
            state.todo_items.unshift(action.payload);
        });
        builder.addCase(deleteTodoItem.fulfilled, (state, action) => {
            let index = state.todo_items.find(todo_item=>todo_item.id === action.payload.id)
            state.todo_items.splice(index,1);
        });
    }
})

export default toDoSlice.reducer;