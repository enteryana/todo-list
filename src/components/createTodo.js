import checkboxHandler from "../handlers/checkboxHandler.js";
import deleteHandler from "../handlers/deleteHandler.js";

const createTodo = (todoData) => {
    // container
    const container = document.createElement('div');
    container.classList.add('todo');
    container.id = todoData.id;

    // title
    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = todoData.title;

    //checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoData.comleted;

    checkbox.addEventListener('change', () => {
        checkboxHandler(todoData);
    });

    // delete btn
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Delete';

    deleteButton.addEventListener('click', () => {
        deleteHandler(todoData.id);
    });

    //append
    container.append(title, checkbox, deleteButton);

    return container;
};

export default createTodo;
