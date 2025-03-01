import { useEffect, useState } from "react";
import "./App.css";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

function App() {
    const [todoList, setTodoList] = useState<Array<Todo>>([]);
    const [todo, setTodo] = useState({ id: 0, title: "", completed: false } as Todo);

    const handleTodoForm = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setTodo({ ...todo, id: Date.now(), [name]: value.trim() });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo.title) {
            setTodoList((prev) => {
                return [...prev, todo];
            });
            localStorage.setItem("todoList", JSON.stringify(todoList));
            setTodo({ id: 0, title: "", completed: false });
        }
    };

    const toggleCompleted = (id: number) => {
        setTodoList(todoList.map((todo) => (todo.id == id ? { ...todo, completed: !todo.completed } : todo)));
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };

    const deleteTodo = (id: number) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };

    useEffect(() => {
        console.log("totot", todoList.length);
        const tododata = JSON.parse(JSON.stringify(localStorage.getItem("todoList")));
        console.log("tododata", tododata);
        setTodoList(JSON.parse(tododata));
    }, []);

    return (
        <>
            <div className="todo-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title"> Title: </label>
                    <input type="text" name="title" value={todo.title} onChange={handleTodoForm} />
                    <button type="submit">ADD</button>
                </form>
            </div>
            <div className="todo-list-container">
                {todoList &&
                    todoList.map((todo: Todo) => {
                        return (
                            <div key={todo.id} className="todo">
                                <div>
                                    <h4>
                                        Title: {todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span>}
                                    </h4>
                                </div>
                                <div>
                                    <span>Status: </span>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleCompleted(todo.id)}
                                    />
                                </div>
                                <div>
                                    <button onClick={() => deleteTodo(todo.id)}> X </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}

export default App;
