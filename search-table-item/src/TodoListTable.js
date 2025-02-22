import React from "react";

const TodoListTable = ({ todoList }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList &&
                        todoList.map((todo) => {
                            return (
                                <tr key={todo?.title}>
                                    <td>{todo?.id}</td>
                                    <td>{todo?.userId}</td>
                                    <td>{todo?.title}</td>
                                    <td>{todo?.completed ? "True" : "False"}</td>
                                </tr>
                            );
                        })}
                    {todoList && todoList.length <= 0 ? <p> No Todo Found! </p> : ""}
                </tbody>
            </table>
        </>
    );
};

export default TodoListTable;
