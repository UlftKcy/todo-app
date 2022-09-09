import axios from "axios";

const todo_base_url = "https://6318e1336b4c78d91b317b7c.mockapi.io/todos";

class ToDoService {
    getTodo() {
        return axios.get(todo_base_url);
    }
    createTodo(todo) {
        return axios.post(todo_base_url, todo)
    }
    updateTodo(todo_id, todo) {
        return axios.put(todo_base_url + '/' + todo_id, todo)
    }
    deleteTodo(todo_id) {
        return axios.delete(todo_base_url + '/' + todo_id)
    }
}

export default new ToDoService();