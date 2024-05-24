import dom from "../dom.js"
import addTodoHandler from "../handlers/addTodoHandler.js";

const addTodoEvent = () => { 
    dom.btn.addEventListener('click', addTodoHandler);
};

export default addTodoEvent;
