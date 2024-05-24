import dom from "../dom.js";
import addTodoHandler from "../handlers/addTodoHandler.js";

const enterEvent = () => {
    dom.input.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            addTodoHandler();
        }
    });
};

export default enterEvent;
