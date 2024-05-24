import dom from "../dom.js";
import addTodo from "../../apis/addTodo.js";
    
const addTodoHandler = async() => {
    const value = dom.input.value;
    if (!value) {
        return;
    }
    const todoData = {
        title: value,
        completed: false
    }
    await addTodo(todoData);
};

export default addTodoHandler;
