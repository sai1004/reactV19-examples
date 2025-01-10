import React, { useEffect, useState } from "react";
import { CallApi } from "../CallAPI";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const loadTodoList = async () => {
        try {
            const response = await new CallApi().withUsingGetMethod("todo/list");
            setTodoList(response?.data?.data);
        } catch (error) {
            console.log("Somthing went wrong >> ", error);
        }
    };

    useEffect(() => {
        loadTodoList();
        return () => {};
    }, []);

    return (
        <>
            <h3>TodoList</h3>
            {todoList.length > 0 &&
                todoList.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <div className="todo__item">
                                <h4>Title: {todo.title}</h4>
                                <p>Description: {todo.description}</p>
                                <p>Status: {todo.status}</p>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default TodoList;
