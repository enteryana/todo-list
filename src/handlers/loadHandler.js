import dom from "../dom.js"
import getTodos from "../../apis/getTodos.js";
import createTodo from "../components/createTodo.js";

const loadHandler = async () => {
    // fetch todos
    const todos = await getTodos();
    console.log(todos);
    // render todos
    todos.forEach((todoData) => {
        const todoDom = createTodo(todoData);
        dom.list.append(todoDom);
    });
};

export default loadHandler;
