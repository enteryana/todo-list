import deleteTodo from "../../apis/deleteTodo.js";

const deleteHandler = async (id) => {
    // remove from dom
    document.getElementById(id).remove();
    await deleteTodo(id);
};

export default deleteHandler;
