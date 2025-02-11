import React, { useEffect, useState } from "react";
import { CallApi } from "../CallAPI";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const loadTodoList = async () => {
        const response = await new CallApi().withUsingGetMethod("todo/list");
        setTodoList(response?.data?.data);
    };

    useEffect(() => {
        loadTodoList();
        return () => {};
    }, []);

    // https://medium.com/@bhairabpatra.iitd/form-validation-in-react-using-functional-components-d86cd007268f  

    return (
        <>
            <h3>TodoList</h3>
            <div className="todo__item-list">
                {todoList?.length > 0 &&
                    todoList.map((todo) => {
                        return (
                            <div key={todo.id}>
                                <div className="todo__item">
                                    <div className="todo__item-body">
                                        <h4>Title: {todo.title}</h4>
                                        <p>Description: {todo.description}</p>
                                        <p>Status: {todo.status}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default TodoList;
