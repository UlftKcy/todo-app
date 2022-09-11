import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ToDoService from "../../api/ToDoService";

const initialState = {
    todo_items: [],
    loading: false,
    error: null,
}
// get all todo items
export const fetchTodoItems = createAsyncThunk("todos/getTodo", async () => {
    const response = await ToDoService.getTodo();
    return response.data;
});
// create a todo item
export const createTodoItem = createAsyncThunk("todos/create", async (todo) => {
    const response = await ToDoService.createTodo(todo);
    return response.data;
});
// update a todo item
export const updateTodoItem = createAsyncThunk("todos/update", async (todo) => {
    const response = await ToDoService.updateTodo(todo.id, todo);
    return response.data;
});
// delete a todo item
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
            state.loading = true;
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

        builder.addCase(createTodoItem.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(createTodoItem.fulfilled, (state, action) => {
            state.loading = false;
            state.todo_items.unshift(action.payload);
        });

        builder.addCase(createTodoItem.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error create todo";
        });

        builder.addCase(updateTodoItem.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });

        builder.addCase(updateTodoItem.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.todo_items.findIndex(todo_item => todo_item.id === action.payload.id);
            state.todo_items[index] = {
                ...state[index],
                ...action.payload,
              };
        });
        builder.addCase(updateTodoItem.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error update todo";
        });

        builder.addCase(deleteTodoItem.fulfilled, (state, action) => {
            let index = state.todo_items.findIndex(todo_item => todo_item.id === action.payload.id)
            state.todo_items.splice(index, 1);
        });
    }
})

export default toDoSlice.reducer;